$("header").load("/include/header.html", function () {
  // header btn-search show/hide
  $(".header .btn-search").on("click", function () {
    if (window.matchMedia("(min-width: 1024px)").matches) {
      if ($(".header .search-bar").is(":hidden")) {
        $(".header .search-bar").show();
      } else {
        if ($(".header .search-bar").val() !== "") {
          // 검색어가 입력되어 있을 경우 동작할 코드
          return;
        } else {
          $(".header .search-bar").hide();
        }
      }
    }
  });

  // mobile-nav open
  $(".mobile-nav-open").on("click", function () {
    $(".lnb").css("display", "none");
    $(".nav").addClass("active");
  });

  // mobile-nav close
  $(".mobile-nav-close").on("click", function () {
    $(".nav").removeClass("active");
  });

  // mobile-nav close (사이드바 외부 클릭 시 닫힘)
  $(document).on("mouseup", function (event) {
    if ($(".nav").has(event.target).length === 0) {
      $(".nav").removeClass("active");
    }
  });

  // mobile-search open
  $(".mobile-search-open").on("click", function () {
    $(".mobile-search").addClass("active");
  });

  // mobile-search open
  $(".mobile-search-close").on("click", function () {
    $(".mobile-search").removeClass("active");
  });

  // mobile-nav item open
  $(".menu-item-wrap").on("click", function () {
    let $lnb = $(this).next();
    let $chevron = $(this).children("i");

    if ($lnb.css("display") == "none") {
      $chevron.css("transform", "translateY(-50%) rotate(180deg)");
      $lnb.slideDown(100);
    } else {
      $chevron.css("transform", "translateY(-50%) rotate(0deg)");
      $lnb.slideUp(100);
    }
  });
});

// main section ------------------------------------

// today's pick .card-back background-image url
let card = document.querySelectorAll(".todays-pick .card");
card.forEach(function (cardItem) {
  let imageSrc = cardItem.querySelector(".image img").src;
  cardItem.style.setProperty("--card-bg-img", `url(${imageSrc})`);
});

// card bookmark button
$(".book-mark").on("click", function () {
  $(this).children().toggleClass("bi-bookmark bi-bookmark-fill");
});

// meal-tabs tab menu
$(".tab").on("click", function () {
  let activeTab = $(this).attr("data-tab");
  let activeTabPanel = $(`#${activeTab}`);
  $(".tab.active").removeClass("active");
  $(this).addClass("active");
  $(".tab-panel.active").removeClass("active");
  $(activeTabPanel).addClass("active");
});

// banner countdown
$("#banner-countdown").countdown("2025/12/12", function (event) {
  $(this).html(
    event.strftime("<span>%H</span>:<span>%M</span>:<span>%S</span>")
  );
});
