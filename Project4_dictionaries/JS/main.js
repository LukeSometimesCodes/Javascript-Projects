function my_dictionary() {
    var Animal = {
        Species: "Dog",
        Color: "Black",
        Breed: "Labrador",
        Age: 5,
        Sound: "Bark!",
    };
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}

function my_dictionary() {
    var Animal = {
        Species: "Bear",
        Color: "Brown",
        Breed: "Grizzly",
        Age: 5,
        Sound: "Woof!",
    };
    delete Animal.Sound; // "Deletes" sound from the dictionary online, but remains in coding here.
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}