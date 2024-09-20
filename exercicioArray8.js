/*
Um sisema de estacionamento:
O processo de parar o carro ocorre quando o cliente deixa o carro na porta do estacionamento para o manobrista realizar a parada. 
Ao estacionar o carro, o manobrista reserva a vaga no sistema informando a placa do veículo. 
Ao chegar para buscar o carro, o cliente informa a placa do veículo ao manobrista que realiza a consulta no sistema. 
O manobrista descobre em qual vaga (indice da matriz) está o carro e torna a vaga livre para outro cliente. Atualmente o estacionamento conta com 18 vagas, 
sendo 9 em cada lado. Monte o sistema com um menu para exibir as vagas do estacionamento, cadastrar um veículo em uma vaga e desocupar uma vaga.
*/

// Inicializa o estacionamento com 18 vagas, representando por um array de arrays
const estacionamento = [
    ['livre', 'livre', 'livre', 'livre', 'livre', 'livre', 'livre', 'livre', 'livre'],
    ['livre', 'livre', 'livre', 'livre', 'livre', 'livre', 'livre', 'livre', 'livre']
  ];
  
  // Função para exibir as vagas do estacionamento
  function exibirVagas() {
    console.log("Estado do estacionamento:");
    for (let i = 0; i < estacionamento.lado1.length; i++) {
      console.log(`Lado 1, Vaga ${i + 1}: ${estacionamento[0][i]}`);
    }
    for (let i = 0; i < estacionamento.lado2.length; i++) {
      console.log(`Lado 2, Vaga ${i + 1}: ${estacionamento[1][i]}`);
    }
  }
  
  // Função para cadastrar um veículo em uma vaga
  function cadastrarVeiculo(placa, lado, vaga) {
    if (estacionamento[lado - 1][vaga - 1] === 'livre') {
      estacionamento[lado - 1][vaga - 1] = placa;
      console.log(`O veículo ${placa} foi estacionado no lado ${lado}, vaga ${vaga}.`);
    } else {
      console.log("A vaga já está ocupada.");
    }
  }
  
  // Função para desocupar uma vaga
  function desocuparVaga(placa) {
    let encontrado = false;
    for (let i = 0; i < estacionamento.length; i++) {
      for (let j = 0; j < estacionamento[i].length; j++) {
        if (estacionamento[i][j] === placa) {
          estacionamento[i][j] = 'livre';
          console.log(`O veículo ${placa} foi retirado do estacionamento.`);
          encontrado = true;
          break;
        }
      }
      if (encontrado) {
        break;
      }
    }
    if (!encontrado) {
      console.log("Veículo não encontrado no estacionamento.");
    }
  }
  
  // Menu de opções
  while (true) {
    console.log("\nEscolha uma opção:");
    console.log("1. Exibir vagas");
    console.log("2. Cadastrar veículo");
    console.log("3. Desocupar vaga");
    console.log("4. Sair");
  
    const opcao = parseInt(prompt("Digite o número da opção:"));
  
    switch (opcao) {
      case 1:
        exibirVagas();
        break;
      case 2:
        const placa = prompt("Digite a placa do veículo:");
        const lado = parseInt(prompt("Digite o lado (1 ou 2):"));
        const vaga = parseInt(prompt("Digite o número da vaga:"));
        cadastrarVeiculo(placa, lado, vaga);
        break;
      case 3:
        const placaSair = prompt("Digite a placa do veículo para sair:");
        desocuparVaga(placaSair);
        break;
      case 4:
        console.log("Saindo do sistema...");
        process.exit();
      default:
        console.log("Opção inválida.");
    }
  }