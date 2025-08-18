// let  nationality =prompt("Enter your nationality")
// let  age =prompt("Enter your age")

// if(nationality == "pakistani"){
//     if(age >= 18){
//         document.write("You are eligible to vote. Vote successfully!")
//     }
//     else{
//         document.write("Your age is not allowed for voting.")
//     }
// }
// else{
//     document.write("Only allow in pakistani")
// }


// let num1 = +prompt("Enter your first number")
// let num2 = +prompt("Enter your second number")
// let opr = prompt("Select operator")

// if(opr == "+"){
//     document.write("Addition" + " " + num1 + num2)
// }

// else if(opr == "-"){
//     document.write("Subtraction" + " " + (num1 - num2))
// }

// else if(opr == "*"){
//     document.write("Multiplication" + " " + (num1 * num2))
// }

// else if (opr == "/"){
//      document.write("Division" + " " + (num1 / num2))
// }

// else if(opr == "%"){
//     document.write("modules" + " " + (num1 % num2))
// }

// else {
//     document.write("Invalid operators")
// }



//  NESTED IF ELSE

// let name = prompt("Enter your name")
// let email = prompt("Enter your email")
// let password = prompt(123456)
// let confirmPassword = prompt(123456)

// if(name == "gulzaman"){
//     if(email == "gulzamanarain@gmail.com"){
//         if(password == 123456){
//             if(confirmPassword == password){
//                 document.write("loged in successfully")
//             }
//             else{
//                document.write("Password and Confirm Password do not match") 
//             }
           
//         }
//         else{
//             document.write("password do not match") 
//         }
        
//     }
//     else{
//         document.write("email do not match") 
//     }

// }

// else{
//     document.write("name can not match") 
// }



let name = prompt("Enter your name")
let email = prompt("Enter your email")
let password = prompt(123456)
let confirmPassword = prompt(123456)

if(name == "gulzaman" &&
    email == "gulzamanarain@gmail.com" &&
    password == 123456 && 
    confirmPassword == password
)
{
    document.write("loged in successfully")
}

else{
    document.write("something went rong")
}