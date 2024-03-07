$(document).ready(function () {
  $(".burger").click(function () {
    $(this).children().toggleClass("active");
    $(".menu").toggleClass("active");
    $(".header__items p").toggleClass("active");
    $("body").toggleClass("fixed");
    return false;
  });

  $('.menu__list li a').on('click', function() {
		var $el = $(this),
			id = $el.attr('href')
		$('html, body').animate(
			{
				scrollTop: $(id).offset().top - 100
			},
			500
		)
		return false
	})


  $('.main__tags a').on('click', function() {
		var $el = $(this),
			id = $el.attr('href')
		$('html, body').animate(
			{
				scrollTop: $(id).offset().top - 100
			},
			500
		)
		return false
	})


  $(".certificates__slider").slick({
    slidesToShow: 3.7,
    infinite: false,
    responsive: [
      {
        breakpoint: 1380,
        settings: {
          slidesToShow: 3.1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2.7,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1.5,
        },
      },
    ],
  });

  $(".partners__blocks").slick({
    slidesToShow: 3.7,
    infinite: false,
    responsive: [
      {
        breakpoint: 1380,
        settings: {
          slidesToShow: 3.1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2.7,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1.5,
        },
      },
    ],
  });

  $(".services__slider").slick({
    slidesToShow: 3.7,
    infinite: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1380,
        settings: {
          slidesToShow: 3.1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2.7,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1.5,
        },
      },
    ],
  });

 

  $("[data-tabs-type]").on("click", function () {
    if (!$(this).hasClass("active")) {
      var index = $(this).index();
      $(this).addClass("active").siblings().removeClass("active");
      $("[data-tabs-typecontent]").hide().eq(index).fadeIn();
    }
    return false;
  });

  var swiper = new Swiper(".gallery-thumbs", {
    spaceBetween: 20,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
    allowTouchMove: false,
    /* loop: true,
    loopedSlides: 4, */
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      320: {
        spaceBetween: 10,
        slidesPerView: 1,
      },
      767: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      1200: {
        spaceBetween: 20,
        slidesPerView: 2,
      },

      1380: {
        slidesPerView: 3,
      },
    },
  });

  var swiperGallery = new Swiper(".gallery", {
    allowTouchMove: false,
    thumbs: {
      swiper,
    },
  });

  var swiper2 = new Swiper(".gallery-thumbs-second", {
    spaceBetween: 20,
    slidesPerView: 3,
    watchSlidesProgress: true,
    allowTouchMove: true,
    slideToClickedSlide: true,
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },

    breakpoints: {
      320: {
        spaceBetween: 10,
        slidesPerView: 5,
      },
      767: {
        
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1200: {
        spaceBetween: 20,
        slidesPerView: 3,
      },

      1380: {
        slidesPerView: 3,
      },
    },
  });

  var swiperGallery2 = new Swiper(".gallery-second", {
    thumbs: {
      swiper: swiper2,
    },
  });

  var swiper3 = new Swiper(".gallery-thumbs-third", {
    spaceBetween: 20,
    slidesPerView: 3,
    watchSlidesProgress: true,
    allowTouchMove: true,
    slideToClickedSlide: true,
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },

    breakpoints: {
      320: {
        spaceBetween: 10,
        slidesPerView: 5,
      },
      767: {
        
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1200: {
        spaceBetween: 20,
        slidesPerView: 3,
      },

      1380: {
        slidesPerView: 3,
      },
    },
  });

  var swiperGallery3 = new Swiper(".gallery-third", {
    thumbs: {
      swiper: swiper3,
    },
  });

  var swiper4 = new Swiper(".gallery-thumbs-four", {
    spaceBetween: 20,
    slidesPerView: 3,
    watchSlidesProgress: true,
    allowTouchMove: true,
    slideToClickedSlide: true,
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },

    breakpoints: {
      320: {
        spaceBetween: 10,
        slidesPerView: 5,
      },
      767: {
        
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1200: {
        spaceBetween: 20,
        slidesPerView: 3,
      },

      1380: {
        slidesPerView: 3,
      },
    },
  });

  var swiperGallery4 = new Swiper(".gallery-four", {
    thumbs: {
      swiper: swiper4,
    },
  });

  var swiper5 = new Swiper(".gallery-thumbs-five", {
    spaceBetween: 20,
    slidesPerView: 3,
    watchSlidesProgress: true,
    allowTouchMove: true,
    slideToClickedSlide: true,
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },

    breakpoints: {
      320: {
        spaceBetween: 10,
        slidesPerView: 5,
      },
      767: {
        
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1200: {
        spaceBetween: 20,
        slidesPerView: 3,
      },

      1380: {
        slidesPerView: 3,
      },
    },
  });

  var swiperGallery5 = new Swiper(".gallery-five", {
    thumbs: {
      swiper: swiper5,
    },
  });
  var swiper6 = new Swiper(".gallery-thumbs-six", {
    spaceBetween: 20,
    slidesPerView: 3,
    watchSlidesProgress: true,
    allowTouchMove: true,
    slideToClickedSlide: true,
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },

    breakpoints: {
      320: {
        spaceBetween: 10,
        
      },
      767: {
        
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1200: {
        spaceBetween: 20,
        slidesPerView: 3,
      },

      1380: {
        slidesPerView: 3,
      },
    },
  });

  var swiperGallery6 = new Swiper(".gallery-six", {
    thumbs: {
      swiper: swiper6,
    },
  });
});



 
function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show')
    }
  })
}
let options = { threshold: [0.5] }
let observer = new IntersectionObserver(onEntry, options)
let elements = document.querySelectorAll('.element-animation')
for (let elm of elements) {
  observer.observe(elm)
}

$(document).on('scroll', function () {
  if ($('.main').hasClass('element-show')) {
    $('.about__sum-anim').each(function () {
      var $this = $(this),
        countTo = $this.attr('data-count')

      $({ countNum: $this.text() }).animate(
        {
          countNum: countTo,
        },

        {
          duration: 600,
          easing: 'linear',
          step: function () {
            $this.text(Math.floor(this.countNum))
          },
          complete: function () {
            $this.text(this.countNum)
          },
        }
      )
    })
  }
})




$(document).on('scroll', function () {
  if ($('.more').hasClass('element-show')) {
    $('.menegment__sum-anim').each(function () {
      var $this = $(this),
        countTo = $this.attr('data-count')

      $({ countNum: $this.text() }).animate(
        {
          countNum: countTo,
        },

        {
          duration: 600,
          easing: 'linear',
          step: function () {
            $this.text(Math.floor(this.countNum))
          },
          complete: function () {
            $this.text(this.countNum)
          },
        }
      )
    })
  }
})


/* $(document).on('scroll', function () {
  if ($('.more').hasClass('element-show')) {
    $('.menegment__sum-anim').each(function () {
      var $this = $(this),
        countTo = $this.attr('data-count')

      $({ countNum: $this.text() }).animate(
        {
          countNum: countTo,
        },

        {
          duration: 600,
          easing: 'linear',
          step: function () {
            $this.text(Math.floor(this.countNum))
          },
          complete: function () {
            $this.text(this.countNum)
          },
        }
      )
    })
  }
})
 */




$('.main__sum-anim').each(function() {
  var $this = $(this),
      countTo = $this.attr('data-count');
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {

    duration: 1500,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum);
      
    }

  });  

 
 


});

