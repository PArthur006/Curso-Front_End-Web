// Função sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

// Chamada da função
imprimirSoma(2, 3) // Saída: 5
imprimirSoma(2)
imprimirSoma(2, 3, 4, 5) 
imprimirSoma("10", 5) 

// Função com retorno
function soma(a, b = 0) {
    return a + b
}

console.log(soma(2, 6))