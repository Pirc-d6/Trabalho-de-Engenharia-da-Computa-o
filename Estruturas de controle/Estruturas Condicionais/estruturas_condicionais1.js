 // Define a hora a ser analisada (não "muda")
const hora = 14;

// Aqui é onde se analisa as possibilidades
if (hora < 12){
    //O comando caso isso seja verdade
    console.log("Bom dia!");
} else if (hora < 18){ //O else if para permitir as múltiplas possibilidades, porém em cadeia
    //O comando caso isso seja verdade
    console.log("Boa Tarde!");
} else {
    //O comando caso isso seja verdade
    console.log("Boa noite!");
}