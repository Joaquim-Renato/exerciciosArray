# Exercícios de JavaScript

Este repositório contém alguns exercícios em JavaScript que lidam com arrays, manipulação de dados e interatividade com o usuário via prompts e `document.write`.

## Índice
- [Exercício 1: Manipulação de Arrays de Linguagens de Programação]
- [Exercício 2: Soma de Números Inseridos pelo Usuário]
- [Exercício 3: Exibir Números em Ordem Inversa]
- [Exercicío 4 : Armazenamento de velocidades em um pista de Kart]
- [Exercício 5: Cálculo da Média de Notas do Alune] 
- [Exercício 6: Multiplicação de Dois Vetores]
-[Exercício 5: Cadastro e Exibição de Alunos]
---
## Funções e Métodos Utilizados

- **`push()`**: Adiciona um novo elemento ao final do array.
- **`splice()`**: Remove elementos a partir de um índice específico e pode adicionar novos elementos no mesmo lugar.
- **`indexOf()`**: Retorna o índice de um elemento específico dentro do array.
- **`console.table()`**: Exibe os elementos do array em uma tabela no console do navegador.
- **`document.write()`**: Exibe as informações diretamente na página HTML.

---

## Exercício 1: Manipulação de Arrays de Linguagens de Programação

Neste exercício, vamos trabalhar com um array que contém nomes de linguagens de programação. O objetivo é realizar várias operações de manipulação no array, como adicionar, remover e modificar elementos, além de exibir o índice de uma linguagem específica.

## Descrição

O exercício envolve as seguintes etapas:
1. Criar um array com 3 linguagens de programação.
2. Adicionar uma nova linguagem à quarta posição do array.
3. Mostrar o tamanho do array.
4. Remover um elemento a partir de um índice específico e adicionar 3 novas linguagens.
5. Alterar a informação presente na terceira posição.
6. Mostrar o índice de uma das linguagens presentes no array.

---

### Etapas:

1. Criar um array inicial com 3 linguagens de programação.
2. Adicionar a linguagem "Python" ao array.
3. Mostrar o tamanho atual do array.
4. Remover a linguagem "CSS" (na posição 2) e adicionar "C#", "C++" e "Java" em seu lugar.
5. Exibir o índice da linguagem "JavaScript".
6. Exibir o array final após todas as modificações.

----
# Exercício 2 : Soma de Números Inseridos pelo Usuário

Este exercício tem como objetivo solicitar ao usuário a inserção de 5 números, armazená-los em um array e, em seguida, calcular e apresentar a somatória desses números.

## Descrição

O exercício solicita que o usuário insira 5 números através de prompts. Esses números são armazenados em um array, e posteriormente é feita a soma de todos eles. O resultado da soma é então exibido no console.

Existem duas soluções implementadas:
1. **Solução Simples**: Coleta os números individualmente e soma diretamente.
2. **Solução com Loop**: Usa um laço de repetição para coletar os números e realizar a soma de forma mais otimizada.

-------
### Etapas:

1. Exibe uma mensagem inicial de boas-vindas.
2. Solicita que o usuário insira 5 números.
3. Armazena os números em um array.
4. Calcula a somatória dos números.
5. Exibe o array e o resultado da soma no console.
   
-------
# Exercicío 3 : Exibir Números em Ordem Inversa


Neste programa em JavaScript, o usuário é solicitado a inserir 10 números inteiros. O objetivo é armazenar esses números em um array e exibi-los na tela em ordem inversa à sua entrada.

## Descrição

O programa:
1. Solicita ao usuário que insira 10 números inteiros.
2. Armazena os números fornecidos em um array.
3. Exibe os números na ordem inversa de inserção, ou seja, do último para o primeiro.

---

# Exercicío 4 : Programa de armazenamento de velocidades em um pista de Kart

## Descrição:

Este programa em JavaScript tem como objetivo armazenar a velocidade de 6 voltas de um piloto em uma pista de kart. 
As velocidades são inseridas pelo usuário e o programa exibe as velocidades em ordem inversa à da entrada.

**Funcionalidades:**

* **Entrada de dados:** O usuário insere a velocidade de cada volta.
* **Armazenamento:** As velocidades são armazenadas em um array.
* **Inversão:** A ordem dos elementos do array é invertida.
* **Saída:** As velocidades são exibidas na ordem inversa, simulando a ordem cronológica da corrida.

---
## Exercício 5: Cálculo da Média de Notas do Alune

Neste exercício, o objetivo é calcular a média de 5 notas fornecidas pelo usuário e exibi-la junto com o nome do alune.

### Descrição

O programa:
1. Solicita ao usuário que insira o nome do alune.
2. Solicita 5 notas que o alune recebeu.
3. Calcula a média dessas 5 notas.
4. Exibe o nome do alune e a média das suas notas diretamente na página HTML.

---

# Exercício 6 : Multiplicação de Dois Vetores

Este exercício em JavaScript tem como objetivo realizar a multiplicação de dois vetores, A e B, cada um contendo 5 elementos inseridos pelo usuário. O programa coleta os valores de cada vetor, multiplica os elementos correspondentes entre si, e exibe o resultado.

## Descrição

O programa segue os seguintes passos:

1. Solicita ao usuário que insira 5 elementos para o **Vetor A**.
2. Solicita ao usuário que insira 5 elementos para o **Vetor B**.
3. Multiplica os elementos correspondentes dos vetores A e B.
4. Exibe o resultado da multiplicação dos vetores.

## Funcionalidades

- Coleta 5 números inseridos pelo usuário para o **Vetor A**.
- Coleta 5 números inseridos pelo usuário para o **Vetor B**.
- Realiza a multiplicação dos elementos correspondentes de ambos os vetores.
- Exibe os vetores e o resultado final da multiplicação no console e na página HTML.

---
## Exercício 5: Cadastro e Exibição de Alunos

### Descrição
Este código JavaScript cria um simples sistema de cadastro de alunos, permitindo que o usuário insira o nome e a nota de vários alunos. Após a coleta dos dados, o programa exibe um relatório com o nome e a nota de cada aluno.

### Funcionalidades
* **Entrada de dados:** Permite ao usuário inserir a quantidade de alunos e os dados de cada um.
* **Armazenamento:** Utiliza arrays para armazenar os nomes e notas de forma organizada.
* **Saída:** Exibe os resultados em uma página HTML, formatando os dados de forma clara.
