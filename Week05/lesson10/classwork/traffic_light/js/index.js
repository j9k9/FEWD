//Implement the red light using jQuery. Don't forget to add the script tags.

$('#stopButton').click(illuminateRed);
$('#slowButton').click(illuminateYellow);
$('#goButton').click(illuminateGreen);


// vanilla JS
// // document.getElementById('stopButton').onclick = illuminateRed;
// document.getElementById('slowButton').onclick = illuminateYellow;
// document.getElementById('goButton').onclick = illuminateGreen;
// document.getElementById('clearButton').onclick = clearLights;

function illuminateRed() {
  clearLights();
  $('#stopLight').css('background-color', 'red');

  // vanilla JS
  // document.getElementById('stopLight').style.backgroundColor = "red";
}

function illuminateYellow() {
  clearLights();
  $('#slowLight').css('background-color', 'yellow');

  // vanilla JS
  // document.getElementById('slowLight').style.backgroundColor = "yellow";
}

function illuminateGreen() {
  clearLights();
  $('#goLight').css('background-color', 'green');

  // vanilla JS
  // document.getElementById('goLight').style.backgroundColor = "green";
}

function clearLights() {

  $('#stopLight, #slowLight, #goLight').css('background-color', 'black');

  // vanilla JS
  // document.querySelector('#stopLight').style.backgroundColor = "black";
  // document.querySelector('#slowLight').style.backgroundColor = "black";
  // document.querySelector('#goLight').style.backgroundColor = "black";
}

/*function turnOff (buttonNode) {
  buttonNode.style.backgroundColor = "black";
}

function fancyClearLights() {
 document.querySelectorAll('.bulb').forEach(turnOff);
}*/
