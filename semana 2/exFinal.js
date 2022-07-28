/*1.Crie um algoritmo que tem como entrada um array de números e imprime
no consolea soma dos elementos sendo cada um deles multiplicado pelo seu índice.
Exemplo entrada: [5, 9, 10, 6] 
Exemplo Saída: 47 */

let array = [5, 9, 10, 6]
let soma = 0 

for (let index = 0; index < array.length; index++) {
    soma = soma + array[index]*index    
}
console.log(soma)

/*2.Crie um algoritmo que tem como entrada um objeto e imprime 
no console os nomes dos projetos ativos do usuário.*/

user = {name: "Juca",
        projects: [
            {name: "Projeto 1", start: "01/02/2021", active: true},
            {name: "Projeto 2", start: "03/03/2021", active: false},
            {name: "Projeto 3", start: "10/08/2021", active: true},
            {name: "Projeto 4", start: "20/08/2021", active: false},
            {name: "Projeto 5", start: "18/10/2021", active: true}
        ]
    }

for (let index = 0; index < user.projects.length; index++) {
    if (user.projects[index].active == true) {
        console.log(user.projects[index].name)
    }
}

//Levando em consideração o array [6, 21, 9, 2, 50, 98, 1] crie uma função que mostrao maior numero da lista

let array1 = [6, 21, 9, 2, 50, 98, 1]

console.log(Math.max(...array1))

/* 4.Crie uma função que conte quantas palavras existem na frase que for passada comoparâmetro 
(dica: utilizem o método split de string)*/

let frase = 'Olá meu nome é Felipe Saraiva dos Santos'

function contarPalavras(frase) {
    numPalavras = frase.split([' '])
    console.log(numPalavras.length)
}

contarPalavras(frase)

/*Falta 5 e 6*/