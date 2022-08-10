/*Crie uma função que recebe um objeto usuário e imprime se ele é maior de idade,
utilize os conhecimentos da aula para melhorar o código.
Exemplo Entrada:
    { name: ‘Juca’, idade: 28 }
Exemplo Saída:
    Maior de idade
*/

const user = { name:'Juca', idade: 10 }

function maiorDeIdade({idade}) {
    console.log(idade > 17 ? 'Maior de idade' : 'Menor de idade')
}

maiorDeIdade(user)