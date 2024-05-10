"use strict";

 // Array of student names
 const students = ["Alice", "Bob", "Charlie", "David", "Eva"];

 // Get the dropdown element
 const dropdown = document.getElementById('studentDropdown');
 // Populate the dropdown using a for loop
 for (let index = 0; index < students.length; index++) {
     const option = document.createElement('option');  // Create a new <option> element
     option.value = students[index];  // Set the value attribute of the option
     option.textContent = students[index];  // Set the text content of the option
     dropdown.appendChild(option);  // Add the option to the dropdown
 }

