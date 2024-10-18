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

