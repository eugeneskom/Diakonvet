
$(function () {
  // Navigation toggle
  let navToggle = document.querySelector('.navtoggle');
  let header = document.querySelector('.header');

  navToggle.addEventListener('click', () => {
    console.log('1')
    header.classList.toggle('active');
  })

  // About text height toggle

  let aboutToggle = document.querySelector('.about__toggle');
  let aboutInner = document.querySelector('.about__inner');

  aboutToggle.addEventListener('click', () => {
    aboutInner.classList.toggle('active');
    if(aboutInner.classList.contains('active')){
      aboutToggle.innerHTML = 'Показать меньше'
    }else{
      aboutToggle.innerHTML = 'Показать все'

    }
  })



  $('.hero__slider').slick({
    dots: true,
  });

  $('.section__slider, .video__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    // initialSlide: 3,
    // infinite: false

    responsive: [

      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,

        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true
        }
      }
    ]
  });




  $('.sale__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,

    variableWidth: true,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          variableWidth: false,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          variableWidth: false,

        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
          variableWidth: false,

        }
      }
    ]
  });

  $('.news__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,

    variableWidth: true,
    // initialSlide: 3,
    // infinite: true,?

    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          variableWidth: false,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          variableWidth: false,

        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
          variableWidth: false,

        }
      }
    ]
  });


  $('.recommendation__slider, .reviews__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,

    // variableWidth: true,
    responsive: [

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
          variableWidth: false,

        }
      }
    ]

  });
  $('.articles__slider').slick({
    // slidesToShow: 3,
    arrows: false,
    variableWidth: true,

    responsive: [
      {
        breakpoint: 9999,
        settings: "unslick"
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          dots: true,
          variableWidth: false,

        },

      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          dots: true,
          variableWidth: false,

        }
      }
    ]

  });

  $('.companies__slider').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          dots: true,
        }
      }
    ]
  });


})