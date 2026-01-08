
// Authentication
const User = require('../models/user.model');
const catchAsync = require('../utils/catchAsync');
const jwt = require('jsonwebtoken');
const AppError = require('../utils/appError');
const sendEmail = require('../utils/email');

const signToken = (user) => {
    return jwt.sign({ id: user._id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRE })
}

const createSendToken = (user, statusCode, res) => {
    const token = signToken(user)
    res.cookie('lt', token, {
        // cookie ს სიცოცხლის ვადა 
        maxAge: process.env.COOKIE_EXPIRES * 24 * 60 * 60 * 1000,
        // 
        secure: process.env.NODE_ENV === 'dev' ? false : true,
        // javascript ბრაუზერში  ვერ წაიკითხავს cookie ს 
        httpOnly: true,
        // 
        sameSite: 'lax'
    })
    // ვაბრუნებთ სტატუსის კოდს და ახალ მომხმარებელს Json ფორმატში 
    res.status(statusCode).json({
        status: 'sucess',
        user
    })
}



// signUp ფუნქცია 
const signUp = catchAsync(async (req, res, next) => {
    // ვიღებთ წვდომას მონაცემებზე 
    const { fullname, email, password } = req.body
    // ვქმნით ახალ ობიექტს 
    const newUser = await User.create({
        fullname,
        email,
        password
    });

    const verificationToken = newUser.createVerificationToken();
    await newUser.save({ validateBeforeSave: false });

    const verificationURL = `${req.protocol}://${req.get('host')}/users/verify/${verificationToken}`;

    // verification email-ის გაგზავნა
    console.log('Verification URL:', verificationURL);
    await sendEmail(
        email,
        'Verify your email',
        `Please click this link to verify your account: ${verificationURL}`
    );

    res.status(201).json({
        status: 'success',
        message: 'User created successfully',
        user: newUser
    });

})

// login 
const login = catchAsync(async (req, res, next) => {
    // ვიღებთ წვდომას ემაილზე და პაროლზე 
    const { email, password } = req.body

    // ვეძებთ ემაილს user კოლექციიდან 
    const user = await User.findOne({ email });
    // თუ არ გვაქვს user ვაბრუნებთ ერორის მმართელ ფუნქციას 
    if (!user) {
        return next(new AppError('your email or password is incorrect', 404))
    }
    if (!user.isVerified) {
        return next(new AppError('Please verify your email before logging in', 401));
    }
    // ვადარებთ შეყვანილ პაროლს (password) და ბაზაში შენახულ ჰეშირებულ პაროლს (user.password)
    // comparePassword არის user მოდელში განსაზღვრული მეთოდი, რომელიც bcrypt-ს ანალოგიურად ადარებს
    const iscorrect = await user.comparePassword(password, user.password);
    // თუ პაროლი არ ემთხვევა, ვაბრუნებთ შეცდომას
    if (!iscorrect) {
        return next(new AppError('your email or password is incorrect', 404))
    }
    // თუ email და password სწორია, ვაბრუნებთ წარმატებულ პასუხს (200)
    // response-ში ვაგზავნით iscorrect ცვლადს და user ობიექტს
    createSendToken(user, 200, res)

})

const logout = (req, res) => {
    res.cookie('lt', '', {
        maxAge: 1,        // მალე ვადაგასული გახდეს
        httpOnly: true    // უსაფრთხოებისთვის
    });
    res.status(200).json({
        status: 'success',
        message: 'Logged out successfully'
    });
};
const updateUser = catchAsync(async (req, res, next) => {
    if (req.user.role !== 'admin') {
        return next(new AppError('You are not allowed to change users', 403));
    }

    const userId = req.params.id; // URL პარამეტრიდან ვიღებთ
    const { fullname, email,  role } = req.body;

    const updateData = { fullname, email, role };
   
    const user = await User.findByIdAndUpdate(userId, updateData, { new: true });

    res.status(200).json({
        status: 'success',
        user
    });
});


const getAllUsers = catchAsync(async (req, res) => {
    const users = await User.find();
    res.status(200).json({
        status: 'success',
        users
    })
})


const verifyEmail = catchAsync(async (req, res, next) => {
    const { token } = req.params;

    // ვეძებთ მომხმარებელს verificationToken-ით
    const user = await User.findOne({ verificationToken: token });

    if (!user) {
        return next(new AppError('Invalid or expired verification token', 400));
    }

    // ვაფდეითებთ მომხმარებლის ვალიდაციას
    user.isVerified = true;
    user.verificationToken = undefined; // token ვაუფასურებთ
    await user.save({ validateBeforeSave: false });

    res.status(200).json({
        status: 'success',
        message: 'Email verified successfully! You can now login.'
    });
});





// ექსპორტს ვუკეთებთ ფუნქციებსს 
module.exports = { signUp, login, logout, updateUser, verifyEmail, getAllUsers }