const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function Fibonacci(num) {
    let x = 0, y = 1;
    while (x < num) {
        let aux = y;
        y = x + y;
        x = aux;
    }
    return x === num;
}

function main() {
    rl.question("Digite um número: ", function(numero) {
        numero = parseInt(numero);
        if (Fibonacci(numero)) {
            console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
        } else {
            console.log(`O número ${numero} não pertence à sequência de Fibonacci.`);
        }
        rl.close();
    });
}

main();
