let  btn = document.getElementById("btn")
let heading = document.getElementById("heading1")

btn.addEventListener("click" , function(e){
    e.preventDefault()
    para.innerHTML = "Hello Gulzaman"
  let name =  document.getElementById("name").value 
  para.innerHTML = name
})

