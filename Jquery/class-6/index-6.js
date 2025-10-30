$(document).ready(function () {
    $("#movebtn").click(function () {
        $("#box").animate({
            left: "250px",
            width: "250px",
            top: "100px",
            opacity: "0.5"

        }, 1000)
    })

    $("#resetbtn").click(function () {
        $("#box").animate({
            left: "0px",
            width: "250px",
            top: "0px",
            opacity: "1"

        }, 1000)
    })


    let toggle = false
    $("#togglebtn").click(function () {
        if (!toggle) {
            $("#box").animate({
                top: "100px",
                left: "550px",
                opacity: "0.5"
            }, 1000)
            toggle = true
        } else {
            $("#box").animate({
                left: "0px",
                top: "0px",
                opacity: "1"
            }, 1000)
            toggle = false
        }

    })

})