var botaoAdicioar = document.querySelector("#buscar-pacientes");
botaoAdicioar.addEventListener("click", function () {

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes");
    xhr.addEventListener("load", function () {
        if (xhr.status == 200) {
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);
            pacientes.forEach(function (paciente) {
                AdicionaPacienteNaTabela(paciente);
            });
        }else{
            console.log("falha na requisição");
        }
    });
    xhr.send();
});
