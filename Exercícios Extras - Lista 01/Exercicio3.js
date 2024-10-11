/* Exercício 3
    Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um funcionário num mês, e o quanto ele recebe por hora. O retorno da função deve ser a string "Salário igual a R$X", em que X é o quanto o funcionário ganhou no mês.
*/

function calculaSalario(a, b){
    return a * b
}

var horas = 120
var dinHora = 15
console.log(`Salário igual a R$${calculaSalario(horas, dinHora)} no mês.`)