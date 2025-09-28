let login = document.getElementById("login")
login.addEventListener("submit", function (e) {
    e.preventDefault()
    console.log("✅ Submit event triggered")
    let email = document.getElementById("email").value
    let pass = document.getElementById("pass").value
    let users = JSON.parse(localStorage.getItem("users")) || []
    let foundUser = users.find(u => u.email === email && u.pass === pass)

    console.log("Users from storage:", users)
    console.log("Typed email:", email)
    console.log("Typed pass:", pass)


    if (foundUser) {
        localStorage.setItem("loggedInUser", JSON.stringify(foundUser))

        alert("Login Completed")
        location.assign("welcome.html")
    }
    else {
        alert("Email or Id Password Incorrect")
        window.location.href = "login.html"

    }

})







