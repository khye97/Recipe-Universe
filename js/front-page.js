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
