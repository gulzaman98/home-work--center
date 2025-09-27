let btn = document.getElementById("btn")
let form = document.getElementById("myform")

form.addEventListener("submit" , function(e){
    e.preventDefault()
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let pass = document.getElementById("pass").value

    localStorage.setItem("name" , name)
    localStorage.setItem("email" , email)
    localStorage.setItem("pass" , pass)


    if(name == "" || email == "" || pass == ""){
        alert("Please fill out all the fields")
    }

    let user = JSON.parse(localStorage.getItem("user")) || [];
    user.push({name : name , email : email , pass : pass})

    localStorage.setItem("user" , JSON.stringify(user))
    location.assign("login.html")

    this.reset()
})
