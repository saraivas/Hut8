/*2.Troque todas as vírgulas na string abaixo por ponto final:a.“Olá, mundo, meu, nome, é, Juca”*/

let text = 'Olá, mundo, meu, nome, é, Juca'
let newText = text.replace(/,/g,".");
console.log(newText)