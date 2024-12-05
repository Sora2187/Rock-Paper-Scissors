const R = "Rock";
const P = "Paper";
const S = "Scissors";
const btn1 = document.querySelector("#rock-btn");
const btn2 = document.querySelector("#paper-btn");
const btn3 = document.querySelector("#scissors-btn");
let playerChoice;

// Buttons to decide player choice
btn1.addEventListener("click", () => {
  playerChoice = "Rock";
  console.log("You pressed rock!");
  console.log(playerChoice);
  console.log(playRound(playerChoice, getComChoice()));
});
btn2.addEventListener("click", () => {
  playerChoice = "Paper";
  console.log("You pressed paper!");
  console.log(playerChoice);
  console.log(playRound(playerChoice, getComChoice()));
});
btn3.addEventListener("click", () => {
  playerChoice = "Scissors";
  console.log("You pressed scissor!");
  console.log(playerChoice);
  console.log(playRound(playerChoice, getComChoice()));
});

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

// Round logic to declare a round winner or a round loser
const playRound = (pChoice, comChoice) => {
  if (pChoice === comChoice) {
    return "🤝 The game is a tie!";
  }
  return rules[pChoice] === comChoice
    ? "🎉 You won the game!"
    : "😞 You lost the game.";
};
// Store score logic after a round win or loss

const playGame = () => {
  let playerScore = 0;
  let comScore = 0;
  // let result;

  // let totalRounds;
  // do {
  //   totalRounds = parseInt(
  //     prompt("Enter the number of Rounds you wanna play: ")
  //   );
  // } while (isNaN(totalRounds) || totalRounds <= 0);

  // for (let round = 1; round <= totalRounds; round++) {
  //   result = playRound(getPlayerChoice(), getComChoice());
  //   if (result === "🎉 You won the game!") {
  //     playerScore++;
  //   } else if (result === "😞 You lost the game.") {
  //     comScore++;
  //   }
  // }

  // Show output
  // console.log(
  //   `Your final score was ${playerScore} and enemy score was ${comScore}`
  // );
  // if (playerScore > comScore) {
  //   return "Congrats you won the game!";
  // } else if (comScore > playerScore) {
  //   return "Sorry, you lost the game";
  // }
  // return "GGs, game tied";
};

// console.log(playGame());

// Play again feature
// let playAgain;

// playAgain = prompt("Do you wanna play again?");

// if (playAgain.toLowerCase() === "yes") {
//   console.log(playGame());
// } else {
//   console.log("see you next time then!");
// }
