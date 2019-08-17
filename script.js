document.addEventListener("DOMContentLoaded", () => {
	"use strict";
//to start the JS code after the rest of the HTML and CSS elements are loaded. All the code goes in here.
//So the above defined arrow function code is defined as our JS workspace.

//Defining the variables to link the HTML elements for Buttons and Displays.
	let rckBtn = document.querySelector("#rock");
	let pprBtn = document.querySelector("#paper");
	let scsBtn = document.querySelector("#scissors");
	
	let plDisp = document.querySelector("#playerSelDsp");
	let cpDisp = document.querySelector("#compSelDsp");
	let sBTdisp = document.querySelector("#scoreBdT"); 
	let plPts = document.querySelector("#plPts");
	let cpPts = document.querySelector("#cpPts");

	const decisions = ["Rock","Paper","Scissors"];
	let plWin = 0, cpWin = 0, tie = 0;
	let cntr = 1;

//Events to display the Player's Choice when buttons used. And calling the computer choice at the same time.
	rckBtn.addEventListener("click", e => {
		e.preventDefault();  //prevents default beahviour for events.
		let cpCh = computerChoice();
		plDisp.innerText = "Rock";
		cpDisp.innerText = cpCh;
		fight("Rock", cpCh);
	});
	pprBtn.addEventListener("click", e => {
		e.preventDefault();  //prevents default beahviour for events.
		let cpCh = computerChoice();
		plDisp.innerText = "Paper";
		cpDisp.innerText = cpCh;
		fight("Paper", cpCh);
	});
	scsBtn.addEventListener("click", e => {
		e.preventDefault();  //prevents default beahviour for events.
		let cpCh = computerChoice();
		plDisp.innerText = "Scissors";
		cpDisp.innerText = cpCh;
		fight("Scissors", cpCh);
	});

//defining the random computer choice.
	function computerChoice (){
		let cpChoice = Math.round(Math.random() * 2.5);
		return decisions[cpChoice];
	}

//Comparing the player vs computer.
	function fight(player, computer){
		if(cntr <= 5) {   //  I M P O R T A N T:
						  //This IF Statement is necessary INSIDE the/a Function
						  //becuause if declared outside it will never happen because
						  //outside the functions the main Function we're working on
						  //ONLY RUNS ONCE!!!!!!!!!!!
			sBTdisp.innerText = "Match  " + cntr++;
			if (player === computer) tie++;
			if (player === "Rock" && computer == "Paper") cpWin++;
			if (player === "Rock" && computer == "Scissors") plWin++;
			if (player === "Paper" && computer == "Scissors") cpWin++;
			if (player === "Paper" && computer == "Rock") plWin++;
			if (player === "Scissors" && computer == "Paper") plWin++;
			if (player === "Scissors" && computer == "Rock") cpWin++;
			plPts.innerText = plWin;
			cpPts.innerText = cpWin;
		}
		else {
			sBTdisp.innerText = (plWin>cpWin) ? "K.O.!! Yuuuu WIN!!!" : (cpWin>plWin) ? "You lost! Better luck next time." : "Both are pussies";
			plDisp.style.color = 'rgb(0, 0, 0)';
			cpDisp.style.color = 'rgb(0, 0, 0)';

			//plPts.style.color = 'black'; <-  this works, but with '#fff' <- doesn't.   BUT can use 'rgb(,,)'.
		}
	}



});