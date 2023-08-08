let touchStartX = 0;
let touchEndX = 0;
let isMobileScreen = window.innerWidth <= 480;

document.addEventListener('touchstart', (event) => {
  touchStartX = event.touches[0].clientX;
  isMobileScreen = window.innerWidth <= 480;
});

document.addEventListener('touchmove', (event) => {
  touchEndX = event.touches[0].clientX;
});

document.addEventListener('touchend', () => {
  if (isMobileScreen && touchEndX - touchStartX > 50) {
    // Perform your action for left to right swipe
    let nav = document.querySelector('nav');
    nav.style.display = 'flex';
  } else if (isMobileScreen && touchEndX - touchStartX < -50) {
    // Perform your action for right to left swipe
    let nav = document.querySelector('nav');
    nav.style.display = 'none';
  }
});



