//Troque os valores das variáveis entre elas.

let a = 7;
let b = 14;

console.log("Valor de A:",a);
console.log("Valor de B:",b);

let aux = a;

a = b;
b = aux;

console.log("\nNovo valor de A:",a);
console.log("Novo valor de B:",b);

//Outra maneira
console.log("\n");

let c = 6;
let d = 12;

console.log("Valor de C:",c);
console.log("Valor de D:",d);

[c, d] = [d, c];

console.log("\nNovo valor de C:",c);
console.log("Novo valor de D:",d);