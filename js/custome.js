
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

new WOW().init();

var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel)