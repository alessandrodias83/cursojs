const veradeira = true;

//let tem escopo de bloco {...bloco}
// var só tem escopo de função

let nome = 'Alessandro'; // criando
var nome2 = 'Alessandro';

if (veradeira) {
    let nome = 'Dias'; // criando
    console.log(nome, nome2);

    if (veradeira) {
        console.log('ok')
    }
}