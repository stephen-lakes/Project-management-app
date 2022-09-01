document.addEventListener('DOMContentLoaded', function () {
  
  // slider
  var slide = document.getElementById('slide')
  var sliderNum = document.getElementById('num-of-users');
  var totalCost = document.getElementById('total-cost');

  slide.onchange = function() {
    sliderNum.innerHTML = this.value;
    totalCost.innerHTML = this.value * 17.5
  }

  navToggler = document.getElementById('btn');
  navToggler.addEventListener('click', function(){
    var navContainer = document.getElementById('nav')
    if (navContainer.style.display !== "block"){
      navContainer.style.display = "block"
    }else {
      navContainer.style.display = "none"
    }
  }); 


}, false);

  