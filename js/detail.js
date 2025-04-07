$(".review-item").each(function () {
  if ($(this).find(".reply").length === 0) {
    $(this).children(".review").css("margin-bottom", "0");
  }
});
