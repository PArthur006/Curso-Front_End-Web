let preco = 19.90;
let desconto = 0.4;
let precoComDesconto = preco * (1 - desconto);

console.log(19.9 * 0.6);
console.log(precoComDesconto);

let nome = "Caderno"; // String(Texto) -> Sequencia de Símbolos;
let categoria = "Papelaria";
console.log("\nProduto: " + nome
    + "\nCategoria: " + categoria
    + "\nPreço: " + preco
    + "\nDesconto: " + desconto
    + "\nPreço com desconto: " + precoComDesconto);
