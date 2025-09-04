let myapp = (nam1 ,nam2)=>document.write(nam1+nam2)



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



window.onresize=()=>{
    console.log("Window is resize")
}

window.onload=()=>{
    alert("Welcome gulzaman arain")
    console.log("welcome gulzaman")
}

