
  (function ($) {
  
  "use strict";

    // NAVBAR SCROLL EFFECT
    $(window).on('scroll', function() {
      var navbar = $('.navbar');
      if ($(window).scrollTop() > 50) {
        navbar.addClass('scrolled');
      } else {
        navbar.removeClass('scrolled');
      }
    });

    // SCROLL TO TOP BUTTON
    var scrollToTopBtn = $('<button class="scroll-to-top" aria-label="Scroll to top"><i class="bi bi-arrow-up"></i></button>');
    $('body').append(scrollToTopBtn);
    
    $(window).on('scroll', function() {
      if ($(window).scrollTop() > 300) {
        scrollToTopBtn.addClass('show');
      } else {
        scrollToTopBtn.removeClass('show');
      }
    });
    
    scrollToTopBtn.on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: 0 }, 800);
    });

    // MENU COLLAPSE
    $('.navbar-collapse a').on('click', function(){
      $(".navbar-collapse").collapse('hide');
    });
    
    // SMOOTH SCROLL for both smoothscroll and click-scroll classes
    $('.smoothscroll, .click-scroll').click(function(e){
      e.preventDefault();
      var el = $(this).attr('href');
      if (!el) return;
      
      var elWrapped = $(el);
      if (elWrapped.length === 0) return;
      
      var header_height = $('.navbar').height();
  
      var offset = elWrapped.offset();
      var offsetTop = offset.top;
      var totalScroll = offsetTop - header_height;
  
      $('body,html').animate({
        scrollTop: totalScroll
      }, 800);
    });

    // TIMELINE ANIMATION
    $(window).on('scroll', function(){
      function isScrollIntoView(elem, index) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();
        if(elemBottom <= docViewBottom && elemTop >= docViewTop) {
          $(elem).addClass('active');
        }
        if(!(elemBottom <= docViewBottom)) {
          $(elem).removeClass('active');
        }
        var MainTimelineContainer = $('#vertical-scrollable-timeline')[0];
        if(MainTimelineContainer) {
          var MainTimelineContainerBottom = MainTimelineContainer.getBoundingClientRect().bottom - $(window).height()*.5;
          $(MainTimelineContainer).find('.inner').css('height', MainTimelineContainerBottom + 'px');
        }
      }
      var timeline = $('#vertical-scrollable-timeline li');
      Array.from(timeline).forEach(isScrollIntoView);
    });

    // AOS LIKE ANIMATION ON SCROLL
    function animateOnScroll() {
      var elements = $('.custom-block, .accordion-item, .contact-section h2, .faq-section h2, .timeline-section h2');
      
      elements.each(function() {
        var elementPos = $(this).offset().top;
        var windowBottom = $(window).scrollTop() + $(window).height();
        
        if (elementPos < windowBottom - 50) {
          $(this).css({
            'opacity': '1',
            'transform': 'translateY(0)'
          });
        }
      });
    }
    
    // Initialize animations
    var animatedElements = '.custom-block, .accordion-item, .contact-section h2, .faq-section h2, .timeline-section h2';
    $(animatedElements).css({
      'opacity': '0',
      'transform': 'translateY(20px)',
      'transition': 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
    });
    
    $(window).on('scroll', animateOnScroll);
    animateOnScroll(); // Call on page load

    // RIPPLE EFFECT ON BUTTONS
    $(document).on('mousedown', '.custom-btn, button[type="submit"]', function(e) {
      var btn = $(this);
      
      // Only add ripple if not already processing
      if (btn.find('.ripple').length > 0) {
        return;
      }
      
      var ripple = $('<span class="ripple"></span>');
      var x = e.pageX - btn.offset().left;
      var y = e.pageY - btn.offset().top;
      
      ripple.css({
        width: '20px',
        height: '20px',
        top: (y - 10) + 'px',
        left: (x - 10) + 'px'
      });
      
      btn.append(ripple);
      
      setTimeout(function() {
        ripple.fadeOut(300, function() {
          $(this).remove();
        });
      }, 600);
    });
  
  })(window.jQuery);


