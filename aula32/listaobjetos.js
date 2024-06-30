const pessoa = {
    nome: 'Alessandro',
    sobrenome:'Dias',
    idade: 40,
    endereco: {
    rua: 'Rua B',
    numero:320}
};
//atribuição via desestruturação
const { nome, sobrenome, idade } = pessoa;
console.log(nome, sobrenome, idade)