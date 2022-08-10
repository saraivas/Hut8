/*1.Através da string “Maria, Paulo, Moisés, Joel, Ana”, imprima todos os nomes um em cada linha no console*/
let text = 'Maria, Paulo, Moisés, Joel, Ana'
let newText = text.replace(/, /g,"\n");
console.log(newText)

//OU 

let newText2 = text.split(', ')
newText2.forEach(element => {
    console.log(element)
});