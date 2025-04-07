$(".review-item").each(function () {
  if ($(this).find(".reply").length === 0) {
    $(this).children(".review").css("margin-bottom", "0");
  }
});

// jump-to-recipe
$(".jump-to-recipe").on("click", function () {
  // $("#recipe-start")[0].scrollIntoView({ behavior: "smooth" });
  let scrollValue = $("#recipe-start").offset().top - 100;
  $("html, body").animate(
    {
      scrollTop: scrollValue,
    },
    1000
  );
});
