/* $(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="../img/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../img/right.png"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                arrows: false,
                dots: true
                }
            }
        ]
        
    });
}); */

const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: true,  
  });

  document.querySelector('.next').onclick = function () {
    slider.goTo('next');
  };

  document.querySelector('.prev').onclick = function () {
    slider.goTo('prev');
  };

  (function($) {
    $(function() {
      
      $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });

      function toggleSlide(item)  {
        $(item).each(function(i) {
          $(this).on('click', function(e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
          })
        })
      };

      toggleSlide('.catalog-item__list');
      toggleSlide('.catalog-item__content');



      /* Modal */

      $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
      });

      $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #order, #thanks').fadeOut('slow')
      });

      $('.button_incards').each(function (i) {
        $(this).on('click', function() {
          $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
          $('.overlay, #order').fadeIn('slow');
        }); 
      });


      /* up button */

      $(window).scroll(function() {
        if($(this).scrollTop() > 1600) {
          $('.up').fadeIn();
        } else {
          $('.up').fadeOut();
        }
      });

      $("a[href^='#']").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
      });


    });
    })(jQuery);

  