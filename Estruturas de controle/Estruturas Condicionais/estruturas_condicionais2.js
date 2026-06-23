// Define a nota de um aluno
const nota = 7.5;

// Primeira verificação: nota excelente
if (nota >= 9.0) {
  console.log("Parabéns! Você foi aprovado com excelência.");
} 
// Segunda verificação: nota suficiente para passar
else if (nota >= 6.0) {
  console.log("Você foi aprovado.");
} 
// Caso não cumpra nenhuma das condições anteriores
else {
  console.log("Você ficou de recuperação.");
}