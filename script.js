// Create an IntersectionObserver to detect when the section is in the viewport
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible'); // Add class to make the section visible
    }
  });
}, { threshold: 0.5 }); // Trigger when 50% of the section is in view

// Target the Technologies section for the scroll effect
const techSection = document.querySelector('#technologies-use');
observer.observe(techSection);

// Hamburger Menu and Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');

// Toggle the menu on click
hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  hamburger.classList.toggle('active'); // Optional, to add an active class to the hamburger (e.g., to change the icon)
});
