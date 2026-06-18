// Loop While em JavaScript

// Exemplo de loop while que imprime os números de 0 a 10

console.log('Contagem de 0 a 10:\n');
let i = 0;
while (i <= 10) {
    console.log(i);
    i++;
}


// Exemplo de loop while que imprime de 10 a 0

console.log('\nContagem de 10 a 0:\n');
let j = 10;
while (j >= 0) {
    console.log(j);
    j--;
}

// Exemplo de loop while que imprime a array de nomes

console.log('\nElementos do array de nomes:\n');
const nomes = ['Alice', 'Bob', 'Charlie'];
let k = 0;
while (k < nomes.length) {
    console.log(nomes[k]);
    k++;
}

// Exemplo de loop while alinhado que imprime a tabuada de 10

console.log('\nTabuada de 10:\n');
let l = 0;
while (l <= 10) {
    console.log(`${l} * ${l} = ${l * l}`);
    l++;
}