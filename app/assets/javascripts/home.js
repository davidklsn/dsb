$(document).ready(function(){

  function goToByScroll(id){
    // Scroll
    console.log(id);
    $('html, body').animate({ scrollTop: $('#' + id).offset().top }, 'slow');
  }

  $(".menu a").click(function(e) {
    e.preventDefault();
    goToByScroll($(this).attr('class'));   
  });

  //Hide groups for animation privacy 
  //$('.init-hide').toggleClass('hidden');

  // @TODO Create animations for front and menu
  
});
