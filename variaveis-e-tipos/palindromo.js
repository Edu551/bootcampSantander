function verificaPalindromo(string) {
    if (!string) return "Insira um valor.";

    return string.split("").reverse().join("") === string;
}

function verificaPalindromo2(string) {
    if (!string || !string.length) return "Insira um valor.";

    for (let i = 0; i < string.length / 2; i++) {
        if (string[i] !== string[string.length - 1 - i]) {
            return console.log(false);
        }
    }

    return console.log(true);
}

// verificaPalindromo2("a11a");
