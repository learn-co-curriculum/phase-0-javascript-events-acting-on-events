const dodger = document.getElementById("dodger")
dodger.style.backgroundColor = "green"

function moveDodgerLeft() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10)
  if (left > 0) {
    dodger.style.left = `${left-1}px`
  }
}

function moveDodgerRight () {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10)
  if (left < 360) {
    dodger.style.left = `${left + 1}px`
  }
}

function moveDodgerDown () {
  let bottomNumber = dodger.style.bottom.replace("px", "");
  let bottom = parseInt(bottomNumber, 10)
  if (bottom > 0) {
    dodger.style.bottom = `${bottom - 1}px`
  }
}

function moveDodgerUp () {
  let bottomNumber = dodger.style.bottom.replace("px", "");
  let bottom = parseInt(bottomNumber, 10)
  if (bottom < 380 ) {
    dodger.style.bottom = `${bottom + 1}px`
  }
}

document.addEventListener("keydown", function (event){
  if (event.key === "ArrowLeft") {
    moveDodgerLeft();
  } else if (event.key === "ArrowRight") {
    moveDodgerRight()
  } else if (event.key === "ArrowDown") {
    moveDodgerDown()
  } else if (event.key === "ArrowUp") {
    moveDodgerUp()
  }
})
