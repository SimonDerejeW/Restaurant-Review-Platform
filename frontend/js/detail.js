// // detail.js

// document.addEventListener('DOMContentLoaded', function () {
//   const createRestaurantBtn = document.getElementById('createRestaurantBtn');

//   createRestaurantBtn.addEventListener('click', function () {
//     const name = document.getElementById('restaurant-name').value;
//     const description = document.getElementById('description').value;
//     const openingTime = document.getElementById('openimg-time').value;
//     const closingTime = document.getElementById('closing-time').value;
//     const location = document.getElementById('location').value;
//     const contact = document.getElementById('phone-number').value;
//     // Additional inputs for opening/closing time, contact, etc.

//     const restaurantData = {
//       name: name,
//       description: description,
//       openingTime: openingTime,
//       closingTime: closingTime,
//       location: location,
//       contact: contact,
//       // Additional fields as needed
//     };

//     fetch('http://localhost:3000/restaurant', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(restaurantData),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.error) {
//           console.error('Restaurant creation failed:', data.error);
//           // Handle error appropriately, e.g., show an error message to the user
//         } else {
//           console.log('Restaurant created successfully:', data);
//           // You can redirect or perform other actions upon successful creation
//         }
//       })
//       .catch((error) => {
//         console.error('Error during restaurant creation:', error);
//         // Handle other errors, e.g., network issues
//       });
//   });
// });

document.addEventListener('DOMContentLoaded', function () {
  // Get the ownerID from the URL, you may need to adjust this based on your routing
  const restaurantID = JSON.parse(sessionStorage.getItem('curRestaurant'));

  console.log(restaurantID);
  // console.log(restaurantID);
  // console.log(access_token);
  // Fetch restaurant details using the ownerID
  fetch(`http://localhost:3000/restaurant/${restaurantID}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + sessionStorage.getItem('access_token'),
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Restaurant details:', data);
      // Update the page content with the fetched data
      document.getElementById('restaurant-name').innerText = data.name;
      document.getElementById('description').innerText = data.description;
      document.getElementById('location').innerText = data.location;
      document.getElementById('contact').innerText = data.contact;
      document.getElementById('opening-time').innerText = data.openingTime;
      document.getElementById('closing-time').innerText = data.closingTime;
    })
    .catch((error) => {
      console.error('Error fetching restaurant details:', error);
    });
});
