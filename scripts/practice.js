$(document).ready(function() {
  // Function to fetch national parks data
  function fetchParks() {
    // Make API request to fetch national parks data
    $.ajax({
      url: 'https://api.nps.gov/api/v1/parks',
      type: 'GET',
      data: {
        api_key: 'YOUR_API_KEY', // Replace with your NPS API key
        limit: 5 // Limiting to 5 parks for demonstration
      },
      success: function(data) {
        displayParks(data.data);
      },
      error: function(err) {
        console.log('Error fetching parks:', err);
      }
    });
  }

  // Function to display parks data
  function displayParks(parks) {
    var parkList = $('#parkList');
    parkList.empty(); // Clear previous content

    // Loop through each park and create card for it
    parks.forEach(function(park) {
      var parkCard = `
        <div class="col-md-4 mb-4">
          <div class="card">
            <img src="${park.images[0].url}" class="card-img-top" alt="${park.fullName}">
            <div class="card-body">
              <h5 class="card-title">${park.fullName}</h5>
              <p class="card-text">${park.description}</p>
              <a href="${park.url}" class="btn btn-primary" target="_blank">Learn More</a>
            </div>
          </div>
        </div>
      `;
      parkList.append(parkCard); // Append card to parkList
    });
  }

  // Fetch parks data when page is loaded
  fetchParks();
});
