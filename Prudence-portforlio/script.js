// // JavaScript to hide and show the header based on scroll direction
// let lastScrollTop = 0; // Initial scroll position

// window.addEventListener('scroll', function() {
//   let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

//   if (currentScroll > lastScrollTop) {
//     // Scrolling down, hide the header
//     document.querySelector('header').style.top = '-100px'; // Hide the header
//   } else {
//     // Scrolling up, show the header
//     document.querySelector('header').style.top = '0'; // Show the header
//   }

//   // Update the last scroll position
//   lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Prevent negative scroll value
// });

document.querySelector('.btn').addEventListener('click', function() {
  alert('Contact form will be implemented soon!');
});