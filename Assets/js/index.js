document.addEventListener('DOMContentLoaded', function () {
  
  // slider
  var slide = document.getElementById('slide')
  var sliderNum = document.getElementById('num-of-users');
  var totalCost = document.getElementById('total-cost');

  slide.onchange = function() {
    sliderNum.innerHTML = this.value;
    totalCost.innerHTML = this.value * 17.5
  }

}, false);