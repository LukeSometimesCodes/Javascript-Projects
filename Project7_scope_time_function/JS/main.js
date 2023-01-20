var X = 10;
function add_numbers_1() {
    document.write(20 + X + "<br>"); //Global variable, not inside function
}
function add_numbers_2() {
    document.write(X + 100);
}

add_numbers_1();
add_numbers_2();

function add_numbers_3() {
    var Y = 10;
    document.write(20 + Y + "<br>")  //Local variable, inside function
}
function add_numbers_4() {
    document.write(Y + 100);
}
add_numbers_3();
add_numbers_4();

function add_numbers_5() {     //console log error
    var M = 10;
    console.log(15 + M);
}
function add_numbers_6() {    
    console.log(M + 100);
}
add_numbers_5();
add_numbers_6();


function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today";
    }
}

test = 6;
if (test < 9) {
    window.alert("yes");
}

function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vote = "You are old enough to vote";
    }
        else {
            Vote ="you are not old enough to vote";
        }
        document.getElementById("how_old_are_you").innerHTML = Vote;
    }


    function Time_function() {
        var Time = new Date().getHours();
        var Reply;
        if (Time < 12 == Time > 0) {
            Reply = "It is morning time!";
        }
        else if (Time >= 12 == Time < 18) {
            Reply = "It is afternoon";
        }
        else {
            Reply = "It is evening time";
        }
        document.getElementById("Time_of_day").innerHTML = Reply;
    }

    function Slice_Method() {                                              //Slices out a certain part of a string into a different string
        var Sentence = "All work and no play makes Johnny a dull boy.";
        var Section = Sentence.slice(27,33);
        document.getElementById("Slice").innerHTML = Section;
    }

    let string = "test to upper case";                      //converts everyting to upper case in a string
    console.log(txt.toUpperCase());

    let text = "my car is blue and some black trim"           //searches string for specific thing and tells you where that is in string
    let position = text.search("blue");
    document.getElementById("demo").innerHTML = position;

    function string_method() {                                      // converts a number value into a string value  
        var X = 182;
        document.getElementById("numbers_to_string").innerHTML = X.toString();
    }

    function precision_method() {                                       //formats number into certain length
        var X = 13045.758924578941;
        document.getElementById("precision").innerHTML = X.toPrecision(9);
    }

    
    let num = 5.45678;                                      //toFixed will convert a number to a string
    let n = num.toFixed();
    document.getElementById("tofixdemo").innerHTML = n;

    let text = "valueoftest";                               //returns primitive date type of whatever you set it to
    let result = text.valueOf();
    document.getElementById("valueofdemo").innerHTML = result;
    