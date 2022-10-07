const navToogle = document.querySelector(".navmenu");
const primaryNav = document.querySelector(".navigation");

navToogle.addEventListener("click", () => {
  primaryNav.classList.toggle("opened");
});

$("input").focus(function () {
  $(this).parents(".form-group").addClass("focused");
});

$("input").blur(function () {
  var inputValue = $(this).val();
  if (inputValue == "") {
    $(this).removeClass("filled");
    $(this).parents(".form-group").removeClass("focused");
  } else {
    $(this).addClass("filled");
  }
});

// $(".slider-holder").slick({
//   dots: false,
//   infinite: true,
//   speed: 300,
//   slidesToShow: 1,
//   variableWidth: true,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: "unslick",
//     },
//     // You can unslick at a given breakpoint now by adding:
//     // settings: "unslick"
//     // instead of a settings object
//   ],
// });
