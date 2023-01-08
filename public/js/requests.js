
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
        alert('Failed to send email')
      }
    }
  });
