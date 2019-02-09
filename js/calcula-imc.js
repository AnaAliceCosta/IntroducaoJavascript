var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
    paciente = pacientes[i];
    altura = paciente.querySelector(".info-altura").textContent;
    peso = paciente.querySelector(".info-peso").textContent;
    imcTd = paciente.querySelector(".info-imc");
    imcTd.textContent = calculaIMC(peso, altura);
    if (!validaPeso(peso) || !validaAltura(altura)){
        paciente.classList.add("paciente-invalido");
    }

}
function validaPeso(peso) {
    if (peso >= 0 && peso < 1000) {
        return true;
    }
    else {
        return false;
    }

}
function validaAltura(altura) {
    if (altura < 3.0 && altura > 0) {
        return true;
    }
    else {
        return false;
    }

}
function calculaIMC(peso, altura) {
    var imc = peso / (altura * altura);
    return imc.toFixed(2);
}
