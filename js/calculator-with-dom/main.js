let firstNumber = document.getElementById("firstNumber")
let secondNumber = document.getElementById("secondNumber")
let opt = document.getElementById("operator")
let btn = document.getElementById("result")
let p = document.getElementById("output")

btn.addEventListener("click" , function(){
    let a = Number(firstNumber.value);
    let b = Number(secondNumber.value);
    let operator = opt.value;

    if(operator === "empty"){
        p.innerHTML = "Select an operator"
    }

    else if(operator === "add"){
        p.innerHTML = "Answer : " +  (a + b)
    }

    else if(operator === "sub"){
        p.innerHTML = "Answer : " + ( a - b)
    }

    else if(operator === "multiply"){
        p.innerHTML =  "Answer : " + ( a * b)
    }

    else if(operator === "divide"){
        p.innerHTML = "Answer : " +  (a / b)
    }
});