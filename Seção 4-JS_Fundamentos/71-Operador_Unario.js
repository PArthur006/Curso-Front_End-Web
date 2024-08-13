let num1 = 1
let num2 = 2

//  Incremento
num1++
console.log(num1)

//  Decremento
--num1
console.log(num1)

//  Evite incrementos em uma comparação
console.log(++num1 === num2--) //True pq o decremento em 'num2--' não foi lido antes da comparação
console.log(num1 === num2)
