/*const h1 = document.querySelector('.container h1');
const data = new Date();
h1.innerHTML = data.toString();

function getDiaSemanaTexto(diaSemana) {
    let diaSemanaTexto;

    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'Segunda-feira';
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Terça-feira';
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta-feira';
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quinta-feira';
           return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sexta-feira';
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Sábado';
            return diaSemanaTexto;
    }
}

function getNomeMes(numeroMes) {
    let nomeMes;

    switch (numeroMes) {
        case 0:
            nomeMes = 'janeiro';
            return nomeMes;
    }

    switch (numeroMes) {
        case 1:
            nomeMes = 'fevereiro';
            return nomeMes;
    }

    switch (numeroMes) {
        case 2:
            nomeMes = 'março';
            return nomeMes;
    }

    switch (numeroMes) {
        case 3:
            nomeMes = 'abril';
            return nomeMes;
    }

    switch (numeroMes) {
        case 4:
            nomeMes = 'maio';
            return nomeMes;
    }

    switch (numeroMes) {
        case 5:
            nomeMes = 'junho';
            return nomeMes;
    }

    switch (numeroMes) {
        case 6:
            nomeMes = 'julho';
            return nomeMes;
    }

    switch (numeroMes) {
        case 7:
            nomeMes = 'agosto';
            return nomeMes;
    }

    switch (numeroMes) {
        case 8:
            nomeMes = 'setembro';
            return nomeMes;
    }

    switch (numeroMes) {
        case 9:
            nomeMes = 'outubro';
            return nomeMes;
    }

    switch (numeroMes) {
        case 10:
            nomeMes = 'novembro';
            return nomeMes;
    }

    switch (numeroMes) {
        case 11:
            nomeMes = 'dezembro';
            return nomeMes;
    }
}

function zeroAEsquerda(data) {
    return num >= 10 ? num : `0${num}`;
}

function criaData(data) {
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();

    const nomeDia = getDiaSemanaTexto(diaSemana);
    const nomeMes = getNomeMes(numeroMes);

    return (
        `${nomeDia}, ${data.getDate()} de ${nomeMes}` + ` de ${data.getFullYear()} ${zeroAEsquerda(data.getHours())}: ${zeroAEsquerda(data.getMinutes())}`
    );
}


h1.innerHTML = criaData(data);*/

const h1 = document.querySelector('.container h1');
const data = new Date();
//const opcoes = {
    //dateStyle: 'full',
//};
h1.innerHTML = data.toLocaleDateString('pt-BR', { dateStyle: 'full'});