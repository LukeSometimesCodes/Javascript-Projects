//This varianle keeps track of whose turn it is
let activePlayer = 'X';
//This array stores an array of moves. We use this to determine win conditions.
let selectedSquares = [];

//This function is for placing an x or o in a square
function placeXOrO(squareNumber) {
    //This condition ensures a square hasn't already been used
    //The .some() method is used to check if each element of the selectSquare array
    //to see if it contains the square number clicked on
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        //This variable retireives the HTML element id that was clicked
        let select = document.getElementById(squareNumber);
        //This condition checks whos turn it is
        if (activePlayer === 'X') {
            //if active player is equal to x, the x.png is placed in HTML
            select.style.backgroundImage = 'url("images/BrendanFraser2.jpg")';
            //active player may only be X or ) so if not x it must be O
        } else {
            //active player is equal to O the opng is placed in HTML
            select.style.backgroundImage = 'url("images/guyfieri.jpg")';
        }
        //squarenumber and active player are connected together and added to array
        selectedSquares.push(squareNumber + activePlayer);
        //This calls a function to check for any win conditions
        checkWinConditions();
        //This condition is for changing the active player
        if (activePlayer === 'X') {
            //if active player is x change it to O
            activePlayer = 'O';
            //if active player is anything other then X
        } else {
            //change player to X
            activePlayer = 'X';
        }
    //this function plays placement sound
    audio('./media/place.mp3');
    //this condition checks to see if it is the computers turn
    if (activePlayer === 'O') {
        //this function disables clicking for the computers turn
        disableClick();
        //thus function waitss 1 second before the computer places am image and enables click
        setTimeout(function () {computersTurn();}, 1000);
    }
    //returning true is neede for our computerturn function to work
    return true;
}
//This function results in a random square being selected by the computer
function computersTurn() {
    //this boolean is neede for our while loop
    let success = false;
    //this variable stores a random number 0-8
    let pickASquare;
    //this condition allows our while loop to keep trying if a square is selected already
    while (!success) {
        //a random number between 0-8 is selected
        pickASquare = String(Math.floor(Math.random() * 9));
        //if the random number chosen turns true, the square hsn't been selected yet
        if (placeXOrO(pickASquare)) {
            //this line calls the function
            placeXOrO(pickASquare);
            //this changes our boolean and ends the loop
            success = true;
        };
    }
}
}

//This function parses the selected squares array to search for win conditions
//drawline() function is called to draw a line on the screen if the condition is met
function checkWinConditions() {
    //X 0, 1, 2 condition
    if (arrayIncludes('0X', '1X', '2X')) {drawWinLine(50, 100, 558, 100) }
    // X 3, 4, 5 condition
    else if (arrayIncludes('3X', '4X', '5X')) {drawWinLine(50, 304, 558, 304) }
    // X 6, 7, 8 condition
    else if (arrayIncludes('6X', '7X', '8X')) {drawWinLine(50, 508, 558, 508) }
    // X 0, 3, 6 condition
    else if (arrayIncludes('0X', '3X', '6X')) {drawWinLine(100, 50, 100, 558) }
    // X 1, 4, 7 condition
    else if (arrayIncludes('1X', '4X', '7X')) {drawWinLine(304, 50, 304, 558) }
    // X 2, 5, 8 condition
    else if (arrayIncludes('2X', '5X', '8X')) {drawWinLine(508, 50, 509, 558) }
    // X 6, 4, 2 condition
    else if (arrayIncludes('6X', '4X', '2X')) {drawWinLine(100, 508, 510, 90) }
    // X 0, 4, 8 condition
    else if (arrayIncludes('0X', '4X', '8X')) {drawWinLine(100, 100, 520, 520) }
    // O 0, 1, 2 condition
    else if (arrayIncludes('0O', '1O', '2O')) {drawWinLine(50, 304, 558, 304) }
    // O 3, 4, 5 condition
    else if (arrayIncludes('3O', '4O', '5O')) {drawWinLine(50, 304, 558, 304) }
    // O 6, 7, 8 condition
    else if (arrayIncludes('6O', '7O', '8O')) {drawWinLine(50, 508, 558, 508) }
    // O 0, 3, 6 condition
    else if (arrayIncludes('0O', '3O', '6O')) {drawWinLine(100, 50, 100, 558) }
    // O 1, 4, 7 condition
    else if (arrayIncludes('1O', '4O', '7O')) {drawWinLine(304, 50, 304, 558) }
    // O 2, 5, 8 condition
    else if (arrayIncludes('2O', '5O', '8O')) {drawWinLine(508, 50, 508, 558) }
    // O 6, 4, 2 condition
    else if (arrayIncludes('6O', '4O', '2O')) {drawWinLine(100, 508, 510, 90) }
    // O 0, 4, 8 condition
    else if (arrayIncludes('0O', '4O', '8O')) {drawWinLine(100, 100, 520, 520) }
    //This condition checks for a tie. if none of the above conditions are metand 
    //9 squares are selected the code executes
    else if (selectedSquares.length >= 9) {
        //This function plays the tie game sound
        audio('./media.tie.mp3');
        //this one sets a .3 second timer before the resetgame is called
        setTimeout(function () { resetGame(); }, 500);
    }
    //this one checks if a array includes 3 strings it is used to check
    //for each win condition
    function arrayIncludes(squareA, squareB, squareC) {
        //these 3 variables will be used to check for 3 in a row
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        // if the 3 variables we pass are all included in our array then
        //true is returned and our else if condition executes the draw line function
        if (a === true && b ===true && c ===true) {return true;}
    }
}

//ERROR IS SOMEWHERE ABOVE THIS MOST LIKELY A TYPO

//this function makes our body element temporarily unclickable
function disableClick() {
    //this makes it that thing
    body.style.pointerEvents = 'none';
    //this makes our body clickable again after one second
    setTimeout(function (){body.style.pointerEvents = 'auto'; }, 1000)
}

//this function takes a string parameter of the path you set earlier for 
//placment souns
function audio(audioURL) {
    //we create a new audio object and we pass the path as a paremeter
    let audio = new Audio(audioURL);
    //play method plays our new audio sound
    audio.play();
}

//this function utilizes html canvas to draw win lines
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    //this line accesses our html canvas element
    const canvas = document.getElementById('win-lines');
    //this line gives us access to methods and properties to use on canvas
    const c = canvas.getContext('2d');
    //this line indicates where the start of a lines x axis is
    let x1 = coordX1,
    //this ones where the start of a lines y axis is
    y1 = coordY1,
    //end of x axis
    x2 = coordX2,
    //eend of x axis
    y2 = coordY2,
    //thing
    x = x1;
    //other thing
    y = y1;
    //this function interacts with the canvas
    function animateLineDrawing() {
        //creates loop
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        //this method clears content from the last loop iteration
        c.clearRect(0, 0, 608, 608);
        //starts a new path
        c.beginPath();
        //moves us to a starting point in our line
        c.moveTo(x1, y1);
        //this method indicates the end point in our line
        c.lineTo(x, y);
        //this method sets the width of our line
        c.lineWidth = 10;
        //sets color of our line
        c.strokeStyle = 'rgba(70, 255, 33, .8)';
        //this one draws everything we laid out above
        c.stroke();
        //this condition checks if weve reached the endpoint
        if (x1 <= x2 && y1 <=y2) {
            //adds 10 to previous endpoint
            if (x <x2) {x+=10;}
            //idk anymore man what even is this
            if (y <y2) {y +=10;}
            //thing
            //something else
            if (x >=x2 && y >=y2) {cancelAnimationFrame(animationLoop);}
        }
        //this condition is similar to the one above
        //this is necessary for the  6 4 2 win condition
        if (x1 <=x2 && y1 >=y2) {
            if (x<x2) {x+=10; }
            if (y >y2) {y -=10; }
            if (x >=x2 && y <= y2) {cancelAnimationFrame(animationLoop);}
        }
    }
    //this function clears our canvas after our win line is drawn
    function clear() {
        //this line starts our animation loop
        const animationLoop = requestAnimationFrame(clear);
        //this line clears our canvas
        c.clearRect(0, 0, 608, 608);
        //this line stops our animation loop
        cancelAnimationFrame(animationLoop);
    }
    //this line disallows clicking while the win sound is playing
    disableClick();
    //this line plays the win sounsd
    audio('./media/thing.mp3');
    //this line calls our main animation loop
    animateLineDrawing();
    //this line waits 1 second. then clears canvas, resets game and allows clicking again
    setTimeout(function () { clear(); resetGame(); }, 1000);
}

//this function resets the game in the event of a tie or a win
function resetGame() {
    //this for loop iterates through each html square element
    for (let i = 0; i < 9; i++) {
        //this variable gets the html element i
        let square = document.getElementById(String(i));
        //this removes our elements background image
        square.style.backgroundImage = '';
    }
    //this resets our array so it is empty and we can start over
    selectedSquares = [];
}
