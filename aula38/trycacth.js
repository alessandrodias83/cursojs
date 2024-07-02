/*try {
    // é executada quando não há erros
    console.log('Abrir arquivo');
    console.log('Manipulei o arquivo e gerou erro');
    console.log('Fechei o arquivo');
} catch (e) {
    // é executado quando há erros
    console.log('Tratando o erro');
} finally {
    // sempre
    console.log('Eu sempre sou executado');
}*/

function retornaHora(data) {
    if (!(data instanceof Date)) {
        throw new TypeError('Esperamos instância de Date.');
    }
    if (!data) {
        data = new Date();
    }
    return data.toLocaleTimeString('pt-br', {
        hour12: false
    });
}

try {
const data = new Date('01-01-1970 12:58:12');
const hora = retornaHora();
console.log(hora); 
} catch(e) {
    //tratar erro
    console.log('Tenha um bom dia');
}

