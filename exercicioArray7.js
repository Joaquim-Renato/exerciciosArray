/* Exercicio 5:
Crie um programa ultilizando dois vetores, no primeiro armazene 5 nomes e no segundo armazene 5 notas, 
ao final exiba o nome do aluno e sua nota seguinte forma :
Aluno: João nota : 9
Aluno: Maria nota : 10
*/
// Pedindo ao usuário para informar a quantidade de alunos
const numeroDeAlunes = parseInt(prompt("Digite a quantidade de alunes:"));

// Criando arrays para armazenar nomes e notas
const nomes = [];
const notas = [];

// Lendo os dados de cada alune
for (let contador = 0; contador < numeroDeAlunes; contador++){
    nomes[contador] = prompt(`Digite o nome dy alune ${contador + 1}:`);
    notas[contador] = parseFloat(prompt(`Digite a nota dy alune ${contador + 1}:`));

}

// Exibindo os resultados na tela
for (let contador = 0; contador < numeroDeAlunes; contador++) {
    document.write(`Alune: ${nomes[contador]} nota: ${notas[contador]}<br>`)


}