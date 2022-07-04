var currentNumberWrapper = document.getElementById("currentNumber");
var telaContadorWrapper = document.getElementById("telaContador");

document.getElementById("botao1").disabled = false;
document.getElementById("botao2").disabled = false;
var currentNumber = 0;
var telaContador = 0;

const botaoSubtracao = document.getElementById("subtracao");
const botaoSoma = document.getElementById("soma");

botaoSubtracao.addEventListener("click", subtracao);
botaoSoma.addEventListener("click", soma);

function increment() {
    currentNumber++;
    currentNumberWrapper.innerHTML = currentNumber;
    validaCorTexto();
    if (currentNumber >= 5) {
        document.getElementById("botao2").disabled = true;
    } else {
        document.getElementById("botao2").disabled = false;
        document.getElementById("botao1").disabled = false;
    }
}

function decrement() {
    currentNumber--;
    currentNumberWrapper.innerHTML = currentNumber;
    validaCorTexto();
    if (currentNumber <= -5) {
        document.getElementById("botao1").disabled = true;
    } else {
        document.getElementById("botao1").disabled = false;
        document.getElementById("botao2").disabled = false;
    }
}

function soma() {
    telaContador++;
    telaContadorWrapper.innerHTML = telaContador;
}

function subtracao() {
    telaContador--;
    telaContadorWrapper.innerHTML = telaContador;
}

function validaCorTexto() {
    currentNumber < 0
        ? (document.getElementById("currentNumber").style.color = "red")
        : (document.getElementById("currentNumber").style.color = "black");
}
