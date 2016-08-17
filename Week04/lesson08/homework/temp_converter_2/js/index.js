// function convertCToF() {
//
//
//   var c = document.querySelector("#cInput").value;
//   var f = c * (9 / 5) + 32;
//
//   c = parseInt(c);
//   f = parseInt(f);
//   // I included this, but seems to work without it also. Confused!
//
//
//   document.querySelector("#result").innerHTML = ("Result: ") + f + (" \u2109");
//
//   document.querySelector("#submit").onclick = convertCToF;
//
// }
//
//
//
// function convertFToC() {
//
//   var f = document.querySelector("#fInput").value;
//   var c = (f - 32) * 5 / 9;
//
//
//   c = parseInt(c);
//   f = parseInt(f);
//
//
//   document.querySelector("#result").innerHTML = ("Result: ") + c + (" \u2103");
//
//   document.querySelector("#submit").onclick = convertFToC;
// }
//
// document.getElementById("cInput").oninput = function() {convertCToF()};
// document.getElementById("fInput").oninput = function() {convertFToC()};



// actual result


function convert() {

//grab inputted data first
  var c = document.querySelector("#cInput").value;
  var f = document.querySelector("#fInput").value;

//then declare conversion and scale variables
  var conversion, scale;


//if else statement to fork what happens

//check for nothingness. So if c is NOT an empty string

  if (c !== ""){
    //then convert celcius to fahrenheit

    conversion = c * 9/5 + 32;
    scale = "F"

  } else {
    //then convert fahrenheit to celcius

    conversion = (f - 32) * 9/5;
    scale = "C"
  }


  document.querySelector("#result").innerHTML = ("Result: ") + conversion + ("°") + scale;
}

document.querySelector("#submit").onclick = convert;
