/*
1 - Crie variáveis para armazenar algumas informações de cadastro de
um estudante,são elas: nome, sobrenome, dia do nascimento, mês do
nascimento, ano donascimento, primeira nota e segunda nota.
A partir dessas informações, você devemostrar um relatório na tela
da seguinte forma: Nome Completo, Idade, Data de Nascimento e Média:

Exemplo de Saída: Nome Completo: João Pedro Bretanha
                  Idade: 29
                  Data de Nascimento: 11/04/1992
                  Média: 8  */

let estudante = {nome:'Felipe',
                 sobrenome:'Saraiva',
                 idade:23,
                 diaNascimento:'07',
                 mesNascimento:'06',
                 anoNascimento:'99',
                 notas:[7, 8.5]};

console.log(`Nome Completo: ${estudante.nome} ${estudante.sobrenome}\nIdade: ${estudante.idade}\nData de Nascimento: ${estudante.diaNascimento}/${estudante.mesNascimento}/${estudante.anoNascimento}\nMédia: ${(estudante.notas[0]+estudante.notas[1])/2}`)

