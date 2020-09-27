// $(window).scroll(function () {
//   var scroll = $(window).scrollTop();
//   $(".header--bg").css({
//     width: 100 + scroll / 60 + "%",
//     filter: "blur(" + scroll / 100 + "px)",
//   });
// });
$(".profile-card-trigger").click(function () {
  $(".profile-card").toggleClass("profile-card-open");
});
$(".nav--trigger").click(function () {
  $(".nav__bar").toggleClass("nav--open");
  $(".header").toggleClass("header--open");
});

$(document).ready(function () {
  if ($(window).width() < 1024) {
    let recipe_win = $(".recipe").height();
    let recipe_inc = $(".recipe__incredients").height();
    $(".recipe__center").css({
      top: recipe_win + recipe_inc + parseInt(100),
      position: "absolute",
    });
  } else {
    $(".recipe__center").css({
      top: "0",
      position: "relative",
    });
  }
});
$(window).resize(function () {
  if ($(window).width() < 1024) {
    let recipe_win = $(".recipe").height();
    let recipe_inc = $(".recipe__incredients").height();
    $(".recipe__center").css({
      top: recipe_win + recipe_inc + parseInt(100),
      position: "absolute",
    });
  } else {
    $(".recipe__center").css({
      top: "0",
      position: "relative",
    });
  }
});
