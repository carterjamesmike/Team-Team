// const acceptHandler = async (event) => {
//     event.preventDefault();
   
//     const id = document.querySelector('#request-id');

//     if (id) {
//       const resposne = await fetch('/api/requests', {
//         method: 'PUT',
//         headers: {
//           'Content-Type' : 'applicaiton/json',
//         },
//       });
//       if (response.ok) {
//         document.location.replace('/parent');
//       } else {
//         console.log (err)
//         alert('Failed to accept request')
//       }
//     }
  
//   };

  function acceptHandler ()  {
    console.log('Hello')
  
  };


let acceptBtn = document.getElementById('test');
acceptBtn.addEventListener('click',  acceptHandler())