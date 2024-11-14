const R = "Rock";
const P = "Paper";
const S = "Scissors";
let playerScore = 0;
let comScore = 0;
// Computer choice logic
const getComChoice = () => {
  let choice = Math.floor(Math.random() * 2) + 1;
  return choice === 1 ? R : choice === 2 ? P : S;
};

console.log(getComChoice());

// Player choice
const getPlayerChoice = () => {
  let choice = parseInt(
    prompt("Choose either rock(1), papers(2) or scissors(3): ")
  );
  return choice === 1
    ? R
    : choice === 2
    ? P
    : choice === 3
    ? S
    : console.log("Please either choose 1, 2 or 3");
};

console.log(getPlayerChoice());
