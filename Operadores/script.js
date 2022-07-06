function comparaNumeros(num1, num2) {
    if (!num1 || !num2) return "Insira 2 números!";

    const primeiraFrase = criaPrimeiraFrase(num1, num2);
    const segundaFrase = criaSegundaFrase(num1, num2);

    return `${primeiraFrase} ${segundaFrase}`;
}

function criaPrimeiraFrase(num1, num2) {
    let validaNumeros = num1 !== num2 ? "não" : "";

    return `Os números ${num1} e ${num2} ${validaNumeros} são iguais.`;
}

function criaSegundaFrase(num1, num2) {
    const soma = num1 + num2;

    let resultado10 = soma > 10 ? "maior" : "menor";
    let resultado20 = soma > 20 ? "maior" : "menor";

    return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20.`;
}

console.log(comparaNumeros(21, 5));
