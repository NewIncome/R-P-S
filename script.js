document.addEventListener("DOMContentLoaded", () => {
	"use strict";
//It's a game with 2 variables, which can have 3 dif values. After that compare the values and declare a winner.
//So, steps:

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
	let cntr = 0;

//Events to display the Player's Choice when buttons used. And calling the computer choice at the same time.
	rckBtn.addEventListener("click", e => {
		e.preventDefault();  //prevents default beahviour for events.
		let cpCh = computerChoice();
		plDisp.innerText = "Rock";
		cpDisp.innerText = cpCh;
		fight("Rock", cpCh);
		plPts.innerText = plWin;
		cpPts.innerText = cpWin;
	});
	pprBtn.addEventListener("click", e => {
		e.preventDefault();  //prevents default beahviour for events.
		let cpCh = computerChoice();
		plDisp.innerText = "Paper";
		cpDisp.innerText = cpCh;
		fight("Paper", cpCh);
		plPts.innerText = plWin;
		cpPts.innerText = cpWin;
	});
	scsBtn.addEventListener("click", e => {
		e.preventDefault();  //prevents default beahviour for events.
		let cpCh = computerChoice();
		plDisp.innerText = "Scissors";
		cpDisp.innerText = cpCh;
		fight("Scissors", cpCh);
		plPts.innerText = plWin;
		cpPts.innerText = cpWin;
	});

//defining the random computer choice.
	function computerChoice (){
		let cpChoice = Math.round(Math.random() * 2.5);
		return decisions[cpChoice];
	}

//Comparing the player vs computer.
	function fight(player, computer){
		sBTdisp.innerText = "Match  " + cntr++;
		if (player === computer) tie++;
		if (player === "Rock" && computer == "Paper") cpWin++;
		if (player === "Rock" && computer == "Scissors") plWin++;
		if (player === "Paper" && computer == "Scissors") cpWin++;
		if (player === "Paper" && computer == "Rock") plWin++;
		if (player === "Scissors" && computer == "Paper") plWin++;
		if (player === "Scissors" && computer == "Rock") cpWin++;
	}
	if(cntr === 5) {
		sBTdisp.innerText = "Time Out";
		break;
		//sBTdisp.innerText = (plWin>cpWin) ? "Yuuuu WIN!!" : (cpWin>plWin) ? "Yuuuu LOSE!!" : "Both are pussies";
	}



});	//to start the JS code after the rest of the HTML and CSS elements are loaded. All the code goes in here.