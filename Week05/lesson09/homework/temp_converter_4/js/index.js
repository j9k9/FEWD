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
    document.querySelector("#fInput").value = conversion + ("°") + scale;

  } else {
    //then convert fahrenheit to celcius

    conversion = (f - 32) * 9/5;
    scale = "C"
    document.querySelector("#cInput").value = conversion + ("°") + scale;
    // redefine c to equal the conversion, so it works if the Fahreheit box is filled
    c = conversion;
  }


function switchBackground(thing){

  document.querySelector("body").className = thing;
}


  //change the background colour based on value of c

  if (c<=0){

    switchBackground("blue");
    // change bg to blue

  } else if (c > 0 && c <= 18) {
    // console.log ("yo");
    switchBackground("gray");
    //change bg to grey

  } else if (c > 18 && c <= 30) {
    switchBackground("orange");
    //change bg to orange

  } else {
    switchBackground("red");
  }




}


document.querySelector("#submit").onclick = convert;
