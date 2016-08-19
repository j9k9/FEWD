
function changeBG(event) {

  event.preventDefault();

  var city = $("#city-type").val().toLowerCase();
  city = city.replace(/\s+/g, "");
  $("body").removeClass();

  if(city === "london"){

    $( "body" ).addClass( "london" );

  } else if (city === "nyc" || city ==="newyork" || city === "bigapple") {

    $( "body" ).addClass( "nyc" );

  } else if (city === "sf" || city === "sanfrancisco" || city === "sanfran") {

    $( "body" ).addClass( "sf" );

  } else if (city === "sydney") {

    $( "body" ).addClass( "sydney" );

  } else if (city === "austin") {

    $( "body" ).addClass( "austin" );

  } else if (city === "la" || city === "losangeles") {

    $( "body" ).addClass( "la" );
  };

}

$("#submit-btn").click(changeBG);
