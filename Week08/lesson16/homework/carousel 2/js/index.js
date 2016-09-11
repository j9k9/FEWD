var i = 0;
var images;
var text;

var types = {
 images : ["animal1", "animal2", "animal3", "animal4", "animal5", "animal6"],
 text : ["1", "2", "3", "4", "5", "6"]
};


function buttonVisibility() {
	var lastImageIndex = types.images.length - 1;
	var forward = $("#forward");
	var back = $("#back");

	if (i <= 0) {
		back.addClass("hidden");
	} else if (i >= lastImageIndex) {
		forward.addClass("hidden");
	} else {
		back.removeClass("hidden");
		forward.removeClass("hidden");
	}
}

function changeImage() {
	$("#currentImage").attr("src", "images/animals/" + types.images[i] + ".jpg");
	buttonVisibility();
}

function forwardText() {
	$("#text" + types.text[i]).addClass("show");
	i--;
	$("#text" + types.text[i]).removeClass("show");
	i++;
}

function backText() {
	$("#text" + types.text[i]).addClass("show");
	i++;
	$("#text" + types.text[i]).removeClass("show");
	i--;
}

function previousImage() {
	i--;
	changeImage();
	backText();
}

function nextImage() {
	i++;
	changeImage();
	forwardText();
}

$("#forward").click(nextImage);
$("#back").click(previousImage);
