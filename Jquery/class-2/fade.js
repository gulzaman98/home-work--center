$(document).ready(function(){
    $("#fadein").click(function(){
        $("#para").fadeIn(1000)
    })

    $("#fadeout").click(function(){
        $("#para").fadeOut(1000)
    })

      $("#fadetoggle").click(function(){
        $("#para").fadeToggle(1000)
    })

        $("#fadeto").click(function(){
        $("#para").fadeTo(1000,0.3)
    })
})