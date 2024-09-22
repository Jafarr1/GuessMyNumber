console.log("jeg er i guessnumber")

const lblMessage = document.querySelector(".message");
console.log(lblMessage);
console.log(lblMessage.textContent)

const lblNumber = document.querySelector(".number");
console.log(lblNumber);

const lblScore = document.querySelector(".score");
console.log(lblScore);



const inpGuess = document.querySelector(".guess");
console.log(inpGuess);

const pbAgain = document.querySelector(".again");
console.log(pbAgain);

const pbGuess = document.querySelector(".check");

let rannum = 0;
function generateNumber() {
    rannum = Math.trunc(Math.random()*20) + 1;
    lblNumber.textContent = rannum;
}

pbAgain.addEventListener("click", generateNumber)


function guessNumber() {
    const gues = inpGuess.value;
    if (gues == rannum) {
        lblMessage.textContent = "du har vundet";
    } else {
        lblMessage.textContent = "du har tabt";
    }
}

pbGuess.addEventListener("click", guessNumber)
