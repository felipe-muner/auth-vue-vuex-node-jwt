require("dotenv").config();
const nodemailer = require("nodemailer");

console.log(process.env.USER_GMAIL);
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.USER_GMAIL,
    pass: process.env.PASS_GMAIL,
  },
});

const mailOptions = {
  from: "felipe.muner@gmail.com", // sender address
  to: "dina_said@mail.ru,felipe.muner@gmail.com", // list of receivers
  subject: "test NodeMailer", // Subject line
  html: "<p>ola</p>", // plain text body
};

transporter.sendMail(mailOptions, function (err, info) {
  if (err) console.log(err);
  else console.log(info);
});
