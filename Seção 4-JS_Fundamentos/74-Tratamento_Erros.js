function tratarErroELancar(erro) {
    //throw new Error("...");
    //throw 10
    //throw "string"
    //throw true
    //throw null
    //throw undefined
    //throw {a: 1, b: 2}
    throw {
        nome: erro.name,
        msg: erro.mensage,
        date: new Date
    }
}

function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    }
    catch(e) {
        tratarErroELancar(e)
    }
    finally{
        console.log('Fim do programa')
    }
}

const obj = {nome: 'Roberto'}
imprimirNomeGritado(obj)