$(function() { 
  $('.inicio__content__slider').slick({
  prevArrow: $(".inicio__prev"),
  nextArrow: $(".inicio__next"),
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  slidesMargin: 10,
  autoplay: true,
  autoplaySpeed: 1500,
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
