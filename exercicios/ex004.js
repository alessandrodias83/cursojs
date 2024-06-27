const numero = Number(prompt('Digite um número: '));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;

texto.innerHTML = '';
texto.innerHTML += `<p>Raiz quadrada: ${numero ** 0.5}</p>`;
texto.innerHTML += `<p>É NaN: ${Numbe.isNaN(numero)}</p>`;
texto.innerHTML += `<p>${numero} é inteiro: ${Numbe.isInteger(numero)}</p>`;
texto.innerHTML += `Arredondando para baixo: ${Math.floor(numero)}</p>`;
texto.innerHTML += `Arredondando para cima: ${Math.ceil(numero)}</p>`;
texto.innerHTML += `Com duas casas decimais: ${numero.toFixed(2)}</p>`;

