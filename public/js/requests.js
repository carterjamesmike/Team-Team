document.addEventListener('click', async (e) => {
    if(e.target.matches('[type="button"]')) {
      const requestId = e.target.id
      const requestEmail = e.target.name.trim();
      console.log(requestId)
      console.log(requestEmail)

      const newResponse = await fetch(`/api/request/${requestId}`, {
        method: "PUT",
        body: JSON.stringify({requestId}),
        headers: {
          'Content-Type' : 'applicaiton/json',
        },
      });      

      const response = await fetch('/api/nodemailer', {
        method: "POST",
        body: JSON.stringify({requestEmail}),
        headers: {
          'Content-Type' : 'application/json',
        },
      });

      if (newResponse.ok && response.ok) {
        document.location.replace('/request');
        
      } else {
        alert('Failed to send email')
      }
    }
  });
