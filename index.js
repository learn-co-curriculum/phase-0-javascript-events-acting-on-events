// Grab the dodger element
const dodger = document.getElementById("dodger");

function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

// Function to move the dodger to the right
function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left < 360) {
    dodger.style.left = `${left + 1}px`;
  }
}

// Add an event listener
document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    moveDodgerLeft();
  } else if (event.key === "ArrowRight") {
    moveDodgerRight();
  }
});

// Grab the dodger element
//    javascript
//    const dodger = document.getElementById('dodger');

// Move the dodger left:
//    - Get its current position.
//    - If it’s not at the left edge, move it 1 pixel to the left.

// Move the dodger right:
//    - Get its current position.
//    - If it’s not at the right edge, move it 1 pixel to the right.

// Handle keydown events:
//    - If the left arrow key is pressed, move the dodger left.
//    - If the right arrow key is pressed, move the dodger right.
