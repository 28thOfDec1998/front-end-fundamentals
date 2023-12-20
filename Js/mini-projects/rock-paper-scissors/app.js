// Let's play! You have to return which player won! In case of a draw return Draw!.
const rps = (p1, p2) => {
    const choices = ['rock', 'paper', 'scissors'];
    let x = choices.indexOf(p1);
    let y = choices.indexOf(p2);
    
    if (x === y) return 'Draw!';
    if (x === 0 && y === 2) return 'Player 1 won!';
    if (x === 2 && y === 0) return 'Player 2 won!';
    if (x > y) return 'Player 1 won!'
    else return 'Player 2 won!';
  };
  console.log(rps(2,));