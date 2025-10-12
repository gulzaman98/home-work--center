






$(document).ready(function(){
  $("a[href^='#']").click(function(e){
    e.preventDefault();

    var target = $(this).attr("href"); // e.g. "#about"
    var offset = $(target).offset().top; // section position from top

    $("html, body").animate({
      scrollTop: offset
    }, 800); // 800 = speed in milliseconds
  });
});
