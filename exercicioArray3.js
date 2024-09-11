/* Exercicio3 :
 Programa que recebe uma sequência de 10 números inteiros e imprime na tela em ordem inversa */


// Criação de um array vazio para armazenar os números
let numeros = [];

// Loop para coletar 10 números inteiros
for (let i = 0; i < 10; i++) {
    let numero = parseInt(prompt(`Digite o número ${i + 1}:`));
    numeros.push(numero); // Adiciona o número ao array
}

// Imprimir os números na ordem inversa
document.write("Números em ordem inversa: <br>");
for (let i = numeros.length - 1; i >= 0; i--) {
    document.write(numeros[i] + "<br>");
}
