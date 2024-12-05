/* import './style.css'; */
import Flickity from 'flickity';

$(document).ready(function() {
  $('#menu-toggle').click(function() {
      $(this).toggleClass('is-active');
      $('#mobile_menu').slideToggle(function() {
          if ($(this).is(':visible')) {
              $('.toggle-icon').hide();
              $('.close').show(); 
          } else {
              $('.toggle-icon').show(); 
              $('.close').hide();
          }
      });
  });
});

/* Image/card carousel for News & events  */

document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.getElementById("carousel");
    const images = carousel.querySelectorAll("img");
    const pagination = document.getElementById("pagination");
  
    const totalImages = images.length;
    const imageWidth = 300 + 10; // Image width + gap
    let currentIndex = 0;
  
    // Clone first and last images for wrap-around effect
    const firstClone = images[0].cloneNode(true);
    const lastClone = images[totalImages - 1].cloneNode(true);
  
    // Append clones
    carousel.appendChild(firstClone);
    carousel.insertBefore(lastClone, images[0]);
  
    // Adjust carousel to start at the first image
    carousel.style.transform = `translateX(-${imageWidth}px)`;
  
    // Create pagination dots
    for (let i = 0; i < totalImages; i++) {
      const dot = document.createElement("span");
      dot.dataset.index = i;
      dot.addEventListener("click", () => goToSlide(i));
      pagination.appendChild(dot);
    }
  
    const dots = pagination.querySelectorAll("span");
  
    function goToSlide(index) {
      currentIndex = index;
      updateCarousel();
    }
  
    function updateCarousel() {
      const offset = (currentIndex + 1) * imageWidth; // Offset considering cloned slides
      carousel.style.transition = "transform 0.5s ease";
      carousel.style.transform = `translateX(-${offset}px)`;
  
      // Update active dot
      dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === currentIndex);
      });
    }
  
    function handleTransitionEnd() {
      // Handle wrap-around when reaching clones
      if (currentIndex === -1) {
        carousel.style.transition = "none";
        currentIndex = totalImages - 1;
        carousel.style.transform = `translateX(-${(currentIndex + 1) * imageWidth}px)`;
      } else if (currentIndex === totalImages) {
        carousel.style.transition = "none";
        currentIndex = 0;
        carousel.style.transform = `translateX(-${(currentIndex + 1) * imageWidth}px)`;
      }
    }
  
    // Event listeners
    carousel.addEventListener("transitionend", handleTransitionEnd);
  
    // Initial update
    updateCarousel();
  });
  