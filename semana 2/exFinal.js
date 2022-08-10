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

/*5.Através do array de usuários abaixo imprima no console todas a skills que cada usuario tem:*/

const users = [
    {
        name: "Joao",
        skills: ["Javascript", "ReactJS", "Redux"]
    },
    {
        name: "Pedro",
        skills: ["VueJS", "Ruby on Rails", "Elixir"]
    }
]

for (let i = 0; i < users.length; i++) {
    console.log('\n'+users[i].name+' sabe: ')
    for (let j = 0; j < users[[i]].skills.length; j++) {
        console.log('\t\t'+users[i].skills[j])
    }    
}

/*6.Crie uma função chamada rockPaperScissorsWinner e recebe dois valores como parâmetro.
 Esses dois valores podem ser:
    ●0: tesoura
    ●1: papel
    ●2: pedra
Construa um algoritmo que recebe esses valores randomicamente e printa na telaqual usuário ganhou, se o usuário 1 ou usuário 2*/

let jogador1 = Math.floor(Math.random() * 3)
let jogador2 = Math.floor(Math.random() * 3)

function rockPaperScissorsWinner(valor1, valor2){
    let param = ['✌🏻', '✋🏻', '✊🏻'];
    jogador1 = param[valor1]
    jogador2 = param[valor2]

    if (valor1 == valor2){
        console.log(jogador1+' X '+jogador2)
        console.log("Empate! Ninguém ganhou.")
    }else if ((valor2 - valor1 == -2) || (valor2 - valor1 == 1)){
        console.log(jogador1+' X '+jogador2)
        console.log("Jogador 1 ganhou.")
    }else{
        console.log(jogador1+' X '+jogador2)
        console.log("Jogador 2 ganhou.") }
}

rockPaperScissorsWinner(jogador1, jogador2)