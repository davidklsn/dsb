$(document).ready(function(){

  function goToByScroll(id){
    // Scroll
    $('html, body').animate({ scrollTop: $('#group2').offset().top }, 'slow');
  }

  $(".menu a").click(function(e) {
    e.preventDefault();
    goToByScroll($(this).attr('class'));   
  });

  // @TODO Create animations for front and menu
  //
});
