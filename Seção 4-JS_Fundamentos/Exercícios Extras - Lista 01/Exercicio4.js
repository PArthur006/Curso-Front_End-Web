/* Exercício 4
    Crie uma função que recebe um número (de 1 a 12) e retorna o mês correspondente como um string. Por exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o mês 2.
*/

function CalcMes(mes){
    switch(mes){
        case 1:
            return "Janeiro"
        case 2:
            return "Fevereiro"
        case 3:
            return "Março"
        case 4:
            return "Abril"
        case 5:
            return "Maio"
        case 6:
            return "Junho"
        case 7:
            return "Julho"
        case 8:
            return "Agosto"
        case 9:
            return "Setembro"
        case 10:
            return "Outubro"
        case 11:
            return "Novembro"
        case 12:
            return "Dezembro"
        default:
            return "Inválido"
    }
}

let mes = 2
console.log(`Mês ${CalcMes(mes)}`)