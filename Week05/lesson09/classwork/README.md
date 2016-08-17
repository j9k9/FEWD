##Lesson 09 Classwork

FUNCTIONS

Temp converter:

1. get data
2. modify the data
3. action/moment in time for modification to occur

//get the value of the input - u want to delay this until the button is clicked. so put inside a function!



//create a function

function convert() {
  console.log("hello world");
  do this as a first step and then delete later, make sure the button is calling the function.

  get data, the value of the input.

  var c = document.querySelector("#celciusInput").value;
  var f = c = parseFloat(c); * 1.8 + 32
  console.log(f);
  this will check to see if the button works (the conversion is being triggered)
  the parsefloat c is exactly the same as saying c, but it just makes sure JS is converting a string into a number.

  document.querySelector("#result").innerHTML = ("Result: ") + f + (" \u2109");

}

// get the button

document.querySelector("#submit").onclick = convert;
gets the button and determines the moment in time that something will happen-in this case call the function called convert.


CALLING FUNCTIONS:

Arguments are when you need to give the function the values it needs to perform the function when you can;t access elements from the DOM.

when you don't use an event to call a function you just use empty brackets.

so:

function "helloWorld" (){  
  console.log ("hiya");
}


helloworld will print the whole function to the console.
helloWorld(); this will print "hiya" to the console


RETURN FUNCTIONS;
