
  // const acceptHandler = async (event) => {
//     //event.preventDefault();
//     console.log("Button Hi")
   
    // const requestId = event.target.getAttribute("data-id");
    // console.log(requestId)

    // if (id) {
    //   const resposne = await fetch('/api/requests', {
    //     method: 'PUT',
    //     headers: {
    //       'Content-Type' : 'applicaiton/json',
    //     },
    //   });
    //   if (response.ok) {
    //     document.location.replace('/parent');
    //   } else {
    //     console.log (err)
    //     alert('Failed to accept request')
    //   }
    // }
  
  // };

  // document
  // .getElementById('#accept-btn-' + request.id)
  // .addEventListener('click', acceptHandler);

// import { sendEmail } from "./bundle.js"

  function acceptHandler() {
    console.log("Heya")
  }
  document.addEventListener('click', async (e) => {
    if(e.target.matches('[type="button"]')) {
      const requestId = e.target.id
      const requestEmail = e.target.name.trim();
      console.log(requestId)
      console.log(requestEmail)
      const response = await fetch('/api/nodemailer', {
        method: "POST",
        body: JSON.stringify({requestEmail}),
        headers: {
          'Content-Type' : 'application/json',
        },
      });
      if (response.ok) {
  
        document.location.replace('/request');
      } else {
        //console.log(err)
        alert('Failed to send email')
      }
    }
  });
