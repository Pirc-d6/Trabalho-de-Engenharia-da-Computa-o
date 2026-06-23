// Cria uma lista de tarefas pendentes
let tarefas = ["Lavar a louça", "Estudar JavaScript", "Ir à academia"];

// O laço executa enquanto a lista não estiver vazia (tamanho maior que 0)
while (tarefas.length > 0) {
    // O método .shift() remove e retorna o primeiro item da lista
    let tarefaAtual = tarefas.shift();
    
    // Exibe a tarefa que está sendo realizada no momento
    console.log("Concluindo tarefa: " + tarefaAtual);
}

// Confirmação final após a lista ficar zerada
console.log("Todas as tarefas foram concluídas!");
