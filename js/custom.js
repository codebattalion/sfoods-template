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
