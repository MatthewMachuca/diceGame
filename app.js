function runGame() {
	let winner = document.querySelector('h1');
	let result1 = Math.floor(Math.random() * 6 + 1);
	let result2 = Math.floor(Math.random() * 6 + 1);

	if (result1 > result2) {
		winner.innerHTML = 'Player 1 Wins!';
	} else if (result2 > result1) {
		winner.innerHTML = 'Player 2 Wins!';
	} else {
		winner.innerHTML = "It's a Tie!";
	}
	const diceImgs = [ 'dice1.png', 'dice2.png', 'dice3.png', 'dice4.png', 'dice5.png', 'dice6.png' ];

	let player1DiceImage = diceImgs[result1 - 1];
	let player2DiceImage = diceImgs[result2 - 1];

	document.getElementById('player1').src = player1DiceImage;
	document.getElementById('player2').src = player2DiceImage;
}

document.getElementById('start').addEventListener('click', runGame);
