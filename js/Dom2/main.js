// let para = document.getElementsByClassName("para")
// para[0].innerHTML = "Hello World"
// para[1].style.color = "red"



// let para = document.getElementsByName(`p`)
// para[0].innerHTML = "Hello World"
// para[1].style.color = "red"



// Bulb ON OFF assignment



let bulb = document.getElementById("bulb")
let btn = document.getElementById("toggle-btn")

let isOn = false

btn.addEventListener("click", function () {
    if (isOn) {
        bulb.src = "../Assets/bulb off.jpg";
        btn.innerHTML = "ON";
        isOn = false;


    }else{
        bulb.src = "../Assets/bulb on.jpg";
        btn.innerHTML = "OFF";
        isOn = true;

    }
})


// IMAGE CHANGE EFFECT

// let images = [
//     "../Assets/class 1.jpg",
//     "../Assets/class 2.jpg",
//     "../Assets/class 3.jpg",
//     "../Assets/class 4.jpg",
//     "../Assets/class 5.jpg",
//     "../Assets/class 6.jpg",
// ]

// let index = 0

// let image = document.getElementById("classimg")
// let nextbtn = document.getElementById("nextbtn")
// let prvbtn = document.getElementById("previousbtn")

// nextbtn.addEventListener("click" , function(){
//     index++
//     if(index >= images.length){
//         index = 0;
//     }
//     image.src = images[index];
// })

// prvbtn.addEventListener("click" , function(){
//     index--
//     if(index < 0){
//         index = images.length -1
//     }
//     image.src = images[index]
// })