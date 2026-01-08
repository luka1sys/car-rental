// არ მუშაობს ნამდვილ ემაილზე ტესტისთვისაა 
const nodemailer = require('nodemailer')
const dotenv = require('dotenv')
dotenv.config()
const transporter = nodemailer.createTransport({
    host: 'sandbox.smtp.mailtrap.io',
    port: 2525,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
})

const sendEmail = async (to, subject, text) => {
    try {
        await transporter.sendMail({
            from: 'chatbook',
            to,
            subject,
            text
        })
    } catch (err){
        console.log('error',err)
    }
}
module.exports = sendEmail