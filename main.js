const R = "Rock";
const P = "Paper";
const S = "Scissors";

// Computer choice logic
const getComChoice = () => {
  let choice = Math.round(Math.random() * 2) + 1;
  return choice === 1 ? R : choice === 2 ? P : S;
};

console.log(getComChoice());
