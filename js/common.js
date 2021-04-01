

$(document).ready(function() {



$('.header-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  dots: true
});

    $(function() {
      $('.index-1-item').matchHeight({
        byRow: true,
        property: 'height',
        target: null,
        remove: false
      });
    });


  $(".fancy-galler").fancybox({
   protect: true
  });

  $(function() {
      $('.about-2-item').matchHeight({
        byRow: true,
        property: 'height',
        target: null,
        remove: false
      });
    });

  (function($){       
    jQuery.fn.lightTabs = function(options){

      var createTabs = function(){
        tabs = this;
        i = 0;
        
        showPage = function(i){
          $(tabs).children("div").children("div").hide();
          $(tabs).children("div").children("div").eq(i).show();
          $(tabs).children("ul").children("li").removeClass("active");
          $(tabs).children("ul").children("li").eq(i).addClass("active");
        }
                  
        showPage(0);        
        
        $(tabs).children("ul").children("li").each(function(index, element){
          $(element).attr("data-page", i);
          i++;                        
        });
        
        $(tabs).children("ul").children("li").click(function(){
          showPage(parseInt($(this).attr("data-page")));
        });       
      };    
      return this.each(createTabs);
    };  
  })(jQuery);


  $(".tabs").lightTabs();




$('.rev-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true
});


  $('.fancy-modal').fancybox({
    padding: 0,
    touch: false
  });   
/*
  $('.fancy-modal1').fancybox({
    padding: 0,
    touch: false,
    afterShow : function() {
       $('.slider-for1').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav1'
      });
      $('.slider-nav1').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-for1',
        dots: false,
        centerMode: false,
        focusOnSelect: true
      });
    }
  });  
*/



    $('.slider-thumb > ul > li').click(function() {
      if ( $(this).hasClass('active') ) {
        return false;
      }
      $('.fancybox-is-open .slider-thumb > ul > li').removeClass('active');
      $(this).addClass('active');
      var it = $(this).data('item');
      $('.fancybox-is-open .slider-main > div').removeClass('active');
      setTimeout(function() {
                   $('.fancybox-is-open .slider-main > div[data-item="' + it + '"]').addClass('active');
                }, 201);
    });
	
    $('.slider-thumb > div > div').click(function() {
      if ( $(this).hasClass('active') ) {
        return false;
      }
      $('.fancybox-is-open .slider-thumb > div > div').removeClass('active');
      $(this).addClass('active');
      var it = $(this).data('item');
      $('.fancybox-is-open .slider-main > div').removeClass('active');
      setTimeout(function() {
                   $('.fancybox-is-open .slider-main > div[data-item="' + it + '"]').addClass('active');
                }, 201);
    });

/*
    $('.slider-thumb > div').click(function() {
      if ( $(this).hasClass('active') ) {
        return false;
      }
      var par = $(this).parents('.slider-boxes');
      $(par).children('.slider-thumb').children('div').removeClass('active');
      $(this).addClass('active');
      var it = $(this).data('item');
      $(par).children('.slider-main').children('div').fadeOut(200);
      setTimeout(function() {
                   $(par).children('.slider-main').children('div[data-item="' + it + '"]').fadeIn(200);
                }, 201);
    });    
*/


/*
    $('.slider-thumb > div').click(function() {
      if ( $(this).hasClass('active') ) {
        return false;
      }
      $('.slider-thumb > div').removeClass('active');
      $(this).addClass('active');
      var it = $(this).data('item');
      $('.slider-main > div').fadeOut(200);
      setTimeout(function() {
                   $('.slider-main > div[data-item="' + it + '"]').fadeIn(200);
                }, 201);
    });
*/








































});


