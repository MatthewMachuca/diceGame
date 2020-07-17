function runGame() {
	let result1 = Math.floor(Math.random() * 6 + 1);
	let result2 = Math.floor(Math.random() * 6 + 1);
	console.log(result1, result2);
	if (result1 > result2) {
		console.log('Player 1 wins!');
	} else if (result2 > result1) {
		console.log('Player 2 wins!');
	} else {
		console.log("It's a tie! ");
	}
	const diceImgs = [ 'dice1.png', 'dice2.png', 'dice3.png', 'dice4.png', 'dice5.png', 'dice6.png' ];
	let player1DiceImage = diceImgs[result1 - 1];
	console.log(player1DiceImage);
}

document.addEventListener('keypress', runGame);

document.getElementById('player2').src = 'dice1.png';
