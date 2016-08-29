var humanChoice = "";
var humanScore = 0;
var computerScore = 0;


$('.choice').click(function() {
   humanChoice = this.id;

	 var choices = ["rock", "paper", "scissors"];

	 var computerChoice = choices[Math.floor(Math.random() * choices.length)];

   compare(humanChoice, computerChoice);

	 document.querySelector("#computerScore").innerHTML = computerScore;
	 document.querySelector("#humanScore").innerHTML = humanScore;


});



function compare (humanChoice, computerChoice){
  if (humanChoice === computerChoice) {

    document.querySelector("#status").innerHTML = "It's a tie!";
		}

  	else if (humanChoice === "rock") {


 		if (computerChoice === "scissors") {

    humanWins();

		} else {

		botWins();
		}
	}



		else if (humanChoice === "paper") {


		 if (computerChoice === "rock") {

			 humanWins();

		} else {

			botWins();
		  }
		}




		 else if (humanChoice === "scissors") {


		 if (computerChoice === "rock") {

			 botWins();
		} else {

			humanWins();
		}
	}
};

function humanWins(){
	document.querySelector("#status").innerHTML = "You win!";
	humanScore = humanScore + 1;
};

function botWins(){
	document.querySelector("#status").innerHTML = "Bot wins :(";
	computerScore = computerScore + 1;
};
