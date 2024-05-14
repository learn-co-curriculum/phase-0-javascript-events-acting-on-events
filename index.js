// Your code here
const dodger = document.querySelector('#dodger')
dodger.style.backgroundColor = '#FF69B4'
dodger.style.bottom = '0px'
dodger.style.left = '20px'

const moveDodgerLeft = () => {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 5}px`;
  }
}

const moveDodgerRight = () => {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left + 5}px`;
  }
}

document.addEventListener('keydown',(e) => {
  if(e.key === 'ArrowLeft'){
    moveDodgerLeft()
  }else if(e.key === 'ArrowRight'){
    moveDodgerRight()
  }
})
