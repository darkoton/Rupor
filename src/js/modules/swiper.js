document.addEventListener('DOMContentLoaded', createSliderStart);
document.addEventListener('resize', createSliderStart);
document.addEventListener('orientationchange ', createSliderStart);

function createSliderStart() {
  console.log(1);

  const width = window.innerWidth;
  if (width < 768) {
    new Swiper('.start__slider', {
      slidesPerView: 2,
      spaceBetween: 15,
      grabCursor: true,
      loop: true,
      speed: 800,
      autoplay: {
        delay: 3500,
      },
      navigation: {
        nextEl: '.start__right',
        prevEl: '.start__left',
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        500: {
          slidesPerView: 2,
        },
      },
    });
  }
}
