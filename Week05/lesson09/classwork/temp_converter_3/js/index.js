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
    // redefine c to equal the conversion, so it works if the Fahreheit box is filled
    c = conversion;
  }


function switchBackground(thing){
  document.querySelector("body").style.backgroundColor = thing;
}


  //change the background colour based on value of c

  if (c<=0){
    switchBackground("blue");
    // change bg to blue

  } else if (c > 0 && c <= 18) {
    switchBackground("gray");
    //change bg to grey

  } else if (c > 18 && c <= 30) {
    switchBackground("orange");
    //change bg to orange

  } else {
    switchBackground("red");
    //change bg to red
  }


  document.querySelector("#result").innerHTML = ("Result: ") + conversion + ("°") + scale;
}

document.querySelector("#submit").onclick = convert;
