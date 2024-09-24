const readline = require('readline');

console.log("Verificador de Números na Sequência de Fibonacci");

const numero = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcFibonacci(num) {
    let a = 0;
    let b = 1;

    while (b < num) { // enquanto b (inicialmente 1) for menor que a entrada do usuario (num)
        let temp = b; // ele guarda temporariamente o valor atual de b em temp,
        b = a + b;    // atribui um novo valor a b, que é o próximo número da sequência de Fibonacci (a soma dos dois números anteriores) 
        a = temp;     // e atribui a variavel "a" o valor que estava em b antes da soma.
    }

    return b === num; // se b for igual a entrada do usuario (ou seja, se o valor inserido pertencer a sequência de Fibonacci), retorna true, senão, retorna false.
}

numero.question("Digite um número: ", (valorUsuario) => {

    const num = parseInt(valorUsuario);

    if (isNaN(num)) {
        console.log("Por favor, digite um número válido.");
    } else {
        if (calcFibonacci(num)) {
            console.log(`O número ${num} pertence à sequência de Fibonacci.`);
        } else {
            console.log(`O número ${num} NÃO pertence à sequência de Fibonacci.`);
        }
    }

    numero.close();
});
