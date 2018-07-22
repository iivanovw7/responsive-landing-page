//Main Site JS
function ScrollView(element) {
  document.querySelector(element).scrollIntoView({
    behavior: 'smooth'
  });

  //elemnt sample: '.hello'
}

$(document).ready(function () {

  $("#sidebar").mCustomScrollbar({
    theme: "minimal"
  });

  $('#sidebarCollapse').on('click', function () {
    // open or close navbar
    $('#sidebar').toggleClass('active');
    // close dropdowns
    $('.collapse.in').toggleClass('in');
    // and also adjust aria-expanded attributes we use for the open/closed arrows
    // in our CSS
    $('a[aria-expanded=true]').attr('aria-expanded', 'false');
  });

});

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