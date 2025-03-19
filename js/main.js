// header btn-search show/hide
$(".btn-search").on("click", function () {
  if (window.matchMedia("(min-width: 1024px)").matches) {
    console.log("search-bar is hidden?", $(".search-bar").is(":hidden"));
    if ($(".search-bar").is(":hidden")) {
      $(".search-bar").show();
    } else {
      if ($(".search-bar").val() !== "") {
        // 검색어가 입력되어 있을 경우 동작할 코드
        return;
      } else {
        $(".search-bar").hide();
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
