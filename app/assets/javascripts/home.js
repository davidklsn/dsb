$(document).ready(function(){
  console.log('javascript');

  $(".menu a").click(function() {
    var id = '#' + $(this).attr('class');
    console.log(id);

    $('html, body').animate({
        scrollTop: $('#kuk').offset().top
    }, 2000);

    $('.init-hide').toggleClass('hidden');
  });


  // @TODO Create animations for front and menu
  //
});
