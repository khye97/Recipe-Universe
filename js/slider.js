// section01 - main slider ---------------------------------------------------------
var swiper = new Swiper(".main-slider .swiper", {
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: ".main-slider .swiper-button-next",
    prevEl: ".main-slider .swiper-button-prev",
  },
});

// 슬라이더의 높이 계산 함수
function updateSliderHeights() {
  // 모든 슬라이드의 .content-wrap 높이 중 최대값을 구함
  let maxContentHeight = 0;
  $(".main-slider .slide-item").each(function () {
    let currentContentHeight = $(this).find(".content-wrap").outerHeight();
    if (currentContentHeight > maxContentHeight) {
      maxContentHeight = currentContentHeight;
    }
  });

  // .image의 높이는 모든 슬라이드에서 동일하므로 첫 번째 요소의 값을 가져옴
  let imageHeight = $(".main-slider .slide-item:first-child")
    .find(".image")
    .outerHeight();

  let containerHeight = imageHeight + maxContentHeight;

  if (window.matchMedia("(min-width: 1025px)").matches) {
    $(".main-slider .container, .main-slider .slide-item").height(imageHeight);
  } else {
    $(".main-slider .container, .main-slider .slide-item").height(
      containerHeight
    );
  }
}

// 윈도우 리사이즈시 업데이트
$(window)
  .on("resize", function () {
    updateSliderHeights();
  })
  .resize();

// section04 - today's pick ---------------------------------------------------------
var swiper = new Swiper(".todays-pick .swiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  // loop: true,
  navigation: {
    nextEl: ".todays-pick .swiper-button-next",
    prevEl: ".todays-pick .swiper-button-prev",
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

// section07 - quick & easy
var swiper = new Swiper(".quick-easy .swiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  autoHeight: false,
  loop: true,
  navigation: {
    nextEl: ".quick-easy .swiper-button-next",
    prevEl: ".quick-easy .swiper-button-prev",
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});
