let nomes = ['Ana', 'João', 'Clara', 'Raimundo', 'César'];
document.write(nomes, '<br>');

document.write(nomes[1], '<br>' ); // imprimir o valor da posição 1 
document.write(nomes.length, '<br>');  // tamanho do array
document.write(nomes[5], '<br>');

nomes[1] =  'João Carlos' // reatribui valores
document.write(nomes, '<br>')

nomes.push('Matheus') //adiciona elemento no final do array
document.write(nomes, '<br>')
 
nomes.unshift('Renato');  //adiciona elemento no inicio do array
document.write(nomes,  '<br>');
 
nomes.pop()//remove o último elemento do array
document.write(nomes, '<br>');
 


let boletim = [[8,7,9,3], [4,5,8,6]];
document.write(boletim, '<br>');
console.table(boletim);


document.write(boletim[1][2], '<br>');
