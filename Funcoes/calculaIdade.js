function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${
        this.idade + anos
    } anos de idade.`;
}

const pessoa1 = {
    nome: "Maria",
    idade: 30,
};

const pessoa2 = {
    nome: "Carlos",
    idade: 29,
};

console.log(calculaIdade.call(pessoa1, 30));
console.log(calculaIdade.apply(pessoa2, [15]));
