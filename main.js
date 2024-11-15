const R = "Rock";
const P = "Paper";
const S = "Scissors";
let playerScore = 0;
let comScore = 0;

// Rules for winning
const rules = {
  Rock: "Scissors",
  Paper: "Rock",
  Scissors: "Paper",
};

// Computer choice logic
const getComChoice = () => {
  let choice = Math.floor(Math.random() * 3);
  return choice === 0 ? R : choice === 1 ? P : S;
};

// Player choice
const getPlayerChoice = () => {
  let choice;
  do {
    choice = parseInt(
      prompt("Choose either rock(1), papers(2) or scissors(3): ")
    );
  } while (![1, 2, 3].includes(choice));
  return choice === 1 ? R : choice === 2 ? P : S;
};

// Round logic to declare a winner or a loser
const playRound = (playerChoice, comChoice) => {
  if (playerChoice === comChoice) {
    return "🤝 The game is a tie!";
  }
  return rules[playerChoice] === comChoice
    ? "🎉 You won the game!"
    : "😞 You lost the game.";
};

console.log(playRound(getPlayerChoice(), getComChoice()));
