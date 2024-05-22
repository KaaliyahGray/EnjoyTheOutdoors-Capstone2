"use strict";

// <----Filter By Park Type ---->
function filterParkType(State) {
  const filteredLocation = State === 'all' ? nationalParks : nationalParks.filter(nationalPark => {
    return nationalPark.State.toLowerCase().includes(State.toLowerCase());
  });
  return filteredLocation;
}

// grab the value from the dropdown, which national park has been selected
// let selectedLocation  = document.getElementById('parkFilter').value;

// // Render course cards based on filtered courses
// function renderParks(filteredLocation) {
//   const ParkContainer = document.getElementById('Location');
//   ParkContainer.innerHTML = '';
//   filteredLocation.forEach(nationalPark => {
//     const card = `
//         <div class="col-md-4 mb-4">
//           <div class="card">
//             <img src="${nationalPark.Image}" class="card-img-top" alt="${nationalPark.LocationName}">
//             <div class="card-body">
//               <h5 class="card-title">${nationalPark.Address}</h5>
//               <h5 class="card-title"> Location ${nationalPark.ZipCode}</h5>
//               <p class="card-text">Phone: ${nationalPark.Phone}</p>
//               <p class="card-text">Type: ${nationalPark.type}</p>
//             </div>
//           </div>
//         </div>
//       `;
//     ParkContainer.innerHTML += card;
//   });
// }


function renderLocation(filteredLocation) {
  const locationContainer = document.getElementById('stateFilter');
  locationContainer.innerHTML = '';

  const selectedState = stateFilter.value; // Get the selected state

  filteredLocation.forEach(nationalPark => {
    // Check if the national park matches the selected state
    if (nationalPark.State === selectedState) {
      const card = `
        <div class="col-md-4 mb-4">
          <div class="card">
            <img src="${nationalPark.Image}" class="card-img-top" alt="${nationalPark.LocationName}">
            <div class="card-body">
              <h5 class="card-title">${nationalPark.Address}</h5>
              <h5 class="card-title"> Location ${nationalPark.ZipCode}</h5>
              <p class="card-text">Phone: ${nationalPark.Phone}</p>
              <p class="card-text">Type: ${nationalPark.type}</p>
            </div>
          </div>
        </div>
      `;
      locationContainer.innerHTML += card;
    }
  });
}

// Assuming stateFilter is the select element
stateFilter.addEventListener('change', function() {
  renderLocation(filteredLocation); // Render based on selected state
});





// Event listener for park filter dropdown change
document.getElementById('parkFilter').addEventListener('change', function() {
  const selectedLocation = this.value;
  const filteredLocation = filterParkType(selectedLocation); // Fixed function name here
  renderParks(filteredLocation);
});