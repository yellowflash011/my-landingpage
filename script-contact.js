// Create an IntersectionObserver to detect when the section is in the viewport


// Hamburger Menu and Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');

// Toggle the menu on click
hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  hamburger.classList.toggle('active'); // Optional, to add an active class to the hamburger (e.g., to change the icon)
});
