// Loop for em JavaScript

// Exemplo de loop for que imprime os números de 0 a 10
console.log('Contagem de 0 a 10:\n');
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

// exemplo de loop for que imprime uma contagem regressiva de 10 a 0
console.log('\nContagem regressiva de 10 a 0:\n');
for (let i = 10; i >= 0; i--) {
    console.log(i);
}

// Exemplo de loop for que imprime os elementos de um array
console.log('\nElementos do array de frutas:\n');
const frutas = ['maçã', 'banana', 'laranja'];
for (let j = 0; j < frutas.length; j++) {
    console.log(frutas[j]);
}

// Exemplo de loop for alinhado que imprime a tabuada de 10
console.log('\nTabuada de 10:\n');
for (let k = 0; k <= 10; k++) {

    console.log(`${k} * ${k} = ${k * k}`);
}
