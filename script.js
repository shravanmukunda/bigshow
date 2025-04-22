// Navigation functionality
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const header = document.querySelector('#navbar');

// Mobile menu toggle
if (hamburger) {
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
}

// Close mobile menu when clicking a nav item
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
});

// Header background on scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    header.style.background = 'rgba(0, 0, 0, 0.9)';
    header.style.padding = '10px 0';
    header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
  } else {
    header.style.background = 'transparent';
    header.style.padding = '20px 0';
    header.style.boxShadow = 'none';
  }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      window.scrollTo({
        top: target.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  });
});

// Animations on scroll
const animateOnScroll = () => {
  const elements = document.querySelectorAll('.service-card, .sport-item, .section-header');
  
  elements.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (elementPosition < windowHeight - 100) {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }
  });
};

// Set initial styles for animation
document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.service-card, .sport-item, .section-header');
  
  elements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  });
  
  // Trigger initial check
  animateOnScroll();
});

// Listen for scroll events
window.addEventListener('scroll', animateOnScroll);