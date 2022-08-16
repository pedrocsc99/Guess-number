const numberUser = document.getElementById("inputGuess");
const firstNumber = document.getElementById("firstNumber");
const secondNumber = document.getElementById("secondNumber");
const thirdNumber = document.getElementById("thirdNumber");
let digits = [];
export function changeNumbers() {
  const numbersImputed = numberUser.value;

  if (numbersImputed > 300 || numbersImputed == 0 || numbersImputed < 1) {
    return;
  }
  digits = numbersImputed
    .toString()
    .split("")
    .map((iNum) => parseInt(iNum, 10));
  console.log(digits);
  console.log(digits.length);

  if (digits.length == 1) {
    //Removendo numeros que nao irei usar
    secondNumber.classList.add("invisible");
    firstNumber.classList.add("invisible");

    //Alterando a unidade
    if (digits[0] == 1) {
      thirdNumber.classList.remove(...thirdNumber.classList);
      thirdNumber.classList.add("num-1");
    } else if (digits[0] == 2) {
      thirdNumber.classList.remove(...thirdNumber.classList);
      thirdNumber.classList.add("num-2");
    } else if (digits[0] == 3) {
      thirdNumber.classList.remove(...thirdNumber.classList);
      thirdNumber.classList.add("num-3");
    } else if (digits[0] == 4) {
      thirdNumber.classList.remove(...thirdNumber.classList);
      thirdNumber.classList.add("num-4");
    } else if (digits[0] == 5) {
      thirdNumber.classList.remove(...thirdNumber.classList);
      thirdNumber.classList.add("num-5");
    } else if (digits[0] == 6) {
      thirdNumber.classList.remove(...thirdNumber.classList);
      thirdNumber.classList.add("num-6");
    } else if (digits[0] == 7) {
      thirdNumber.classList.remove(...thirdNumber.classList);
      thirdNumber.classList.add("num-7");
    } else if (digits[0] == 8) {
      thirdNumber.classList.remove(...thirdNumber.classList);
      thirdNumber.classList.add("num-8");
    } else if (digits[0] == 9) {
      thirdNumber.classList.remove(...thirdNumber.classList);
      thirdNumber.classList.add("num-9");
    } else if (digits[0] == 0) {
      thirdNumber.classList.remove(...thirdNumber.classList);
      thirdNumber.classList.add("num-0");
    }
  } else if (digits.length == 2) {
    firstNumber.classList.add("invisible");
    //Alterando o primeiro numero da dezena
    if (digits[0] == 1) {
      secondNumber.classList.remove(...secondNumber.classList);
      secondNumber.classList.add("num-1");
    } else if (digits[0] == 2) {
      secondNumber.classList.remove(...secondNumber.classList);
      secondNumber.classList.add("num-2");
    } else if (digits[0] == 3) {
      secondNumber.classList.remove(...secondNumber.classList);
      secondNumber.classList.add("num-3");
    } else if (digits[0] == 4) {
      secondNumber.classList.remove(...secondNumber.classList);
      secondNumber.classList.add("num-4");
    } else if (digits[0] == 5) {
      secondNumber.classList.remove(...secondNumber.classList);
      secondNumber.classList.add("num-5");
    } else if (digits[0] == 6) {
      secondNumber.classList.remove(...secondNumber.classList);
      secondNumber.classList.add("num-6");
    } else if (digits[0] == 7) {
      secondNumber.classList.remove(...secondNumber.classList);
      secondNumber.classList.add("num-7");
    } else if (digits[0] == 8) {
      secondNumber.classList.remove(...secondNumber.classList);
      secondNumber.classList.add("num-8");
    } else if (digits[0] == 9) {
      secondNumber.classList.remove(...secondNumber.classList);
      secondNumber.classList.add("num-9");
    } else if (digits[0] == 0) {
      secondNumber.classList.remove(...secondNumber.classList);
      secondNumber.classList.add("num-0");
    }
    //Alterando o segundo numero da dezena
    if (digits[1] == 1) {
      thirdNumber.classList.remove(...thirdNumber.classList);
      thirdNumber.classList.add("num-1");
    } else if (digits[1] == 2) {
      thirdNumber.classList.remove(...thirdNumber.classList);
      thirdNumber.classList.add("num-2");
    } else if (digits[1] == 3) {
      thirdNumber.classList.remove(...thirdNumber.classList);
      thirdNumber.classList.add("num-3");
    } else if (digits[1] == 4) {
      thirdNumber.classList.remove(...thirdNumber.classList);
      thirdNumber.classList.add("num-4");
    } else if (digits[1] == 5) {
      thirdNumber.classList.remove(...thirdNumber.classList);
      thirdNumber.classList.add("num-5");
    } else if (digits[1] == 6) {
      thirdNumber.classList.remove(...thirdNumber.classList);
      thirdNumber.classList.add("num-6");
    } else if (digits[1] == 7) {
      thirdNumber.classList.remove(...thirdNumber.classList);
      thirdNumber.classList.add("num-7");
    } else if (digits[1] == 8) {
      thirdNumber.classList.remove(...thirdNumber.classList);
      thirdNumber.classList.add("num-8");
    } else if (digits[1] == 9) {
      thirdNumber.classList.remove(...thirdNumber.classList);
      thirdNumber.classList.add("num-9");
    } else if (digits[1] == 0) {
      thirdNumber.classList.remove(...thirdNumber.classList);
      thirdNumber.classList.add("num-0");
    }
  } else if (digits.length == 3) {
    //alterando o primeiro numero da centena
    if (digits[0] == 1) {
      firstNumber.classList.remove(...firstNumber.classList);
      firstNumber.classList.add("num-1");
    } else if (digits[0] == 2) {
      firstNumber.classList.remove(...firstNumber.classList);
      firstNumber.classList.add("num-2");
    } else if (digits[0] == 3) {
      firstNumber.classList.remove(...firstNumber.classList);
      firstNumber.classList.add("num-3");
    }
    //alterando o segundo numero da centena
    if (digits[1] == 1) {
      secondNumber.classList.remove(...secondNumber.classList);
      secondNumber.classList.add("num-1");
    } else if (digits[1] == 2) {
      secondNumber.classList.remove(...secondNumber.classList);
      secondNumber.classList.add("num-2");
    } else if (digits[1] == 3) {
      secondNumber.classList.remove(...secondNumber.classList);
      secondNumber.classList.add("num-3");
    } else if (digits[1] == 4) {
      secondNumber.classList.remove(...secondNumber.classList);
      secondNumber.classList.add("num-4");
    } else if (digits[1] == 5) {
      secondNumber.classList.remove(...secondNumber.classList);
      secondNumber.classList.add("num-5");
    } else if (digits[1] == 6) {
      secondNumber.classList.remove(...secondNumber.classList);
      secondNumber.classList.add("num-6");
    } else if (digits[1] == 7) {
      secondNumber.classList.remove(...secondNumber.classList);
      secondNumber.classList.add("num-7");
    } else if (digits[1] == 8) {
      secondNumber.classList.remove(...secondNumber.classList);
      secondNumber.classList.add("num-8");
    } else if (digits[1] == 9) {
      secondNumber.classList.remove(...secondNumber.classList);
      secondNumber.classList.add("num-9");
    } else if (digits[1] == 0) {
      secondNumber.classList.remove(...secondNumber.classList);
      secondNumber.classList.add("num-0");
    }
    //Alterando o Terceiro numero da dezena
    if (digits[2] == 1) {
      thirdNumber.classList.remove(...thirdNumber.classList);
      thirdNumber.classList.add("num-1");
    } else if (digits[2] == 2) {
      thirdNumber.classList.remove(...thirdNumber.classList);
      thirdNumber.classList.add("num-2");
    } else if (digits[2] == 3) {
      thirdNumber.classList.remove(...thirdNumber.classList);
      thirdNumber.classList.add("num-3");
    } else if (digits[2] == 4) {
      thirdNumber.classList.remove(...thirdNumber.classList);
      thirdNumber.classList.add("num-4");
    } else if (digits[2] == 5) {
      thirdNumber.classList.remove(...thirdNumber.classList);
      thirdNumber.classList.add("num-5");
    } else if (digits[2] == 6) {
      thirdNumber.classList.remove(...thirdNumber.classList);
      thirdNumber.classList.add("num-6");
    } else if (digits[2] == 7) {
      thirdNumber.classList.remove(...thirdNumber.classList);
      thirdNumber.classList.add("num-7");
    } else if (digits[2] == 8) {
      thirdNumber.classList.remove(...thirdNumber.classList);
      thirdNumber.classList.add("num-8");
    } else if (digits[2] == 9) {
      thirdNumber.classList.remove(...thirdNumber.classList);
      thirdNumber.classList.add("num-9");
    } else if (digits[2] == 0) {
      thirdNumber.classList.remove(...thirdNumber.classList);
      thirdNumber.classList.add("num-0");
    }
  }
}
