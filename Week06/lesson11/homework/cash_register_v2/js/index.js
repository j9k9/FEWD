var total = 0;
total = parseFloat(total);


$("#entry").submit(add);

function add (event){
  // console.log("hi");
  event.preventDefault();

  entry = $("#newEntry").val();


  if(isNaN(entry)) {

    $(".error-message").show();

    // alert("You need to enter a number!");
  }
  else {

    entry = parseFloat(entry).toFixed(2);

    $("ul.list").append("<li>" + "&#36;" + entry + "</li>").children(":last").hide().fadeIn(800);;


    $("#entry").hide().fadeIn(800);

    total = +total + +entry;

    $("#total").html(("&#36;" + total.toFixed(2)));

    $("#total").hide().fadeIn(800);

  };


  $("#newEntry").val("");

};
