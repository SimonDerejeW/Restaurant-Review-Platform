// document.getElementById('restaurant-name').innerText = data.name;
//       document.getElementById('description').innerText = data.description;
//       document.getElementById('location').innerText = data.location;
//       document.getElementById('contact').innerText = data.contact;
//       document.getElementById('opening-time').innerText = data.openingTime;
//       document.getElementById('closing-time').innerText = data.closingTime;

document.addEventListener('DOMContentLoaded', function () {
  const ownerID = sessionStorage.getItem('curOwner');
  const editButton = document.getElementById('editButton');
  const editForm = document.getElementById('editForm');
  const submitEditButton = document.getElementById('submitEdit');

  // Event listener to show the edit form
  editButton.addEventListener('click', function () {
    editForm.style.display = 'block';
  });

  fetch(`http://localhost:3000/restaurant/${ownerID}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + sessionStorage.getItem('access_token'),
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Owner details:', data);
      // Update the page content with the fetched data
      document.getElementById('restaurant-name').innerText = data.name;
      document.getElementById('description').innerText = data.description;
      document.getElementById('location').innerText = data.location;
      document.getElementById('contact').innerText = data.contact;
      document.getElementById('opening-time').innerText = data.openingTime;
      document.getElementById('closing-time').innerText = data.closingTime;

      document.getElementById('edited-name').value = data.name;
      document.getElementById('edited-location').value = data.location;
      document.getElementById('edited-contact').value = data.contact;
      document.getElementById('edited-opening-time').value = data.openingTime;
      document.getElementById('edited-closing-time').value = data.closingTime;
      document.getElementById('edited-description').value = data.description;
    })
    .catch((error) => {
      console.error('Error fetching owner details:', error);
    });
  submitEditButton.addEventListener('click', function () {
    // Get the edited values
    const editedName = document.getElementById('edited-name').value;
    const editedLocation = document.getElementById('edited-location').value;
    const editedContact = document.getElementById('edited-contact').value;
    const editedOpeningTime = document.getElementById(
      'edited-opening-time',
    ).value;
    const editedClosingTime = document.getElementById(
      'edited-closing-time',
    ).value;
    const editedDescription =
      document.getElementById('edited-description').value;

    // Create the PUT request to update the details
    fetch(`http://localhost:3000/restaurant/65a18e8f30935c505fb9b50a`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + sessionStorage.getItem('access_token'),
      },
      body: JSON.stringify({
        name: editedName,
        location: editedLocation,
        contact: editedContact,
        openingTime: editedOpeningTime,
        closingTime: editedClosingTime,
        description: editedDescription,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Restaurant details updated:', data);
        // You can add further actions or feedback to the user
      })
      .catch((error) => {
        console.error('Error updating restaurant details:', error);
        // Handle errors appropriately
      });
  });
});
