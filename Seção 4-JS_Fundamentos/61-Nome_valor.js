// par nome/valor
const saudacao = 'Opa' // Contexto léxico 1

function exec(){
    const saudacao = 'Falaaa' //Contexto léxico 2
    return saudacao
}

//Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 28,
    peso: 90.5,
    endereco: {
        rua: 'Rua ABC',
        numero: 100,
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)