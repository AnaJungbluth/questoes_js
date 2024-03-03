const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function inverterString(str) {
  let inverteString = '';
  for (let i = str.length - 1; i >= 0; i--) {
    inverteString += str[i];
  }
  return inverteString;
}

rl.question('Digite uma string para inverter: ', (str) => {
  const stringInvertida = inverterString(str);
  console.log("String original:", str);
  console.log("String invertida:", stringInvertida);
  rl.close();
});
