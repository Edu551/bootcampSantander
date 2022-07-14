const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const lista = [
    {
        name: "sabonete",
        preco: 10,
    },
    {
        name: "carne",
        preco: 30,
    },
    {
        name: "água",
        preco: 6,
    },
    {
        name: "banana",
        preco: 4,
    },
];

const saldoDisponivel = 200;

function somaNumeros(arr) {
    return arr.reduce(function (prev, current) {
        return prev + current;
    });
}

console.log(`Soma de todos os números pelo reduce ${somaNumeros(myArray)}.`);

function saldoFinal(saldoDisponivel, lista) {
    return lista.reduce(function (prev, current) {
        return prev - current.preco;
    }, saldoDisponivel);
}

console.log(
    `Seu saldo final é de ${saldoFinal(saldoDisponivel, lista)} reais. `
);
console.log(myArray.reduce((current, acc) => current + acc));
