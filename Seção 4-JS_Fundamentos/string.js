const escola = "Cod3r"

console.log(escola.charAt(4)) //Imprime o caracter nessa posição
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3)) //Imprime o valor na ASCII
console.log(escola.indexOf("3")) //Em qual posição se encontra esse caracter

console.log(escola.substring(1)) //Imprime a partir do caracter 1
console.log(escola.substring(0, 3)) //Imprime 3 caracteres a partir de 0

console.log('Escola '.concat(escola).concat("!")) //Concatenando
console.log(escola.replace(3, 'e')) // Substitui o valor 3 por 'e' na string

console.log('Ana, Maria, Pedro'.split(',')) //Transforma uma string em um array, dividindo os dados a cada ','
