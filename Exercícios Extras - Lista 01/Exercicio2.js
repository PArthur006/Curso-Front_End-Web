/*  Exercício 2
    Escreva uma função que receba a idade de uma pessoa em anos e retorne a mesma idade em dias
*/

function idadeDias(a){
    return a * 365
}

var anos = 25
console.log(`Sua idade em anos é ${anos}.`)
console.log(`Sua idade em dias é ${idadeDias(anos)}.`)