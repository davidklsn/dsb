$(document).ready(function(){
  jQuery(function() {
    $("a.fancybox").fancybox();
  });

  $('#s-och-d').fadeIn('slow').animate({
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

    $('html, body').animate({ scrollTop: $('#om-oss').offset().top }, 'slow');
  });

  $('.close').on('click', function(e){
    e.preventDefault();
    var string = $(this).attr('id');
    var id = string.substr(0, string.indexOf('-'));

    $('#' + id).addClass('hidden');
    $('.text').css('opacity', '0');
    $('.overlay').addClass('hidden');
  });

  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    $(document).off("scroll");
    
    $('a').each(function () {
        $(this).removeClass('active');
    })
    $(this).addClass('active');
  
    var target = this.hash,
        menu = target;
    $target = $(target);
    $('html, body').stop().animate({
        'scrollTop': $target.offset().top+2
    }, 500, 'swing', function () {
        window.location.hash = target;
        $(document).on("scroll", onScroll);
    });
  });

  $(document).on("scroll", onScroll);
    
  function onScroll(event){
    var scrollPos = $(document).scrollTop();
    var menuItems = $('.menu-item');

    menuItems.each(function (i, d) {
        var id = $(d).attr('href');
        var refElement = $(id);
        
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#menu-center ul li a').removeClass("active");
            $(d).addClass("active");
        }
        else{
            $(d).removeClass("active");
        }
    });

  }
});
