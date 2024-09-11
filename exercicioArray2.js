// Exercicio 2: Crie um Array que irá receber 5 numeros de usuario, apresente a somatoria desse Array;

/*
var textoIntro = "Olá, vamos iniciar um programinha para somar 5 numeros de sua escolha :)!!!"
alert(textoIntro)


let n1 = parseInt(prompt('Digite o primeiro numero que deseja somar :')); 
let n2 = parseInt(prompt('Digite o segundo numero que deseja somar :')); 
let n3 = parseInt(prompt('Digite o terceiro numero que deseja somar :')); 
let n4 = parseInt(prompt('Digite o quarto numero que deseja somar :')); 
let n5 = parseInt(prompt('Digite o quinto numero que deseja somar :')); 
numeros = [n1, n2, n3, n4, n5];
console.table (numeros);

let somatoria = [n1 + n2 + n3 + n4 + n5];
console.log( 'A somatória dos numeros é : ' + somatoria);
*/

// _____________________________________________________//_____________________
// outra resolução para o mesmo problema 


alert("Olá, vamos iniciar um programinha para somar 5 números de sua escolha :)!!!");

// Criar um array vazio para armazenar os números
let numeros = [];

// Variável para armazenar a soma
let soma = 0;

// Coletar 5 números do usuário com um loop
for (let i = 0; i < 5; i++) {
    let numero = parseInt(prompt(`Digite o número ${i + 1} que deseja somar:`));
    numeros.push(numero);  // Adicionar o número ao array
    soma += numero;        // Somar o número à variável de soma
}

// Mostrar o array de números inseridos
console.table(numeros);

// Mostrar a somatória dos números
console.log("A somatória dos números é: " + soma);
