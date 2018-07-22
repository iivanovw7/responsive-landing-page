//Main Site JS
function ScrollView(element) {
  document.querySelector(element).scrollIntoView({
    behavior: 'smooth'
  });

  //elemnt sample: '.hello'
}

$(document).ready(function () {

  $("#menu-toggle").click(function(e) {
    console.log('toggled')
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
  });



  $("#menu-hide").click(function(e) {
    console.log('toggled')
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
  });

});

