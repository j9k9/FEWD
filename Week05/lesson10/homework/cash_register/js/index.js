var total = 0;
total = parseFloat(total);


$("#entry").submit(add);

function add (event){
  // console.log("hi");
  event.preventDefault();

  entry = $("#newEntry").val();

  entry = parseFloat(entry).toFixed(2);

  $("ul.list").append("<li>" + "&#36;" + entry + "</li>");

  total = +total + +entry;

  $("#total").html(("&#36;" + total.toFixed(2)));

  $("#newEntry").val("");

  // if (entry){
  //
  // };

};
