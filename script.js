document.addEventListener('DOMContentLoaded', function () {
  const apiUrl = 'http://localhost:3000/api/traffic'; // Update with your backend URL

  fetch(apiUrl)
      .then(response => response.json())
      .then(jsonData => {
          const spotRow = document.getElementById('spotRow');

    
          jsonData.forEach(spot => {
              const spotCard = document.createElement('div');
              spotCard.className = 'col-lg-4';
              spotCard.innerHTML = `
                  <div class="card card1 mb-3 shadow">
                      <div class="card-body">
                          <div class="d-flex justify-content-between align-items-center">
                              <h5 class="card-title">Spot Index ${spot['Spot Index']}</h5>
                              <i class="bi bi-file-earmark"></i>
                          </div>
                          <p class="card-text">
                              Spot Status: ${spot['Spot Status']}
                          </p>
                      </div>
                  </div>
              `;
              spotRow.appendChild(spotCard);
          });
      })
      .catch(error => console.error('Error fetching data:', error));
});