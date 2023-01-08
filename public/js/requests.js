
  
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

  function acceptHandler() {
    console.log("Heya")
  }

  document.addEventListener('click', async (e) => {
    if(e.target.matches('[type="button"]')) {
      const requestId = e.target.id
      const requestEmail = e.target.name
      console.log(requestId)
      console.log(requestEmail)
      sendEmail()
    }
  });
