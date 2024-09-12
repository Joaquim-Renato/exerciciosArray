/* Exercicio 5:
Crie um programa que vai receber 5 notas do aluno, determiar e exibir a média:
*/
let alune = prompt('Digite o nome do alune aqui: ');
let nota1 = parseFloat(prompt('Digite a primeira nota :'));
let nota2 =  parseFloat(prompt('Digite a segunda nota :'));
let nota3 =  parseFloat(prompt('Digite a terceira nota :'));
let nota4 =  parseFloat(prompt('Digite a quarta nota :'));
let nota5 =  parseFloat(prompt('Digite a quinta nota :'));


let notas = [nota1 + nota2 + nota3 + nota4 + nota5];
let media = notas / 5;

document.write(`A média do alune : ${alune} <br>  ${media} `)