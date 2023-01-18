document.write(typeof "thing"); // typeof example

document.write("10" + 5); // type coercion example

function my_function() {
    document.getElementById("Test").innerHTML = 0/0;
}

function function_true() {
    document.getElementById("Test2").innerHTML = isNaN('Thing');
}

function function_false() {
    document.getElementById("Test3").innerHTML = isNaN(5);
}

document.write(2E310); //To display infinity and -infinity
document.write(-3E310);

document.write(10 > 2); // Boolean logic example
document.write(10 < 2);

console.log(4 * 10); // console log math example
console.log(10 > 4000);

document.write(10==10); // == example
document.write(3==11);

X = 10;
Y = 10;
document.write(X===Y);

Z = 25;
U = 24;
document.write(Z===U);

Q = 28;
I = "28";
document.write(Q===I);

M = 5;
M = 4;
document.write(M===M);

document.write (5 > 2 && 10 > 4); // All demonstrating AND OR symbols

document.write (5 > 10 && 10 > 4);

document.write(5 > 10 || 10 > 4);

document.write(5 > 10 || 10 > 20);

function not_function() {
    document.getElementById("Not").innerHTML = !(20 > 10); //Checks whether or not something is true.
}

function not_function2() {
    document.getElementById("Not2").innerHTML = !(5 > 10); //Checks whether or not something is true.
}

