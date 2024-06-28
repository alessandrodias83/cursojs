/*function criaPessoa (nome, sobrenome, idade) { // metodo mais eficiente para criar um objeto
    return { nome, sobrenome, idade};
}

const pessoa1 = criaPessoa('Alessandro', 'Dias', 41);
const pessoa2 = criaPessoa('Ligia', 'Lelis', 40);
const pessoa3 = criaPessoa('Maria', 'José', 35);

console.log(pessoa1.nome, pessoa3.sobrenome, pessoa2.idade);*/

const pessoa1 = {
    nome: 'Alessandro',
    sobrenome: 'Dias',
    idade: 41,

    fala () {
        console.log(`A minha idade atual é ${this.idade}.`)
    },
    incrementaIdade() {
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();