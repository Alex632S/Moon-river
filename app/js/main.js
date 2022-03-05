$('.carousel-content-box').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

$.when( $.ready ).then(function(){
  $('.menu-drop').css('height',$(window).height());
});

$('.toggle-button').on('click', function(e) {
  e.preventDefault();
  $('.toggle-button__a').toggleClass('toggle-button__a-d');
  $('.toggle-button__d').toggleClass('toggle-button__d-a');
  $('.menu-drop').toggleClass('menu-active');
  $('.page__body').toggleClass('overflow-hidden');
});
