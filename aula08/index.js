const nome = 'Alessandro';
const sobrenome = 'Dias';
const idade = 41;
const peso = 101;
const alturaEmM = 1.75;
let indiceMassaCorporal;
let anoNascimento;

indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
anoNascimento = 2024 - idade;

console.log(nome, sobrenome, 'nasceu em', anoNascimento, 'tem', idade, 'anos, pesa', peso, 'kg, tem', alturaEmM,'metros de altura e seu imc é de', indiceMassaCorporal)

//template strings
console.log(`${nome}, ${sobrenome}, nasceu em, ${anoNascimento}, tem, ${idade}, anos, pesa, ${peso}, kg, tem, ${alturaEmM},metros de altura e seu imc é de, ${indiceMassaCorporal}`)
