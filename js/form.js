
var btnAddCliente = document.querySelector("#adicionar-paciente");
btnAddCliente.addEventListener("click", function (event) {
    event.preventDefault();
    var form = document.querySelector("#form-adiciona");
    var paciente = getPacienteDoForm(form);
    
    
    SpanMensagem = document.getElementById("mensagem-erro");
    if (pacienteInvalido(paciente)) {
        //pacienteTr.classList.add("paciente-invalido");
        SpanMensagem.textContent = "Paciente Invalido";
        SpanMensagem.classList.add("erro")
        return;
    }
    SpanMensagem.textContent="";
    AdicionaPacienteNaTabela(paciente);
    form.reset();

});

function getPacienteDoForm(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaIMC(this.peso, this.altura)
    }
    return paciente;
}
function AdicionaPacienteNaTabela(paciente){
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
    
}
function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));
    return pacienteTr;

}

function montaTd(dado, classe) {
    td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td
}

function pacienteInvalido(paciente) {
    if (validaPeso(paciente.peso) && validaAltura(paciente.altura)) {
        return false;
    } else {
        return true;
    }
}