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
  $(document).on("touchend", function (event) {
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

  // nav accordion menu open
  $(".menu-item-wrap").on("touchend", function (e) {
    e.preventDefault();
    e.stopPropagation();

    let $lnb = $(this).next(".lnb");
    let $chevron = $(this).children("i");

    if ($lnb.is(":hidden")) {
      $chevron.css("transform", "translateY(-50%) rotate(180deg)");
      $lnb.slideDown(200);
    } else {
      $chevron.css("transform", "translateY(-50%) rotate(0deg)");
      $lnb.slideUp(200);
    }
  });

  $(".menu-item-wrap a").on("touchend", function (e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).closest(".menu-item-wrap").trigger("touchend");
  });
});

// main section ------------------------------------

// card bookmark button
$(".book-mark").on("click", function (event) {
  event.preventDefault();
  event.stopPropagation();
  $(this).children().toggleClass("bi-bookmark bi-bookmark-fill");
});

// today's pick -----------------------
// today's pick card title height
document.fonts.ready.then(() => {
  let cards = document.querySelectorAll(".todays-pick .todays-pick-card");
  cards.forEach(function (cardItem) {
    calcTitleHeight(cardItem);

    window.addEventListener("resize", function () {
      calcTitleHeight(cardItem);
    });
  });
});

function calcTitleHeight(cardItem) {
  let cardTitleHeight = cardItem.querySelector(".title").offsetHeight;
  cardItem.style.setProperty(
    "--todays-pick-title-height",
    `${cardTitleHeight + 32}px`
  );
}

// meal-tabs ----------------------------
// meal-tabs tab menu
$(".tab").on("click", function () {
  let activeTab = $(this).attr("data-tab");
  let activeTabPanel = $(`#${activeTab}`);
  $(".tab.active").removeClass("active");
  $(this).addClass("active");
  $(".tab-panel.active").removeClass("active");
  $(activeTabPanel).addClass("active");

  let capitalize = activeTab[0].toUpperCase() + activeTab.slice(1);
  $(".meal-tabs .section-title span").text(capitalize);
});

// banner countdown
$("#banner-countdown").countdown("2025/12/12", function (event) {
  $(this).html(
    event.strftime("<span>%H</span>:<span>%M</span>:<span>%S</span>")
  );
});

$("footer").load("/include/footer.html", function () {
  $(window)
    .resize(function () {
      if (window.matchMedia("(max-width: 1024px)").matches) {
        $("footer .menu-list").hide();
      } else {
        $("footer .menu-list").show();
      }
    })
    .resize();

  $(".menu-list-title").on("click", function () {
    let $footerMenu = $(this).next();
    let $chevron = $(this).children("i");

    if ($footerMenu.is(":hidden")) {
      $chevron.css("transform", "rotate(180deg)");
      $footerMenu.slideDown(200);
    } else {
      $chevron.css("transform", "rotate(0deg)");
      $footerMenu.slideUp(200);
    }
  });
});

// go-to-top button
$(window).scroll(function () {
  if ($(this).scrollTop() > 500) {
    $(".go-to-top").css({ bottom: "30px" });
  } else {
    $(".go-to-top").css({ bottom: "-100%" });
  }
});

$(".go-to-top").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 500);
});
