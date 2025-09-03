let btn = document.getElementById("btn")
let para = document.getElementById("para")

// btn.onclick = ()=> document.getElementById("para").innerHTML = "Hello"
// btn.onmouseover = ()=> document.getElementById("para").style.color = "red"


btn.addEventListener("click" , ()=>{
    console.log("phla listener run hua");
    document.getElementById("para").innerHTML = "Hello world"
})

btn.addEventListener("click" , function(){
    console.log("dusra listener run hua");
    document.getElementById("para").style.color = "red"
})


btn.onclick = ()=>document.getElementById("para").innerHTML = "You Click the button"
btn.onmouseover = ()=>document.getElementById("para").style . color = "red"

