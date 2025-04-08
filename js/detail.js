$(".review-item").each(function () {
  if ($(this).find(".reply").length === 0) {
    $(this).children(".review").css("margin-bottom", "0");
  }
});

// jump-to-recipe
$(".jump-to-recipe").on("click", function () {
  let scrollValue = $("#recipe-start").offset().top - 100;
  $("html, body").animate(
    {
      scrollTop: scrollValue,
    },
    1000
  );
});

// ingredient tab
let scaleData = {
  "1/2x": {
    servings: "3~4 Servings",
    "olive-oil": "1/4",
    potatoes: 3,
    "black-pepper": 1,
    garlic: 2,
  },
  "1x": {
    servings: "6~8 Servings",
    "olive-oil": "1/2",
    potatoes: 6,
    "black-pepper": 2,
    garlic: 3,
  },
  "2x": {
    servings: "12~16 Servings",
    "olive-oil": "1",
    potatoes: 12,
    "black-pepper": 4,
    garlic: 4,
  },
};

let $ingredientElements = {
  potatoes: $(".ingredient-item[data-ingredient-name=potatoes]"),
  "olive-oil": $(".ingredient-item[data-ingredient-name=olive-oil]"),
  "black-pepper": $(".ingredient-item[data-ingredient-name=black-pepper]"),
  garlic: $(".ingredient-item[data-ingredient-name=garlic]"),
};

function setIngredientValue(serving) {
  $(".serving-value").html(scaleData[serving]["servings"]);

  $.each($ingredientElements, function (key, $element) {
    $element.find(".quantity").html(scaleData[serving][key]);
  });
}

$(".btn-scale").on("click", function () {
  $(".btn-scale.active").removeClass("active");
  $(this).addClass("active");

  let scale = $(this).data("scale");
  setIngredientValue(scale);
});
