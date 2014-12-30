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
      { duration: 1700, complete: function() { /*fadeInAnd(); fadeInArrows();*/ } });
  }
  setTimeout(function(){ fadeInAnd(); fadeInArrows(); }, 2100)

  function fadeInAnd(){
    $('.and').fadeIn('slow').animate({
      'opacity': 0.3
      },
      { duration: 2000, complete: function() {  } });
  }
  
  function fadeInArrows(){    
    $('#right').fadeIn('slow').animate({
      'right': '-40px', 'opacity': 1
      }, { duration: 2000, queue: false }, function() {
        // Animation complete.
    });

    $('#left').fadeIn('slow').animate({
      'left': '-40px', 'opacity': 1
      }, { duration: 2000, complete: function() { dropDownMenu(); } } );
  }
  
  function dropDownMenu(){
    $('.menu').animate({
      'top': 0
    }, {duration: 'slow'});
  }

  //popup hosts
  $('.image-container').on('click', function(e){
    e.preventDefault();
    var id = $(this).attr('id');

    $('.overlay').removeClass('hidden');
    $('#' + id).removeClass('hidden');
    $('#' + id).find('.text').animate({
      'opacity': 1
    }, { duration: 1500 })

    $('html, body').animate({ scrollTop: $('#group2').offset().top }, 'slow');
  });

  $('.close').on('click', function(e){
    e.preventDefault();
    var string = $(this).attr('id');
    var id = string.substr(0, string.indexOf('-'));

    $('#' + id).addClass('hidden');

    $('.text').css('opacity', '0');

    
    $('.overlay').addClass('hidden');
  });
  
});
