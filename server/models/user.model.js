const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const crypto = require('crypto')
const userSchema = mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6,


    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    },
    isVerified: { // email-ვერიფიკაციისთვის
        type: Boolean,
        default: true
    },
    verificationToken: String
})
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 12);  // ← აქ უნდა გქონდეს await
    next();
})
userSchema.methods.comparePassword = async function (candidatePassword, userPassword) {
    return await bcrypt.compare(candidatePassword, userPassword);
}

userSchema.methods.createVerificationToken = function () {
    const token = crypto.randomBytes(32).toString('hex');
    this.verificationToken = token;
    return token;
};



const User = mongoose.model('User', userSchema, 'users')
module.exports = User