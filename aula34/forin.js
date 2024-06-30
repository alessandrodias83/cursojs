// For in -> lê os indices ou chaves do objeto
//const frutas = ['Pera', 'Maçã', 'Uva'];

//for (let i in frutas) {
    //console.log(frutas[i]);
//}

const pessoa = {
    nome: 'Alessandro',
    sobrenome:'Dias',
    idade: 30
};

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}