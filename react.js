document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
  
    function showSlide(slideIndex) {
      if (slideIndex < 0) {
        slideIndex = slides.length - 1;
      } else if (slideIndex >= slides.length) {
        slideIndex = 0;
      }
  
      slides.forEach(function (slide) {
        slide.style.opacity = 0;
      });
  
      slides[slideIndex].style.opacity = 1;
    }
  
    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }
  
    function previousSlide() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    }
  
    setInterval(nextSlide, 5000); 
    // Automatically transition to the next slide every 5 seconds
  
    const nextButton = document.querySelector('.next-button');
    const previousButton = document.querySelector('.previous-button');
  
    nextButton.addEventListener('click', nextSlide);
    previousButton.addEventListener('click', previousSlide);
  });
    