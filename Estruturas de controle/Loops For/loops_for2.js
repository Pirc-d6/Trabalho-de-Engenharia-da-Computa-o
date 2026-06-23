// Cria uma lista de strings (array)
const compras = ["Arroz", "Feijão", "Ovo", "Leite"];

// Começa no índice 0 (let i = 0)
// Executa até o fim da lista (i < compras.length)
// Neste caso, o JS tem essa caracteristica interessante, o comprimento pode ser tratado de forma dinâmica
// Avança de 1 em 1 índice (i++)
for (let i = 0; i < compras.length; i++) {
    // Usa o índice 'i' para pegar o item atual da lista
    // Semelhante ao Python, usa-se o "+" para caso queira printar mais elementos
    console.log("Item " + (i + 1) + ": " + compras[i]);
}
