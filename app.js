"use strict";
let botaoAtualizar = document.getElementById("atualizar-saldo");
let botaoLimpar = document.getElementById("limpar-saldo");
let valorAdicionado = document.getElementById("valor-adicionado");
let campoSaldo = document.getElementById("campo-saldo");
let saldoTotal = 0;
limparSaldo();
function somarAoSaldo(valorAdicionado) {
    if (campoSaldo) {
        saldoTotal += valorAdicionado;
        campoSaldo.innerHTML = saldoTotal.toString();
        limparCampoSoma();
    }
}
function limparCampoSoma() {
    valorAdicionado.value = "";
}
function limparSaldo() {
    if (campoSaldo) {
        saldoTotal = 0;
        campoSaldo.innerHTML = saldoTotal.toString();
    }
}
if (botaoAtualizar) {
    botaoAtualizar.addEventListener("click", () => {
        somarAoSaldo(Number(valorAdicionado.value));
    });
}
botaoLimpar.addEventListener("click", () => {
    limparSaldo();
});
