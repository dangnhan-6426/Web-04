// navbar-toggle
$(document).ready(function () {
    $('#nav-toggle').click(function () { 
        $('label').slideToggle();
        
    });    
});

// Slideshow container
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

// add-see-2
function openTab(b1) {
  var i, x;
  x = document.getElementsByClassName("containerTab");
  for (i = 0; i < x.length; i++) {
  
  if (window.matchMedia("(min-width: 480px)").matches) {
    x[i].style.display = "none";
    document.getElementById(b1).style.display = "grid";
  } else {
    document.getElementById(b1).style.display = "block";
  }
  }
}

  


// Slideshow container
$('.image-slider').slick({
  lazyLoad: 'ondemand',
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  dots:true,
  arrows: true,
  draggable: false,
  prevArrow: `<button type='button' class='slick-prev slick-arrow'><i class="fa-solid fa-chevron-left"></i></button>`,
  nextArrow: `<button type='button' class='slick-next slick-arrow'><i class="fa-solid fa-chevron-right"></i></button>`,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        arrows: true,
        infinite: false,
      },
    },
  ],
});

