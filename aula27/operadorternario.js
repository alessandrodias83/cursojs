// (condição) ? 'Valor para verdadeiro' : 'valor para falso'
const pontuacaoUsuario = 999;

// esse é ternário
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário Vip' : 'Usuário Normal'

const corUsuario = 'Pink';
const corPadrao = corUsuario || 'Preto';

console.log(nivelUsuario, corPadrao)

// esse código seria normal
/*if (pontuacaoUsuario >= 1000) {
    console.log('Usuário VIP');
} else {
    console.log('Usuário Normal')
}*/
