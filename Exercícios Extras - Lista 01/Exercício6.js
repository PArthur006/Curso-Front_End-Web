// Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a multiplicação deles. Porém, não utilize o operador de multiplicação.

function multiplicador (a, b) {
    if(a<0 || b<0){
        console.log("Somente números naturais!")
    } else{
        let resultado = 0;
        for(let i=1; i <= a; i++){
            resultado += b;
        }
        return resultado;
    }
}

console.log(multiplicador(50, 2))