let login = document.getElementById("login")

login.addEventListener("submit" , function(e){
    e.preventDefault()

    let email = document.getElementById("email").value
    let pass = document.getElementById("pass").value


    let users = JSON.parse(localStorage.getItem("users")) || []

    let foundUser = users.find(u => u.email === email && u.pass === pass)


    if(foundUser){
        localStorage.setItem("logedInUser", JSON.stringify(foundUser))

        alert("Login Completed")
        location.assign("welcome.html")
    }
    else{
        alert("Email or Id Password Incorrect")
        window.location.href = "login.html"
    }
})