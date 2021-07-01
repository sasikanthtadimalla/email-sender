require("dotenv").config();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "hotmail",
  auth: {
    user: process.env.EMAIL_ID,
    pass: process.env.PASSWORD
  }
});

let otp = (Math.random()).toString();
otp = otp.slice(otp.length - 4, otp.length);
console.log("OTP: " + otp);

const mailOptions = {
  from: process.env.EMAIL_ID,
  to: process.env.TO,
  subject: "Welcome To Chirp - Your Login OTP",
  text: "Hey Man! Messi is a free agent today.",
  html: '<h1>Welcome Sasi!</h1><h3>Here is your OTP:</h3><h1> ' + otp + ' </h1>'
};

transporter.sendMail(mailOptions, (err, info) => {
  if (err) {
    console.log(err);
  } else {
    console.log("OTP email successfully sent.");
  }
});
