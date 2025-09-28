localStorage.setItem("name" , "zain")
localStorage.setItem("email" , "gulzaman@.com")

let data = localStorage.getItem("name")
document.write(data)


// session storage

sessionStorage.setItem("name" , "zaman")
alert(sessionStorage.getItem("name"))

// cookies

 document.cookie = "cookies1  = hello"    //non persistence

 document.cookie = "cookies3 = Hello world"+60*60*24
