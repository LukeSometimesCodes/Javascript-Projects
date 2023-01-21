document.getElementById("Loop").innerHTML = length;


var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute",]
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++){
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function array_function() {
    var dog_picture = []
     dog_picture[0] = "sleeping";
     dog_picture[1] = "running";
     dog_picture[2] = "scratching";
     dog_picture[3] = "barking";
    document.getElementById("Array").innerHTML = "In this picture, the dog is " + dog_picture[3] + ".";
}

function constant_function() {
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color= "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML="The cost of the " + Musical_Instrument.type + " was " +Musical_Instrument.price;
}

 var X = 82;
 document.write(X);
 {
    let X = 33;
    document.write("<br>" + X);
 }
 document.write("<br>" + X); //will not work with defer in header

 function returncheck1() {   //return function
    return "Hello" + Math.PI;
 }

 
 let car = {
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    description: function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
 };
 document.getElementById("Car_Object").innerHTML = car.description();


 for (let i =0; i < 15; i++) {                   //breaks out of loop before it finished if something is met, stops loop
    if (i === 5) {break; }
    text += "we have reached " + i + "<br>";
 }

 for (let i = 0; i < 20; i++) {                   // hits one iteration, then skips over it. Continues loop
    if (i === 10) {continue; }
    text += "the number is now " + i + "<br>";
 }

 function count_To_Ten() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
        document.getElementById("Counting_to_Ten").innerHTML = Digit;
    }
 }