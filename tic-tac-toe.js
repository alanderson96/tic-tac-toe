const squareOneElement = document.querySelector("#squareOne");
const squareTwoElement = document.querySelector("#squareTwo");
const squareThreeElement = document.querySelector("#squareThree");
const squareFourElement = document.querySelector("#squareFour");
const squareFiveElement = document.querySelector("#squareFive");
const squareSixElement = document.querySelector("#squareSix");
const squareSevenElement = document.querySelector("#squareSeven");
const squareEightElement = document.querySelector("#squareEight");
const squareNineElement = document.querySelector("#squareNine");

const currentPlayersTurnElement = document.querySelector("#currentPlayersTurn");
const winMessageElement = document.querySelector("#winMessage");
const resetButtonElement = document.querySelector("#resetButton");

const squares = [
  squareOneElement,
  squareTwoElement,
  squareThreeElement,
  squareFourElement,
  squareFiveElement,
  squareSixElement,
  squareSevenElement,
  squareEightElement,
  squareNineElement,
];

let isGameOver = false;
let currentPlayersTurn = "X";

// Add click event listeners for each square
squares.forEach((element) => {
  element.addEventListener("click", (event) => {
    const element = event.target;

    if (element.innerText || isGameOver) {
      return;
    }

    element.innerText = currentPlayersTurn;

    const winnerMessage = checkIfGameIsOver(currentPlayersTurn);

    if (winnerMessage) {
      isGameOver = true;

      winMessageElement.innerText = winnerMessage;
      return;
    }
    //                      Short hand way to assign a
    //                      variable based off a conditional.
    //                   conditional ? (value if ture) : (value if false);
    currentPlayersTurn = currentPlayersTurn === "X" ? "O" : "X";
    currentPlayersTurnElement.innerText = currentPlayersTurn;
  });
});

// Reset Button Handler
resetButtonElement.addEventListener("click", () => {
  squares.forEach((element) => {
    element.innerText = "";
  });

  isGameOver = false;
  winMessageElement.innerText = "";
  currentPlayersTurn = "X";
});

function checkIfGameIsOver(lastPlayer) {
  let hasPlayerWon = false;

  if (
    squareOneElement.innerText === lastPlayer &&
    squareTwoElement.innerText === lastPlayer &&
    squareThreeElement.innerText === lastPlayer
  ) {
    hasPlayerWon = true;
  } else if (
    squareFourElement.innerText === lastPlayer &&
    squareFiveElement.innerText === lastPlayer &&
    squareSixElement.innerText === lastPlayer
  ) {
    hasPlayerWon = true;
  } else if (
    squareSevenElement.innerText === lastPlayer &&
    squareEightElement.innerText === lastPlayer &&
    squareNineElement.innerText === lastPlayer
  ) {
    hasPlayerWon = true;
  } else if (
    squareOneElement.innerText === lastPlayer &&
    squareFourElement.innerText === lastPlayer &&
    squareSevenElement.innerText === lastPlayer
  ) {
    hasPlayerWon = true;
  } else if (
    squareTwoElement.innerText === lastPlayer &&
    squareFiveElement.innerText === lastPlayer &&
    squareEightElement.innerText === lastPlayer
  ) {
    hasPlayerWon = true;
  } else if (
    squareThreeElement.innerText === lastPlayer &&
    squareSixElement.innerText === lastPlayer &&
    squareNineElement.innerText === lastPlayer
  ) {
    hasPlayerWon = true;
  } else if (
    squareOneElement.innerText === lastPlayer &&
    squareFiveElement.innerText === lastPlayer &&
    squareNineElement.innerText === lastPlayer
  ) {
    hasPlayerWon = true;
  } else if (
    squareThreeElement.innerText === lastPlayer &&
    squareFiveElement.innerText === lastPlayer &&
    squareSevenElement.innerText === lastPlayer
  ) {
    hasPlayerWon = true;
  }

  if (hasPlayerWon) {
    return `🍾🎉🎊 CONGRATULATIONS PLAY ${lastPlayer}!!! 🎊🎉🍾`;
  } else if (
    squareOneElement.innerText !== "" &&
    squareTwoElement.innerText !== "" &&
    squareThreeElement.innerText !== "" &&
    squareFourElement.innerText !== "" &&
    squareFiveElement.innerText !== "" &&
    squareSixElement.innerText !== "" &&
    squareSevenElement.innerText !== "" &&
    squareEightElement.innerText !== "" &&
    squareNineElement.innerText !== ""
  ) {
    return "TIE - NO WINNER";
  }

  return "";
}