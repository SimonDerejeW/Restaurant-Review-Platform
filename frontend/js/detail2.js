document.addEventListener('DOMContentLoaded', function () {
  const commentContainer = document.getElementById('commentsContainer');

  const curr = JSON.parse(sessionStorage.getItem('curRestaurant'));
  class commentGrid {
    comment;
    constructor(username, opinion) {
      this.comment = `
            <div class="flex items-start space-x-2 mt-3">
                        <img class="w-10 h-10 rounded-full" src="../photo/samilogo.png" alt="user-photo" />
                        <div>
                            <h4 class="font-bold">${username}</h4>
                            <p class="pt-2">${opinion}</p>
                        </div>
                    </div>
            `;
    }
  }

  fetch(`http://localhost:3000/restaurant/${curr}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + sessionStorage.getItem('access_token'),
    },
  })
    .then((response) => response.json())
    .then((restaurant) => {
      restaurant.comments.forEach((comment) => {
        console.log(comment);
        const commentItem = new commentGrid(comment.username, comment.opinion);
        commentContainer.innerHTML += commentItem.comment;
      });
    })
    .catch((error) => {
      console.error('Error fetching comment data:', error);
    });
});
