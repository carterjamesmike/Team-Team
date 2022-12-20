
"use strict";
const nodemailer = require("nodemailer");

async function main() {
  //let testAccount = await nodemailer.createTestAccount();


  let transporter = nodemailer.createTransport({
    host: "outlook.office365.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "team_village@outlook.com", // generated ethereal user
      pass: "teamVillage12!@" // generated ethereal password
    },
    // tls: {
    //     rejectUnauthorized: true
    // }
  });

  transporter.verify(function (error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });


  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <team_village@outlook.com>', // sender address
    to: "carterjamesmike@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    //html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);
