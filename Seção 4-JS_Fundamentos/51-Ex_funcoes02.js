// Armazenando uma função em uma variável
const imprimirSoma = function (a, b){
    console.log(a + b)
}

imprimirSoma(2, 4)

//Armazenando uma função arrow em uma variável
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 5))

// Retorno implícito
const subtracao = (a, b) => a-b
console.log(subtracao(2, 5))

const imprimir2 = a => console.log(a)
imprimir2('Legal!!!')