/* 
1.Faça uma função que recebe um valor inteiro e verifica se o valor é par.
A funçãodeve retornar um valor booleano se for par.*/

function verificaPar(valor){
    if (valor % 2 == 0) {
        console.log(true)
    }else{
        console.log(false)
    }
}

verificaPar(11)
verificaPar(6)

/* 2.Faça uma função que recebea idade de um nadador e retorna a categoria dessenadador de acordo com a tabela abaixo:
Idade - Categoria
5 a 7 anos - Infantil A
8 a 10 anos - Infantil B
11 - 13 anos - Juvenil A
14 - 17 anos - Juvenil B
Maiores de 18 anos (inclusive) - Adulto */

function categoria(idade){
    if (5<= idade && idade<= 7) {
        console.log('Infantil A')
    }else if (8<= idade && idade<= 10){
        console.log('Infantil B')
    }else if (11<= idade && idade<= 13){
        console.log('Juvenil A')
    }else if (14<= idade && idade<= 17){
        console.log('Juvenil B')
    }else if (idade >= 18){
        console.log('Adulto')
    }else{
        console.log('Muito novo para entrar em uma categoria')
    }
}

categoria(18)