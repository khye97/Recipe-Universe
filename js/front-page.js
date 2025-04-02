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
