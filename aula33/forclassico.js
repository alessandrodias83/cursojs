
// i - index

const frutas = ["Maçã", "Pêra", "Uva"];
//for (let i = 0; i <= 10; i++) { // são tres estruturas basicas: variavel (i = 0), quando vai parar (<=5) e incremento (i++ / posso incrementar do jeito que quiser: i += 10, pula de 10 em 10, também pode ser decrementado, ou seja reduzindo um i -= 1)
    //console.log(`Linha ${i}`);
//const par = i % 2 === 0 ? 'par' : 'ímpar';
//console.log(i, par);

for (let i= 0; i < frutas.length; i++) {
    console.log(`Índice ${i}`, frutas[i]);


}