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