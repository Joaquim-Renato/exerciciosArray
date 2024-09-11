/* Exercicio 1:
criar um array com nomes de linguagens de programação - 3 posições adicionar a 4 posição mostrar o tamanho do array 
-remover 1 elemento a partir do indice 2 e adicione 3 linguagens 
- altere a informação que esta na 3 posição 
- mostrar o indice de uma das linguagens 
tudo isso em java script
*/

let linguagensProgramacao = ['html', 'JavaScript', 'Css'];
document.write(linguagensProgramacao, '<br>');
console.table(linguagensProgramacao);

linguagensProgramacao.push('Python'); //  Adicionar uma 4ª linguagem
document.write('Array c/ Adição da 4ª Linguagem : ' + linguagensProgramacao, '<br>')


console.log('Tamanho do array:' + linguagensProgramacao.length);
document.write('Tamanho do array:' + linguagensProgramacao.length, '<br>'); // imprime na tela o tamanho do array

// Remover 1 elemento a partir do índice 2 e adicionar 3 novas linguagens
linguagensProgramacao.splice(2, 1, "C#", "C++", "Java"); // Remove "CSS" e adiciona "C#", "C++", "Java"

document.write('' + linguagensProgramacao.length, '<br>'); 

console.table(linguagensProgramacao);


let indiceJavaScript = linguagensProgramacao.indexOf("JavaScript"); //  Mostrar o índice de uma das linguagens (ex "JavaScript")
console.log ("Indice de JavaScript: " + indiceJavaScript); // apresenta no console devTools
document.write("Indice de JavaScript: " + indiceJavaScript, '<br>'); 

document.write('Array final:', linguagensProgramacao);