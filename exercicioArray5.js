/* Exercicio 5:
Crie um programa que vai receber 5 notas do aluno, determiar e exibir a média:
*/
// Obter o nome do alune
let alune = prompt('Digite o nome do alune aqui: ');

// Obter as notas do aluno e convertê-las para números de ponto flutuante
let nota1 = parseFloat(prompt('Digite a primeira nota :'));
let nota2 =  parseFloat(prompt('Digite a segunda nota :'));
let nota3 =  parseFloat(prompt('Digite a terceira nota :'));
let nota4 =  parseFloat(prompt('Digite a quarta nota :'));
let nota5 =  parseFloat(prompt('Digite a quinta nota :'));

// Criar um array para armazenar as notas
let notas = [nota1 + nota2 + nota3 + nota4 + nota5];

// Calcular a média aritmética das notas
let media = notas / 5;

// Exibir o resultado na página
document.write(`A média do alune : ${alune} <br>  ${media} `)