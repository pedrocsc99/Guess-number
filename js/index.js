/*


* A logica do programa se baseia em adquirir o numero da API, guardar ele em uma constante e comparar ele com o numero fornecido pelo usuário, caso seja maior ele ira checar se o numero é maior,menor ou igual, Mostrando uma mensagem para cada respectivamente.

* O Led é formado por 3 svgs, onde mapeei cada segmento e atribui uma classe para eles, para assim conseguir alterar os números alterando as classes, assim que o usuário digita um numero removo as classes anteriores do svg e adiciono a classe respectiva do numero.





*/
import { changeNumbers } from "./changeNumber.js";
const firstNumber = document.getElementById("firstNumber");
const secondNumber = document.getElementById("secondNumber");
const thirdNumber = document.getElementById("thirdNumber");
const buttonSubmit = document.getElementById("submitButton");
const guessText = document.getElementById("guessText");
const numberUser = document.getElementById("inputGuess");
const newMatchButton = document.getElementById("newMatch");

let number = 0;
let data = 0;
const env =
  "https://us-central1-ss-devops.cloudfunctions.net/rand?min=1&max=300";

const fetchNumber = async () => {
  const apiCall = await fetch(env);

  if (apiCall.status === 200) {
    const data = await apiCall.json();
    return data;
  } else {
    console.error("Bad Gateway");
    newMatchButton.classList.remove("invisible");
    guessText.classList.remove("invisible");
    guessText.innerHTML = "ERRO";
    thirdNumber.classList.remove(...thirdNumber.classList);
    thirdNumber.classList.add("num-2");
    secondNumber.classList.remove(...secondNumber.classList);
    secondNumber.classList.add("num-0");
    firstNumber.classList.remove(...firstNumber.classList);
    firstNumber.classList.add("num-5");
    firstNumber.classList.add("error");
    secondNumber.classList.add("error");
    thirdNumber.classList.add("error");
    numberUser.disabled = true;
    numberUser.classList.add("disabled");
    buttonSubmit.classList.add("disabledButton");
    buttonSubmit.disabled = true;
    numberUser.value = "";
    return;
  }
};
const getNumber = {
  value: async () => {
    const request = await fetchNumber();
    return request;
  },
};
const saveNumber = async () => {
  data = await getNumber.value();
  console.log(data);
  number = data.value;
};

saveNumber();

const checkNumber = async () => {
  const numbersImputed = numberUser.value;
  if (numbersImputed > 300 || numbersImputed == 0 || numbersImputed < 1) {
    alert("Por favor digite um numero entre 1 e 300");
    return;
  }
  const numberGuess = Number(numberUser.value);
  // numberGuess.innerHTML = "";
  guessText.innerHTML =
    number === numberGuess
      ? "Você Acertou!!!!"
      : numberGuess > number
      ? "É Menor"
      : "É Maior";
  guessText.classList.remove("invisible");
  if (number === numberGuess) {
    firstNumber.classList.add("correct");
    guessText.classList.add("correct");
    secondNumber.classList.add("correct");
    thirdNumber.classList.add("correct");
    newMatchButton.classList.remove("invisible");
    numberUser.disabled = true;
    numberUser.classList.add("disabled");
    buttonSubmit.classList.add("disabledButton");
    buttonSubmit.disabled = true;
    numberUser.value = "";
  }
  2;
};
buttonSubmit.addEventListener("click", changeNumbers);
buttonSubmit.addEventListener("click", checkNumber);
newMatchButton.addEventListener("click", () => {
  number = [];
  thirdNumber.classList.remove(...thirdNumber.classList);
  thirdNumber.classList.add("num-0");
  secondNumber.classList.remove(...secondNumber.classList);
  secondNumber.classList.add("invisible");
  firstNumber.classList.remove(...thirdNumber.classList);
  firstNumber.classList.add("invisible");
  guessText.classList.add("invisible");
  guessText.classList.remove("correct");
  newMatchButton.classList.add("invisible");
  numberUser.disabled = false;
  numberUser.classList.remove("disabled");
  buttonSubmit.classList.remove("disabledButton");
  buttonSubmit.disabled = false;
  saveNumber();
});
