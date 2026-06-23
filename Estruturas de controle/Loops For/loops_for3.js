// Cria uma variável para acumular o resultado da soma
let somaPares = 0;

// Conta de 1 até 10 (i <= 10), avançando de 1 em 1
for (let i = 1; i <= 10; i++) {
    // Verifica se o resto da divisão por 2 é zero (se o número é par)
    if (i % 2 === 0) {
        // Adiciona o número atual ao total da soma
        somaPares += i;
        // Mostra qual número foi somado
        console.log(i + " é par. Adicionado à soma.");
    }
}
// Exibe o resultado final da soma no console
console.log("A soma dos números pares é: " + somaPares);
