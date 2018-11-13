// JavaScript Document
jQuery(document).ready(function($) {
   'use strict';		 

/* parallax
================================================== */
   
   	if( !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	
	$('#home').parallax("50%", 0.1);
	$('#services').parallax("50%",-.1);
	$('.testimonial').parallax("50%", .1);
	$('#contact').parallax("50%", .1);
	
	
	}

	/* animated
================================================== */
	
	 $('*[data-animated]').addClass('animated');
            function animated_contents() {
                $(".animated:appeared").each(function (i) {
                    var $this    = $(this),
                        animated = $(this).data('animated');

                    setTimeout(function () {
                        $this.addClass(animated);
                    }, 50 * i);

                });
            }

            animated_contents();
            $(window).scroll(function () {
                animated_contents();
            });
	

	

   
/* Nav Bar
================================================== */
		
		var $header = $( '#header-menu' );
		$( '.ha-waypoint' ).each( function(i) {
			var $this = $( this ),
				animClassDown = $this.data( 'animateDown' ),
				animClassUp = $this.data( 'animateUp' );
			
			$this.waypoint(function(direction) {
				
				if( direction === 'down' && animClassDown ) {
					$header.attr('class', 'ha-header ' + animClassDown );
				}
				else if( direction === 'up' && animClassUp ){
					$header.attr('class', 'ha-header ' + animClassUp );
				}			
			
			}, { offset: '0' } );
			
		});




/* stick menu 
================================================== */

  var $head = $( '#ha-header' );
			$( '.ha-waypoint' ).each( function(i) {
				var $el = $( this ),
					animClassDown = $el.data( 'animateDown' ),
					animClassUp = $el.data( 'animateUp' );

				$el.waypoint( function( direction ) {
					if( direction === 'down' && animClassDown ) {
						$head.attr('class', 'ha-header ' + animClassDown);
					}
					else if( direction === 'up' && animClassUp ){
						$head.attr('class', 'ha-header ' + animClassUp);
					}
				}, { offset: '100%' } );
			} );
			  

 

/* scrollIt
================================================== */	
	
$(function(){
	$.scrollIt({
	  upKey: 40,             // key code to navigate to the next section
	  downKey: 40,           // key code to navigate to the previous section
	  easing: 'linear',      // the easing function for animation
	  scrollTime: 900,       // how long (in ms) the animation takes
	  activeClass: 'active', // class given to the active nav element
	  onPageChange: null,    // function(pageIndex) that is called when page is changed
	  //topOffset: -1           // offste (in px) for fixed top navigation
	});
});



			
/* nicescroll
================================================== */		

var nice = false;
$(document).ready(
  function() { 
    nice = $("html").niceScroll();
  }
);

	
/* owlCarousel
================================================== */	

   $("#owl-demo-1").owlCarousel({
    items : 4,
    lazyLoad : true,
    navigation : true,
	navigationText : ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']
  }); 
  
   $("#owl-demo").owlCarousel({
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
	  pagination:true,
	  autoPlay : 5000,
	  navigationText : ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']
 
 
  });
  
/* flexslider
================================================== */  

$(window).load(function() {
  $('#carousel').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    itemWidth: 210,
    itemMargin: 5,
    asNavFor: '#slider'
  });
 
  $('#slider').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    sync: "#carousel"
  });
});

  $('.flexslider').flexslider({
    animation: "fade"
  });


/* Ajax work
================================================== */ 

    $('.hoveritem').click(function (event) {
        event.preventDefault();

        if ($('.ajax-box').hasClass('open-box')) {
            $('.ajax-box').addClass('closed-box');
            $('.ajax-box').removeClass('open-box');
        }

        var fileID = $(this).attr('data-project');

        if (fileID != null) {
            $('html,body').animate({
                scrollTop: $('.ajax-box').offset().top - 70
            }, 500);

        }

        $.ajax({
            url: fileID
        }).success(function (data) {
            $('.ajax-box').addClass('open-box');
            $('.ajax-box').html(data);
            $('.ajax-box').removeClass('closed-box');

            $('.close-work').click(function () {
                $('.ajax-box').addClass('closed-box');
                $('.ajax-box').removeClass('open-box');
                $('html,body').animate({
                    scrollTop: $('#work').offset().top - 70
                }, 500);
                setTimeout(function () {
                    $('.ajax-box').html('');
                }, 1000);
            });
        });

    });
	

/* fittext
================================================== */ 	

	$(".fittext1").fitText(1.1, { minFontSize: '30px', maxFontSize: '75px' });
	$(".fittext2").fitText(1.1, { minFontSize: '15px', maxFontSize: '22px' });
	
	

	
/* chart
================================================== */ 
 function initPieCharts() {

        var chart = $('.chart');
        chart.appear();

 

        chart.each(function() {

            $(this).on('appear', function() {

 

                var $this = $(this);

    

                if( !$this.hasClass('pie-chart-loaded') ) {

                    $this.easyPieChart({

                    animate: 2000,
					barColor: '#FC4B50',
					trackColor: '#1b1f24',
					scaleColor: '',
					scaleLength: 5,
					lineCap: 'square',
					lineWidth: 10,
					size: 120,
					rotate: 10,
					
					onStep: function(from, to, percent) {
					$(this.el).find('.percent').text(Math.round(percent));
					}
					
                    }).addClass('pie-chart-loaded');

                }

               

            });

        });

       

    }

  initPieCharts();
	
/* placeholder
================================================== */ 	
	
$('[placeholder]').focus(function() {
        var input = $(this);
        if (input.val() == input.attr('placeholder')) {
            input.val('');
            input.removeClass('placeholder');
        }
    }).blur(function() {
        var input = $(this);
        if (input.val() == '' || input.val() == input.attr('placeholder')) {
            input.addClass('placeholder');
            input.val(input.attr('placeholder'));
        }
    }).blur();
    $('[placeholder]').parents('form').submit(function() {
        $(this).find('[placeholder]').each(function() {
            var input = $(this);
            if (input.val() == input.attr('placeholder')) {
                input.val('');
            }
        })
    });
	
/* YTPlayer
================================================== */ 	
	$(function(){
      $(".player").mb_YTPlayer();
    });	


	
});
//End Document.ready   

/* preloader
================================================== */ 
$(window).load(function() { // makes sure the whole site is loaded
	'use strict';
	$('#status').fadeOut(); // will first fade out the loading animation
	$('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
	$('body').delay(350).css({'overflow':'visible'});





/* custom vernum */

    /* Slider Options */
$(window).load(function(){
    new fwslider().init({
        duration: "1000", /* Fade Speed (miliseconds) */
        pause:    "12000"  /* Autoslide pause between slides (miliseconds)*/
    });
});

/* Sticky Navigation Menu */
$(window).load(function(){
  $("header").sticky({ topSpacing: 0 });
});

/* One Page Scrolling */
$(document).ready(function() {
    $('header nav ul').onePageNav({
    begin: function() {
    },
    end: function() {
    },
    scrollOffset: 40
    });
});

/* Skill Bars */
$(document).ready(function(){

    setTimeout(function(){

        $('.skill-bar .skill-bar-content').each(function() {
            var me = $(this);
            var perc = me.attr("data-percentage");

            var current_perc = 0;

            var progress = setInterval(function() {
                if (current_perc>=perc) {
                    clearInterval(progress);
                } else {
                    current_perc +=1;
                    me.css('width', (current_perc)+'%');
                }

                me.text((current_perc)+'%');

            }, 10);

        });

    },10);

});

/* Isotope Portfolio */
$(window).load(function() {

    var $container = $('#portfolio-container');

    $container.isotope({
        itemSelector: '.item',
        layoutMode: 'masonry'
    });

    var $optionSets = $('.option-set'),
            $optionLinks = $optionSets.find('li');

    $optionLinks.click(function() {
        var $this = $(this);
        // don't proceed if already selected
        if ($this.hasClass('selected')) {
            return false;
        }
        var $optionSet = $this.parents('.option-set');
        $optionSet.find('.selected').removeClass('selected');
        $this.addClass('selected');
    });

    $('#filters').on('click', 'a', function() {
        var selector = $(this).data('filter');
        $container.isotope({filter: selector});

    });

});

/* Lightbox */
jQuery(function($) {
    $(".swipebox").swipebox();
});

/* Custom Select Menu in Contact Form */
$( function() {
    
    $( '#cd-dropdown' ).dropdown( {
        gutter : 0
    } );

});

/* Responsive Menu */
$(function() {
    var pull        = $('.pull');
        menu        = $('nav ul');
        menuHeight  = menu.height();

    $(pull).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle();
    });

    $(window).resize(function(){
        var w = $(window).width();
        if(w > 320 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });
});

/* Testimonials Rotator */
    $(document).ready(function() {
        $('.testimonials ul li').quovolver();
    });
})

