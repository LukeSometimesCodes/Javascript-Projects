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
    