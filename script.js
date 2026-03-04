const messages = ["Elevating Standards", "Sharpening Looks", "Building Confidence"];
let index = 0;

// Get the HTML element by its ID
const changeEl = document.getElementById("changing-h1");

// Function to update the text
function changeText() {
  // Use textContent for plain text for better security/performance
  changeEl.textContent = messages[index];
  
  // Increment the index and use the modulo operator (%) to loop back to the start of the array
  index = (index + 1) % messages.length; 
}

// Call the function immediately to show the first message
changeText(); 

// Set an interval to call the changeText function every 2000ms (2 seconds)
const intervalId = setInterval(changeText, 2000);
