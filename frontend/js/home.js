document.addEventListener('DOMContentLoaded', function () {
  const restaurantContainer = document.getElementById('restaurantContainer');
  const emptyMessage = document.getElementById('emptyMessage');

  class restaurantGrid {
    restaurant;
    constructor(restaurant_id, title) {
      console.log(restaurant_id);
      this.restaurant = `
        <div  class="card w-full rounded-xl sm:mb-0 bg-white">
        <button
     onclick="saveRestaurantId('${restaurant_id}')">
          <img src="../photo/card-image.jpg" alt="ch" class="rounded-xl"/>
            <div class="bg-white-50 p-4">
                <p class="font-bold text-xl">${title}</p>
            </div>
        </button>
    </div>`;
    }
  }

  fetch('http://localhost:3000/restaurant', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + sessionStorage.getItem('access_token'),
    },
  })
    .then((response) => response.json())
    .then((restaurants) => {
      if (restaurants.length === 0) {
        emptyMessage.style.display = 'block';
      } else {
        restaurants.forEach((restaurant) => {
          console.log(restaurant);
          const restaurantItem = new restaurantGrid(
            restaurant._id,
            restaurant.name,
          );
          restaurantContainer.innerHTML += restaurantItem.restaurant;
        });
      }
    })
    .catch((error) => {
      console.error('Error fetching restaurant data:', error);
    });
});

function saveRestaurantId(item) {
  sessionStorage.setItem('curRestaurant', `${JSON.stringify(item)}`);
  console.log(item);
  window.location.href = 'http://127.0.0.1:5500/frontend/PAGES/detail.html';
}
