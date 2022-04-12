const rangeInputSm = document.querySelectorAll(".range-input-sm input"),
  priceInputSM = document.querySelectorAll(".price-input-sm input"),
  rangeSm = document.querySelector(".slider-sm .progress-sm");
let priceGapSm = 1000;

priceInputSM.forEach(input => {
  input.addEventListener("input", e => {
    let minPriceSm = parseInt(priceInputSM[0].value),
      maxPriceSm = parseInt(priceInputSM[1].value);

    if ((maxPriceSm - minPriceSm >= priceGapSm) && maxPriceSm <= rangeInputSm[1].max) {
      if (e.target.className === "input-min") {
        rangeInputSm[0].value = minPriceSm;
        rangeSm.style.left = ((minPriceSm / rangeInputSm[0].max) * 100) + "%";
      } else {
        rangeInputSm[1].value = maxPriceSm;
        rangeSm.style.right = 100 - (maxPriceSm / rangeInputSm[1].max) * 100 + "%";
      }
    }
  });
});

rangeInputSm.forEach(input => {
  input.addEventListener("input", e => {
    let minValSm = parseInt(rangeInputSm[0].value),
      maxValSm = parseInt(rangeInputSm[1].value);

    if ((maxValSm - minValSm) < priceGapSm) {
      if (e.target.className === "range-min") {
        rangeInputSm[0].value = maxValSm - priceGapSm
      } else {
        rangeInputSm[1].value = minValSm + priceGapSm;
      }
    } else {
      priceInputSM[0].value = minValSm;
      priceInputSM[1].value = maxValSm;
      rangeSm.style.left = ((minValSm / rangeInputSm[0].max) * 100) + "%";
      rangeSm.style.right = 100 - (maxValSm / rangeInputSm[1].max) * 100 + "%";
    }
  });
});