$(document).ready(function () {
  $("a[href^='#']").click(function (e) {
    e.preventDefault();

    var target = $(this).attr("href");
    var offset = $(target).offset().top;
    $("html, body").animate({
      scrollTop: offset
    }, 800);
  });
});


// NAV BAR JQUERY

$(window).scroll(function(){
  if ($(this).scrollTop() > 50) {
    $(".container").css("background-color", "white");
  } else {
    $(".container").css("background-color", "lightgray");
  }
});



$(".menu-icon").click(function () {
  $(".nav ul").slideToggle(500);
});


// HOME SECTION

$(".home-text button").hover(function () {
  $(this).animate({ fontSize: "35px" }, 200);
}, function () {
  $(this).animate({ fontSize: "30px" }, 200);
});


// about SECTION
$(".social-icon a").hide();

$(window).scroll(function () {
  let aboutTop = $("#about").offset().top;
  let scroll = $(window).scrollTop();
  let windowHeight = $(window).height();

  if (scroll + windowHeight > aboutTop + 300) {
    $(".social-icon a").each(function (index) {
      $(this).delay(300 * index).fadeIn(300)
    })
  }
})


