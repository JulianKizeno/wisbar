(function($){
  "use strict";

  var $body = $('body'),
    slideAnimaionRun = false

  function blum_showWebsiteSliderItem(target){
    if( $( target ).length > 0 && $( target ).hasClass('website-slider-item') ){
      if ( $( target ).hasClass('active') )
        return false;

      slideAnimaionRun = true;

      setTimeout(function(){

        if( !$body.hasClass('mobile') ){
          $(target).find('.animated').each( function(){
            var elem = $(this),
              animation = elem.data('animation');
            if ( !elem.hasClass('visible') ){
              var animationDelay = elem.data('animation-delay');
              if ( animationDelay ){
                setTimeout(function(){
                  elem.addClass( animation + ' visible' );
                }, animationDelay);
              } else {
                elem.addClass( animation + ' visible' );
              }
            }
          });
        }

        slideAnimaionRun = false;

      }, 500);
    }
  }

  function blum_showFirstWebsiteSliderItem(){

    var windowHash = window.location.hash ? window.location.hash : '',
      loadSlide;

    if( windowHash === '#!' ){
      loadSlide = '#' + $('.website-slider-item').first().attr('id');
    } else if( $(windowHash).length > 0 && $(windowHash).hasClass('website-slider-item') ){
      loadSlide = windowHash;
    } else {
      loadSlide = '#' + $('.website-slider-item').first().attr('id');
    }

    blum_showWebsiteSliderItem(loadSlide);
  }

  $(document).ready(function($){
    blum_showFirstWebsiteSliderItem();
  });


})(jQuery);