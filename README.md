# Exercícios de JavaScript

Este repositório contém dois exercícios em JavaScript que lidam com arrays, manipulação de dados e interatividade com o usuário via prompts e `document.write`.

## Índice
- [Exercício 1: Manipulação de Arrays de Linguagens de Programação](#https://github.com/Joaquim-Renato/exerciciosArray/blob/main/exercicioArray.js)
- [Exercício 2: Soma de Números Inseridos pelo Usuário](#https://github.com/Joaquim-Renato/exerciciosArray/blob/main/exercicioArray2.js)

---

## Exercício 1: Manipulação de Arrays de Linguagens de Programação

Neste exercício, o objetivo é criar um array com linguagens de programação e realizar operações como adicionar, remover, modificar elementos e buscar o índice de uma linguagem específica.

### Requisitos:
1. Criar um array com 3 linguagens de programação.
2. Adicionar uma quarta linguagem.
3. Mostrar o tamanho do array.
4. Remover 1 elemento a partir do índice 2 e adicionar 3 novas linguagens.
5. Alterar a linguagem na 3ª posição.
6. Exibir o índice de uma linguagem específica (ex.: "JavaScript").

### Código:

```javascript
// Criar um array com 3 linguagens de programação
let linguagensProgramacao = ['html', 'JavaScript', 'Css'];
document.write(linguagensProgramacao, '<br>');
console.table(linguagensProgramacao);

// Adicionar uma 4ª linguagem
linguagensProgramacao.push('Python');
document.write('Array c/ Adição da 4ª Linguagem: ' + linguagensProgramacao, '<br>');

// Mostrar o tamanho do array
console.log('Tamanho do array: ' + linguagensProgramacao.length);
document.write('Tamanho do array: ' + linguagensProgramacao.length, '<br>');

// Remover 1 elemento a partir do índice 2 e adicionar 3 novas linguagens
linguagensProgramacao.splice(2, 1, "C#", "C++", "Java");
document.write(linguagensProgramacao.length, '<br>');
console.table(linguagensProgramacao);

// Mostrar o índice de "JavaScript"
let indiceJavaScript = linguagensProgramacao.indexOf("JavaScript");
console.log("Índice de JavaScript: " + indiceJavaScript);
document.write("Índice de JavaScript: " + indiceJavaScript, '<br>');

// Exibir o array final
document.write('Array final: ' + linguagensProgramacao);
