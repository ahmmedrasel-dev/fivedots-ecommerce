
const handleBrand = () => {
  dropdown('filter-brand');
}

const handleColor = () => {
  dropdown('filter-color');
}


const handlePrice = () => {
  dropdown('filter-by-price');
}


// Mobile Menu
$(document).ready(function () {
  $(".hs-menubar").hsMenu();

  // Nice Selected
  $('#select_js').niceSelect();
});


$(function () {

  // Product Gallery Image Slider

  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.slide-nav',
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    nextArrow: false,
    prevArrow: false
  });

  $('.slide-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    prevArrow: '<i class="fas fa-angle-left left-arrow"></i>',
    nextArrow: '<i class="fas fa-angle-right right-arrow"></i>'
  });


  $('.brand-container').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: '<i class="fas fa-angle-left left-arrow"></i>',
    nextArrow: '<i class="fas fa-angle-right right-arrow"></i>'
  });




  // Product Image Zoom.
  // $("#img_01").elevateZoom();
  // $("#img_02").elevateZoom();
  // $("#img_03").elevateZoom();
  // $("#img_04").elevateZoom();
  // $("#img_05").elevateZoom();


  /*==========NICE NUMBER==========*/
  $('input[type="number"]').niceNumber();

})

$(document).ready(function () {
  $('#product').owlCarousel({
    loop: true,
    autoplay: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 4
      }
    }
  })

  $('#brand').owlCarousel({
    loop: true,
    autoplay: true,
    margin: 8,
    responsive: {
      0: {
        items: 3
      },
      600: {
        items: 4
      },
      1000: {
        items: 5
      }
    }
  })

});

$(document).ready(function () {
  $('.state').select2();
});

$(document).ready(function () {
  $('.city').select2();
});

new WOW().init();

var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel)


