const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcular(num1, num2, operacao) {
  switch (operacao) {
    case '1': return num1 + num2;
    case '2': return num1 - num2;
    case '3': return num1 * num2;
    case '4': return num2 === 0 ? 'Erro: divisão por zero' : num1 / num2;
    default: return 'Operação inválida';
  }
}

function prompt() {
  console.log('\nDigite a operação e dois números separados por espaço:');
  console.log('1 = Somar');
  console.log('2 = Subtrair');
  console.log('3 = Multiplicar');
  console.log('4 = Dividir');
  console.log('Exemplo: 1 10 5');

  readline.question('> ', input => {
    const [operacao, n1, n2] = input.split(' ');
    const num1 = parseFloat(n1.replace(',', '.'));
    const num2 = parseFloat(n2.replace(',', '.'));

    if (!['1','2','3','4'].includes(operacao) || isNaN(num1) || isNaN(num2)) {
      console.log('Entrada inválida. Tente novamente.');
      return prompt();
    }

    const resultado = calcular(num1, num2, operacao);
    console.log(`Resultado: ${resultado}`);

    readline.question('Deseja continuar? (s/n) ', resposta => {
      if (resposta.toLowerCase() === 's') prompt();
      else {
        console.log('Encerrando calculadora. Até mais!');
        readline.close();
      }
    });
  });
}

console.log('Calculadora simples em JavaScript');
prompt();
