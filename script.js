// AND Button

function and() {
    let number1 = document.getElementById("value1").value;
    let number2 = document.getElementById("value2").value;

    let ans = parseInt(number1) & parseInt(number2);

    document.getElementById("answer").value = ans;
}

// OR Button

function or() {
    let number1 = document.getElementById("value1").value;
    let number2 = document.getElementById("value2").value;

    let ans = parseInt(number1) | parseInt(number2);

    document.getElementById("answer").value = ans;
}

// XOR Button 

function xor() {
    let number1 = document.getElementById("value1").value;
    let number2 = document.getElementById("value2").value;

    let ans = parseInt(number1) ^ parseInt(number2);

    document.getElementById("answer").value = ans;
}