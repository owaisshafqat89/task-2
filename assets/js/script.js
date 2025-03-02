// counter-up
$(".counter").counterUp({
  delay: 20,
  time: 2000,
});
//scroll-top-btn
window.addEventListener('scrollBtn', function () {
  const scrollPosition = window.scrollY;
  const circle = document.querySelector('.circle-of-the-section-one');
  scrollBtn.style.transform = `translateY(${scrollPosition * 0.2}px)`;
});
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
  const btn = document.getElementById("scrollBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btn.classList.add("show");
    btn.classList.remove("hide");
  } else {
    btn.classList.add("hide");
    setTimeout(function () {
      btn.classList.remove("show");
    }, 700);
  }
}
function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// slider-1
$(".slider").slick({
  dots: false,
  infinite: false,
  speed: 800,
  autoplay: true,
  autoplaySpeed: 1000,
  slidesToShow: 2,
  slidesToScroll: 2,
  arrows: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
// slider-2
$(".slider-2").slick({
  dots: true,
  arrows: true,
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  prevArrow:
    '  <span class="priv-arrow"><i class="fa-solid fa-angle-left"></i></span>',
  nextArrow:
    '<span class="next-arrow"><i class="fa-solid fa-angle-right"></i></span>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
// slider-3
$('.slider-testimonials').slick({
  dots: false,
  arrows: true,
  infinite: false,
  speed: 800,
  autoplay: true,
  autoplaySpeed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
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
//preloader
var loader = document.querySelector(".preloader")
window.addEventListener("load", function () {
  if (loader) {
    setTimeout(function () {
      loader.style.display = "none"
    }, 2500);
  }
});
// aos
AOS.init();
// ative link
$(document).on('click', '.nav-link', function () {
  $(this).addClass('active').siblings().removeClass('active')
});

// live chat feature

