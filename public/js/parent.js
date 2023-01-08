const newFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#request-title').value.trim();
    const date = document.querySelector('#request-date').value.trim();
    const comment = document.querySelector('#request-comment').value.trim();
  
    if (title && date && comment) {
      const response = await fetch(`/api/request`, {
        method: 'POST',
        body: JSON.stringify({ title, date, comment }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/parent');
      } else {
        console.log(err)
        alert('Failed to create project');
      }
    }
  };
  
//   const delButtonHandler = async (event) => {
//     if (event.target.hasAttribute('data-id')) {
//       const id = event.target.getAttribute('data-id');
  
//       const response = await fetch(`/api/projects/${id}`, {
//         method: 'DELETE',
//       });
  
//       if (response.ok) {
//         document.location.replace('/profile');
//       } else {
//         alert('Failed to delete project');
//       }
//     }
//   };

const newChildHandler = async (event) => {
  event.preventDefault();
 

  const name = document.querySelector('#child-name').value.trim();


  if (name) {
    const response = await fetch(`/api/children`, {
      method: 'POST',
      body: JSON.stringify({ name }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/parent');
    } else {
      console.log(err)
      alert('Failed to add child');
    }
  }
};
  
  document
    .querySelector('.new-request-form')
    .addEventListener('submit', newFormHandler);
  
  // document
  //   .querySelector('.project-list')
  //   .addEventListener('click', delButtonHandler);

  document
    .querySelector('.new-child-form')
    .addEventListener('submit', newChildHandler);



  