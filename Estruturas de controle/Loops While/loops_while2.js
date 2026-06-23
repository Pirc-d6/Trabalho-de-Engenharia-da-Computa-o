// Inicializa a variável com um valor que permite entrar no laço
let numeroSorteado = 0;

// O laço continua rodando enquanto o número sorteado não for 7
while (numeroSorteado !== 7) {
    // Gera um número aleatório inteiro entre 1 e 10
    numeroSorteado = Math.floor(Math.random() * 10) + 1;
    
    // Mostra o número que foi gerado na rodada atual
    console.log("Número sorteado: " + numeroSorteado);
}

// Mensagem exibida apenas quando o critério de parada (7) for atingido
console.log("Sorteio encerrado! O número 7 foi encontrado.");
