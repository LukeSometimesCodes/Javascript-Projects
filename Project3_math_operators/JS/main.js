function addition_function() {
    var addition = 2+2;
    document.getElementById("Math").innerHTML= "2+2="+ addition;
}

function subtraction_function() {
    var subtraction = 5-2;
    document.getElementById("math").innerHTML = "5-2=" + subtraction;
}

function multiplication() {
    var simple_math = 6*8;
    document.getElementById("math-multiply").innerHTML = "6*8=" + simple_math
}

function division () {
    var simple_math = 48/6;
    document.getElementById("math-divide").innerHTML = "48/6=" + simple_math
}

function more_math() {
    var simple_math = (1+2) * 10 / 2 -5;
    document.getElementById("math-max").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals" + simple_math;
}

function modulus_operator() {
    var simple_math = 25 % 6;
    document.getElementById("math-modulus").innerHTML ="When you divide 25 by 6 you have a remainder of: "+ simple_math;
}

function negation_operator() {
    var x = 10;
    document.getElementById("math-negation").innerHTML = -x
}

var X = 5;
X++;
console.log(X);

var X = 5.25;
X--;
console.log(X);

window.alert(Math.random() * 100); //Picks a number between 1-100

let y = 3.14
y = Math.ceil(y); //Math would be the constant, whatever afterwards would decide what to do with the number; ceil is rounding up, floor is rounding down
console.log(y);