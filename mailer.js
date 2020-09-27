const nodemailer = require('nodemailer');
const conf = require('ini');
const fs = require('fs');

let confPath = './config/config.ini';
let config = conf.parse(fs.readFileSync(confPath, 'utf-8'));

const transporter = nodemailer.createTransport({
  host: config.mailer.host,
  port: consif.mailer.port,
  auth: {
    user: config.mailer.user,
    pass: config.mailer.pass
  }
});

const sendMsg = (msg) => {
  const mailOptions = {
    from: config.mailer.user,
    to: ["d.dobryakov@kubteh.ru"],
    subject: config.mailer.subject,
    text: msg
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

module.exports = sendMsg;
