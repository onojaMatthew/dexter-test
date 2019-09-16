const nodemailer = require("nodemailer");
const sendGridTransport = require("nodemailer-sendgrid-transport");

require("dotenv").config();

const transport = nodemailer.createTransport(sendGridTransport({
  auth: {
    api_key: process.env.EMAIL_SECRET.trim()
  }
}));

module.exports = function(to, from, subject, html) {
  return transport.sendMail({
    to,
    from,
    subject,
    html
  });
}