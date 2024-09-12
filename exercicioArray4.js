/*
Crie um Programa para armazenar a velocidade de 6 voltas de um piloto em uma pista de kart .
Depois de ter armazenado as velocidades, seu programa deve apresentar as velocidades na ordem contraria
(a ultima velocidade lida será a primeira a ser exibida, e assim sucessivamente).
*/

// Criar um array vazio para armazenar as velocidades
let velocidades = [];

// Ler as velocidades do usuário e armazená-las no array
for (let contador = 0; contador < 6; contador++) {
  let velocidade = parseFloat(prompt("Digite a velocidade da volta " + (contador+1) + ":"));
  velocidades.push(velocidade);
}

// Inverter a ordem dos elementos do array
velocidades.reverse();

// Exibir as velocidades na ordem invertida
console.log("Velocidades na ordem inversa: <br>");
for (let contador = 0; contador < velocidades.length; contador++) {
  console.log("Volta " + (contador+1) + ": " + velocidades[contador] + " km/h");
  document.write("Volta " + (contador+1) + ": " + velocidades[contador] + " km/h", "<br>");
}



