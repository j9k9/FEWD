function changeBG(event) {

  event.preventDefault();

  var city = $("#city-type").val().toLowerCase();
  city = city.replace(/\s+/g, "");



  function switchBackground(image){

    document.querySelector("body").className = image;
  }


    if (city === "london"){

      switchBackground("london");

    } else if (city === "nyc" || city ==="newyork" || city === "bigapple") {

      switchBackground("nyc");

    } else if (city === "sf" || city === "sanfrancisco" || city === "sanfran") {

      switchBackground("sf");

    } else if (city === "sf" || city === "sanfrancisco" || city === "sanfran") {

      switchBackground("sf");

    } else if (city === "sydney") {

      switchBackground("sydney");

    } else if (city === "austin") {

      switchBackground("austin");

    } else if (city === "la" || city === "losangeles") {

      switchBackground("la");

    };

}

$("#submit-btn").click(changeBG);
