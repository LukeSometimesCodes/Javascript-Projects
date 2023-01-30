/*java dictionary object*/
var dog = {name: 'Dax', breed: 'Great Pyrenees', color: 'white'};
/*convert java objects to string format*/
var JSONstring = JSON.stringify(dog);
document.getElementById('myDog').innerHTML = JSONstring;
var JSONstring = JSON.parse(dog);
document.getElementById('myDog').innerHTML = JSONstring.name + ' the ' + JSONstring.breed;

/*set the data as a key/value pair to be saved locally in your browser*/
document.getElementById('myDog').innerHTML = localStorage.getItem('Name');

/*this  function gets the task from input*/
function get_todos() {
    /*this creates an array of tasks that are inputted*/
    var todos = new Array;
    /*this pulls the task that was saved in the web browser memory*/
    var todos_str = localStorage.getItem('todo');
    /*if the input is not null then JSON.parse will
    communicate with the web browser to make the task a javascript object*/
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}
/*this function adds the inputted task to the get_todos function array*/
function add() {
/*this adds a new task to the end of the array*/
todos.push(task);
/*this converts the task input to a JSON string*/
localStorage.setItem('todo', JSONstringify(todos));
document.getElementById('task').value = "";
show();

return false;
}

/* this function keeps the task permanetely displayed on the screen*/
function show() {
    /*this sets the task that was retrieved as a variable*/
    var todos = get_todos();

    /*this sets up each task as an unordered list*/
    var html = '<ul>';
    /*this displays a task to the list in the order that is is inputted*/
    for (var i = 0; i < todos.length; i++) {
        /*this also displays the task as a list and creates the button with the x*/
        html += '<li>' + todos[i] + '<button class="remove" id="' + '">x</buttom=n></li>';

    };
    html += '</ul>';
    /*this displays the inputted task when the add item button is clicked*/
    document.getElementById('add').addEventListener('click', add);
    /*this will keep the inputs displayed permanetely on the screen*/
    show();
}