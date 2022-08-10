/*1.Crie uma função que recebe uma string (com quatro possibilidades: “soma”,
“subtrai”, “divide”, “multiplica”) e dois números. A função deve retornar a operação
realizada informada pela string nos dois números.

Exemplo Entrada:
    myFunction(‘soma’)(3)(5)
Exemplo Saída:
    8
*/

function myFunction(operator){
    return function (num1){
        return function(num2){
            if (operator == 'soma') {
                return num1 + num2
            }else if (operator == 'subtrai') {
                return num1 - num2
            }else if (operator == 'divide') {
                return num1 / num2
            }else if (operator == 'multiplica') {
                return num1 * num2
            }
        }
    }
}

console.log(myFunction('multiplica')(4)(2))