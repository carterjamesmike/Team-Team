const nodemailer = require("nodemailer");

async function main() {

  let transporter = nodemailer.createTransport({
    host: "outlook.office365.com",
    port: 587,
    secure: false,
    auth: {
      user: "team_village@outlook.com", 
      pass: "teamVillage12!@" 
    },
  });

  transporter.verify(function (error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });


  let info = await transporter.sendMail({
    from: '"Team Village" <team_village@outlook.com>', 
    to: "carterjamesmike@gmail.com", 
    subject: "A new date has been requested", 
    text: "Hello village, a new date has been requested. ", 
  });

  console.log("Message sent: %s", info.messageId);

}

main().catch(console.error);
