function Slice_Method() {                                              //Slices out a certain part of a string into a different string
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}

let string = "test to upper case";                      //converts everyting to upper case in a string
console.log(string.toUpperCase());

let text = "my car is blue and some black trim"           //searches string for specific thing and tells you where that is in string
let position = text.search("blue");
document.getElementById("demo").innerHTML = position;

function string_method() {                                      // converts a number value into a string value  
    var X = 182;
    document.getElementById("numbers_to_string").innerHTML= X.toString();
}

function precision_method() {                                       //formats number into certain length
    var X = 13045.758924578941;
    document.getElementById("precision").innerHTML = X.toPrecision(9);
}


let num = 5.45678;                                      //toFixed will convert a number to a string
let n = num.toFixed();
document.getElementById("tofixdemo").innerHTML = n;

let text1 = "valueoftest";                               //returns primitive date type of whatever you set it to
let result = text.valueOf();
document.getElementById("valueofdemo").innerHTML = result;


var B = ("Connect these two strings") + ("To make one sentence")
console.log(B)