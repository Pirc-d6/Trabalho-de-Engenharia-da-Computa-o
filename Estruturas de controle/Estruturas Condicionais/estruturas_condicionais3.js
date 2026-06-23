// Dados para simular a compra de um produto
const temSaldo = true;
const produtoEmEstoque = false;

// O operador && exige que AMBAS as condições sejam verdadeiras
if (temSaldo && produtoEmEstoque) {
  console.log("Compra realizada com sucesso!");
} else {
  // Executa se faltar saldo OU se o produto estiver esgotado
  console.log("Não foi possível comprar. Verifique o saldo ou o estoque.");
}
