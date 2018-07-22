//Main Site JS

function Scroll() {

  window.scrollTo({
    top: 1100,
    left: 0,
    behavior: 'smooth'
  });
}

function ScrollView(element) {
  document.querySelector(element).scrollIntoView({
    behavior: 'smooth'
  });

  //elemnt sample: '.hello'
}

$(document).ready(function(){



});
