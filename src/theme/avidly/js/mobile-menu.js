// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const mobileT rigger = document.querySelector('.mobile-trigger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileOverlay = document.querySelector('.mobile-overlay');
  const closeIcon = document.querySelector('.mobile-menu .close-icon');
  
  // Open mobile menu
  if (mobileTrigger) {
    mobileTrigger.addEventListener('click', function() {
      mobileMenu.classList.add('active');
      mobileOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }
  
  // Close mobile menu
  function closeMobileMenu() {
    mobileMenu.classList.remove('active');
    mobileOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }
  
  if (closeIcon) {
    closeIcon.addEventListener('click', closeMobileMenu);
  }
  
  if (mobileOverlay) {
    mobileOverlay.addEventListener('click', closeMobileMenu);
  }
  
  // Close on escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
      closeMobileMenu();
    }
  });
});

