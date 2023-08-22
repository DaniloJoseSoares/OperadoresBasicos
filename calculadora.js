let op = parseInt(prompt("Escolha uma operação:\n1: Soma\n2: Subtração\n3: Multiplicação\n4: Divisão\n0: Sair"));

if (op === 0) {                
   alert("Encerrando o programa.");
} 
else if (op >= 1 && op <= 4) {
            
let num1 = parseFloat(prompt("Digite o primeiro número:"));
let num2 = parseFloat(prompt("Digite o segundo número:"));

let resultado;

switch (op) {
case 1:
   resultado = num1 + num2;
   alert("Resultado da soma: " + resultado);

break;

case 2:
    resultado = num1 - num2;
    alert("Resultado da subtração: " + resultado);

break;

case 3:
   resultado = num1 * num2
   alert("Resultado da multiplicação: " + resultado);

break; 

case 4:
   resultado = num1 / num2
   alert("Resultado da divisão: " + resultado);

   default:  
}

}
 else { alert ("Esta opção não é válida") // caso o usuário digite algum número inválido para escolha do operador.
}
 


