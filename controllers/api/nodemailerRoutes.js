const router = require('express').Router();
const nodemailer = require("nodemailer");

//Route for sending email to specific user
router.post('/', async (req, res) => {

  try {
    //Gets specific user email from request
    const emailData = req.body.requestEmail;

    //Build the transporter to send email
    let transporter = nodemailer.createTransport({
      host: "outlook.office365.com",
      port: 587,
      secure: false,
      auth: {
        user: "team_village@outlook.com", 
        pass: "teamVillage12!@" 
      },
    });
    
    //Verify the transporter works
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
      } else {
        console.log("Server is ready to take our messages");
      }
    });
    
    //The sender, recipient, and message to be sent 
    let info = await transporter.sendMail({
      from: '"Team Village" <team_village@outlook.com>', 
      to: emailData, 
      subject: "A new date has been requested", 
      text: "Hello village, a new date has been requested. ", 
    });
    
    console.log("Message sent: %s", info.messageId);

  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }

});

module.exports = router;