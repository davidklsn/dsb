$(document).ready(function(){
  jQuery(function() {
    $("a.fancybox").fancybox();
  });

  function goToByScroll(id){
    // Scroll
    $('html, body').animate({ scrollTop: $('#' + id).offset().top }, 'slow');
  }

  $(".menu a").click(function(e) {
    e.preventDefault();
    goToByScroll($(this).attr('class'));   
    $('.menu a').removeClass('active');
    $(this).addClass('active');
  });

  $('#group1').fadeIn('slow').animate({
    'opacity': 1
    },
    { duration: 2000, complete: function() { fadeInNames(); } });

  function fadeInNames(){
    $('.name').fadeIn('slow').animate({
      'opacity': 1,
      },
      { duration: 2000, complete: function() { fadeInAnd(); fadeInArrows(); } });
  }

  function fadeInAnd(){
    $('.and').fadeIn('slow').animate({
      'opacity': 0.3
      },
      { duration: 2000, complete: function() {  } });
  }
  
  function fadeInArrows(){    
    $('#right').fadeIn('slow').animate({
      'right': '-70px', 'opacity': 1
      }, { duration: 2000, queue: false }, function() {
        // Animation complete.
    });

    $('#left').fadeIn('slow').animate({
      'left': '-70px', 'opacity': 1
      }, { duration: 2000, complete: function() { dropDownMenu(); } } );
  }
  
  function dropDownMenu(){
    $('.menu').animate({
      'top': 0
    }, {duration: 'slow'});
  }
});
