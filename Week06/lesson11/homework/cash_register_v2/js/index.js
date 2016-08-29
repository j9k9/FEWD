var total = 0;
total = parseFloat(total);



function currencyFormat (yoyo) {

  return "&#36;" + yoyo.toFixed(2);

};



function add (event){
  // console.log("hi");
  event.preventDefault();

  entry = $("#newEntry").val();


  if(isNaN(entry)) {

    $(".error-message").show();

    // alert("You need to enter a number!");
  }
  else {

    entry = parseFloat(entry);

    $("ul.list").append("<li>"  + currencyFormat(entry) + "</li>").children(":last").hide().fadeIn(800);;


    $("#entry").hide().fadeIn(800);

    total = total + entry;



    $("#total").html((currencyFormat(total)));

    $("#total").hide().fadeIn(800);

    $(".error-message").hide();

  };


  $("#newEntry").val("");

};

$("#entry").submit(add);
