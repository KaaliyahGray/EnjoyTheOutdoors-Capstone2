"use strict";

const nationalPark = [
    {name: "this", parkType:"", location: 'Arizona' },
    {name: "practice", parkType:"Gym", location: '' },
    {name: "is", parkType:"", location: 'Arizona' },
    {name: "for", parkType:"Gym", location: '' },
    {name: "practice", parkType:"", location: 'Arizona' },
    {name: "the type", parkType:"Gym", location: '' },
    {name: "Good Job", parkType:"", location: 'Arizona' },



];

 // function with the loop
function location(nationalPark) {
    let i = 0;
    while (i < nationalPark.length) {
        const park = nationalPark[i];
        if (park.location >= "Arizona") {
            console.log(`Here are your choices of parks in AZ ${park.name}`);
        } else {
          
        }
        i++;
    }
}    
// Call the function
location(nationalPark);

 // function with the loop
 function Type(nationalPark) {
    let i = 0;
    while (i < nationalPark.length) {
        const park = nationalPark[i];
        if (park.parkType >= "Gym") {
            console.log(`Here are your choices gym parks ${park.name}`);
        } else {
          
        }
        i++;
    }
}    
// Call the function
Type(nationalPark);