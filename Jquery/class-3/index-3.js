// prepend append class

// $(document).ready(function(){
//     $("#prepand").click(function(){
//         $("#list").prepend("<li>bootstrap</li>")
//     })

//      $("#append").click(function(){
//         $("#list").append("<li>Github</li>")
//     })
// })

// add remove class

// $(document).ready(function(){
//     $("#add").click(function(){
//         $("#para").addClass("highlight")
//     })

//      $("#remove").click(function(){
//         $("#para").removeClass("highlight")
//     })


//      $("#toggle").click(function(){
//         $("#para").toggleClass("highlight")
//     })
// })



// Hover

$(document).ready(function () {
    $("p").hover(function () {
        $(this).css("color", "red")
    })

    $("#btn").hover(function () {
        $("p").css({
            "background-color": "red",
            "color": "navy",
            "font-size": "30px"
        })
    })
})