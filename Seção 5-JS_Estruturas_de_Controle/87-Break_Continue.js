const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums) {
    if (x == 5){
        break // Desvia o fluxo e interrompe todo o laço
    }
    console.log(`Índice ${x} = ${nums[x]}`)
}
console.log('')
for (y in nums) {
    if (y == 5){
        continue // Desvia o fluxo e interrompe a parte atual do laço, pulando para o próximo
    }
    console.log(`Índice ${y} = ${nums[y]}`)
}

//  Cuidado com essa estrutura!
externo: 
for (a in nums){
    for (b in nums){
        if (a==2 && b == 3) break externo
        console.log(`Par = ${a}, ${b}`)
    }
}