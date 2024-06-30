
const nomes = ['Alessandro', 'Dias'];

for (let i = 0; i < nomes.length; i++) { // for classico
    console.log(nomes[i]);
}

for (let i in nomes) { // for in
    console.log(nomes[i]);
}

for (let valor of nomes) { // for of
    console.log(valor);
}

// for classico - geralmente com iteráveis (array ou string)
// for in - retorna o índice ou chave (string, array ou objetos)
// for of - retorna o valor em si (iteráveis, arrays ou strings)