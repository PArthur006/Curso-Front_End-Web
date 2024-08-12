function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise XOR
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete // Operador unário

    return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}
}

console.log("Caso 1) ", compras(true, true))
console.log("Caso 2) ", compras(true, false))
console.log("Caso 3) ", compras(false, true))
console.log("Caso 4) ", compras(false, false))

/*  TABELA VERDADE
Conectivo E - > Os dois devem ser verdadeiros
Verdadeiro E Verdadeiro -> Verdadeiro
Verdadeiro E Falso -> Verdadeiro
Falso E Verdadeiro -> Falso
Falso E Falso -> Falso

Conectivo OU - > Ao menos um deve ser Verdadeiro
Verdadeiro OU Verdadeiro -> Verdadeiro
Verdadeiro OU Falso -> Verdadeiro
Falso OU Verdadeiro -> Verdadeiro
Falso OU Falso -> Falso

Conectivo XOR - > Os dois devem ser diferentes
Verdadeiro XOR Verdadeiro -> Falso
Verdadeiro XOR Falso -> Verdadeiro
Falso XOR Verdadeiro -> Verdadeiro
Falso XOR Falso -> Falso

Negação Lógica - > O inverso lógico
!Verdadeiro -> Falso
!Falso -> Verdadeiro
*/