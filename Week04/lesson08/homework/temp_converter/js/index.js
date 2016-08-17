function convert() {


  var c = document.querySelector("#celciusInput").value;
  var f = c * 1.8 + 32


  c = parseInt(c);
  f = parseInt(f);
  // I included this, but seems to work without it also. Confused!


  document.querySelector("#result").innerHTML = ("Result: ") + f + (" \u2109");
}

document.querySelector("#submit").onclick = convert;
