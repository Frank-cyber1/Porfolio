$(function() { 
  $('.inicio__content__slider').slick({
  prevArrow: $(".inicio__prev"),
  nextArrow: $(".inicio__next"),
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  
  autoplay: true,
  autoplaySpeed: 4000,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll:1
      }
    }
  ]
});})
$(".option-contrast__white").on("click", function(event){
  $("body").removeClass("body__dark");
  $(".hl__header__option-contrast span").removeClass("active");
  $(this).addClass("active");
})
$(".option-contrast__black").on("click", function(event){
  $("body").addClass("body__dark");
  $(".hl__header__option-contrast span").removeClass("active");
  $(this).addClass("active");
})

// $(document).ready(function() {
//   $(".inicio__content__slider__post__info").hover(function() {
//     $(".inicio__content__slider__post__content__thumb-sobre").css("background-color", "transparent");
//   });
//   $(".inicio__content__slider__post__info").mouseleave(function() {
//     $(".inicio__content__slider__post__content__thumb-sobre").css("background-color", "#original-value");
//   });
// });
// $(document).ready(function() {
//   $(".inicio__content__slider__post__info").hover(
//     function() {
//       $(".inicio__content__slider__post__content__thumb-sobre").css("background-color", "transparent");
//     },
//     function() {
//       $(".inicio__content__slider__post__content__thumb-sobre").css("background-color", "initial");
//     }
//   );
// });
$(document).ready(function() {
  $(".inicio__content__slider__post__info").hover(function() {
    $(".inicio__content__slider__post__content__thumb-sobre").toggleClass("transparent");
    
    
  });
});
