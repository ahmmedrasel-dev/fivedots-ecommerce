
const dropdown = (id) => {
  const dropdownElement = document.getElementById(id);
  console.log(dropdownElement)
  if (dropdownElement.style.display == 'block') {
    dropdownElement.style.display = 'none'
  } else {
    dropdownElement.style.display = 'block'
  }
}

const handleBrand = () => {
  dropdown('filter-brand');
}

const handleColor = () => {
  dropdown('filter-color');
}


const handlePrice = () => {
  dropdown('filter-by-price');
}


// Jquary Code Here

$(function () {

  /*==========NICE SELECT============*/

  $('#nice-select').niceSelect();


})


$(document).ready(function () {

  $(".hs-menubar").hsMenu();

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


  // Product Image Zoom.
  // $("#img_01").elevateZoom();
  // $("#img_02").elevateZoom();
  // $("#img_03").elevateZoom();
  // $("#img_04").elevateZoom();
  // $("#img_05").elevateZoom();


  /*==========NICE NUMBER==========*/
  $('input[type="number"]').niceNumber();

})

new WOW().init();

var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel)


