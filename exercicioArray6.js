/* Exercicio 6:
crie um programa com dois vetores A e B, ambos são receber 5 elementos
determine a multiplicação desses vetores 
*/

let  vetorA = [];
let vetorB = [];
let vetorMultiplicado = []; 


// Receber 5 elementos para o vetor A
for (let i = 0; i < 5; i++) {
    vetorA[i] = parseFloat(prompt(`Digite o elemento ${i + 1} do vetor A:`));
}


// Receber 5 elementos para o vetor B
for (let i = 0; i < 5; i++) {
    vetorB[i] = parseFloat(prompt(`Digite o elemento ${i + 1} do vetor B:`));
}

// Multiplicar os elementos correspondentes dos dois vetores
for (let i = 0; i < 5; i++) {
    vetorMultiplicado[i] = vetorA[i] * vetorB[i];
}

// Exibir os vetores e o resultado da multiplicação
console.log("Vetor A: " + vetorA);
console.log("Vetor B: " + vetorB);
console.log("Resultado da multiplicação dos vetores A e B: " + vetorMultiplicado);

document.write("Vetor A: " + vetorA + "<br>");
document.write("Vetor B: " + vetorB + "<br>");
document.write("Resultado da multiplicação dos vetores A e B: " + vetorMultiplicado + "<br>");