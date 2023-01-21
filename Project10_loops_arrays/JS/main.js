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