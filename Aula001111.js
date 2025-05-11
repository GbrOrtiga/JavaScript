const prompt = require('prompt-sync')();

const dia = 15;
const mes = 7;
const ano = 2000;

let tentativas = 4;

while (tentativas > 0) {
  console.log(`Tentativa ${5 - tentativas}:`);
  let diaInput = parseInt(prompt("Digite o dia: "));
  let mesInput = parseInt(prompt("Digite o mês: "));
  let anoInput = parseInt(prompt("Digite o ano: "));

  if (diaInput === dia && mesInput === mes && anoInput === ano) {
    console.log(`Parabéns! Você acertou: ${dia}/${mes}/${ano}`);
    break;
  } else {
    console.log("Data incorreta.");
  }

  tentativas--;
}

if (tentativas === 0) {
  console.log("Você errou todas as tentativas!");
}
