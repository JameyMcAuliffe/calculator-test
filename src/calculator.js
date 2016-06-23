
//add function
function add(num1, num2) {
	return num1 + num2;
};

//subtract function
function subtract(num1, num2) {
	return num1 - num2;
};

//multiply function
function multiply(num1, num2) {
	return num1 * num2;
};

//divide function
function divide(num1, num2) {
	return num1 / num2;
};

//square function
function square(num) {
	return num * num;
};

//squareRoot function
function squareRoot(num) {
	return Math.sqrt(num);
};	


// Create a user interface for a calculator. One text input and 6 buttons.
// The user will enter a number in the text input.
// The user will then press one of the buttons for an operation.
// The input field should be cleared so that a new number can be typed in.
// The user will then type in a new number and press enter.
// The resulting value of the operation should then be in the text input.


//variables to store text input
var num1;
var num2;
var lastEvent;

var input = document.getElementById("input");

//Event for enter keystroke on input after second number has been entered,  
//then running the function based on the id of the last event
input.addEventListener("keyup", function(e) {
	if(e.keyCode === 13){
		num2 = input.value;
		input.value = "";
		
		if (lastEvent === "add") {
			input.value = add(parseInt(num1), parseInt(num2));
		}
		else if (lastEvent === "subtract") {
			input.value = subtract(parseInt(num1), parseInt(num2));
		}
		else if (lastEvent === "multiply") {
			input.value = multiply(parseInt(num1), parseInt(num2));
		}
		else if (lastEvent === "divide") {
			input.value = divide(parseInt(num1), parseInt(num2));
		}
	}
	else {

	}	

});

//Event listeners for buttons, storing the input value and clearing the box
var addButton = document.getElementById("add").addEventListener("click", function(){
	num1 = input.value;
	input.value = "";
	input.focus();
	input.select();
	lastEvent = event.target.id;
});

var subtractButton = document.getElementById("subtract").addEventListener("click", function(){
	num1 = input.value;
	input.value = "";
	input.focus();
	input.select();
	lastEvent = event.target.id;
});

var multiplyButton = document.getElementById("multiply").addEventListener("click", function(){
	num1 = input.value;
	input.value = "";
	input.focus();
	input.select();
	lastEvent = event.target.id;
});

var divideButton = document.getElementById("divide").addEventListener("click", function(){
	num1 = input.value;
	input.value = "";
	input.focus();
	input.select();
	lastEvent = event.target.id;
});

var squareButton = document.getElementById("square").addEventListener("click", function(){
	num1 = input.value;
	input.value = square(num1);
});

var squareRootButton = document.getElementById("square-root").addEventListener("click", function(){
	num1 = input.value;
	input.value = squareRoot(num1);
});









