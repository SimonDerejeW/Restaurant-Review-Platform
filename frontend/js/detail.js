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
