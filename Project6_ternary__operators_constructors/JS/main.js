function Vote_Function() {                              // turnary example
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are too young": "You are old enough";
    document.getElementById("Can_vote").innerHTML = Can_vote + " to vote.";
}

function Vehicle (Make, Model, Year, Color) {  //Constructor for vehicle function
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black"); // new telling the computer to start a new vehicle class
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myfunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML ="Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

function myfunction2() {
document.getElementById("New_and_This").innerHTML ="Emily drives a " + Emily.Vehicle_Color + "-colored " + Emily.Vehicle_Model + " manufactured in " + Emily.Vehicle_Year;
}

function nested_function() {
    document.getElementById("counting").innerHTML = count(); //Nesting a function within another one
    function count() {
        var starting_point = 9;
        function plus_one() {starting_point +=1;}
        plus_one ();
        return starting_point;
    }
}