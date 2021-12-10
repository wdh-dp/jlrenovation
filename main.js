

// NAVBAR 1 //


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
    document.getElementById("navbar").style.top = "0px";
  } else {
    document.getElementById("navbar").style.top = "-80px";
  }
} 





// FLECHE TOP //


jQuery(function(){
  $(function () {
      $(window).scroll(function () { 
          if ($(this).scrollTop() > 200 ) { 
              $('#scrollUp').css('right','10px'); 
          } else { 
              $('#scrollUp').removeAttr( 'style' ); 
          }
      });
  });
});














