import Request from './fetch.mjs';
const request = new Request();
const restaurantContainer = document.querySelector('#restaurantContainer');

async function fetchRestaurants() {
  const response = await request.Get('restaurant');

  if (!response.ok) {
    const data = await response.json();
    alert(data.message);
    console.error(data);
  } else {
    const data = await response.json();

    if (data.length === 0) {
      // Display a message when the database is empty
      restaurantContainer.innerHTML = '<p>This page appears to be empty.</p>';
    } else {
      // Display the list of movies
      data.forEach((restaurant) => {
        const restaurantItem = new restaurantGrid(
          restaurant.id,
          restaurant.title,
          restaurant.description,
          restaurant.coverPage,
        );
        restaurantContainer.innerHTML += restaurantItem.restaurant;
      });
    }
  }
}

class restaurantGrid {
  restaurant;
  constructor(restaurant_id, title, image) {
    this.restaurant = `
        <div class="card w-full rounded-xl sm:mb-0 bg-white">
          <a href="./detail.html" onclick="sessionStorage.setItem('curRestaurant', ${restaurant_id})>
              <div>
                <img src="../photo/card-image.jpg" class="rounded-xl" src="${request.domain}${image}"/>
              </div>
              <div class="bg-white-50 p-4">
                <p class="font-bold text-xl">${title}t</p>
              </div>
          </a>
        </div>
        `;
  }
}

// Fetch and display movies when the page loads
document.addEventListener('DOMContentLoaded', fetchRestaurants);
