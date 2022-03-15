// Jquary Code Here
$(function () {
  /*==========NICE SELECT============*/
  $('#nice-select').niceSelect();
})


const dropdown = (id) => {
  const dropdowElement = document.getElementById(id);
  if (dropdowElement.style.display === 'block') {
    dropdowElement.style.display = 'none'
  } else {
    dropdowElement.style.display = 'block'
  }
}

const handdleBrand = () => {
  dropdown('filter-brand');
}

const handdleColor = () => {
  dropdown('filter-color');
}


const handdlePrice = () => {
  dropdown('filter-by-price');
}