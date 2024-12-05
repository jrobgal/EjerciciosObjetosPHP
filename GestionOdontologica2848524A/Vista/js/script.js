function consultarPaciente() {
    var url = "index.php?accion=consultarPaciente&documento=" +
        $("#asignarDocumento").val();
    $("#paciente").load(url, function () {
    });
}

/*$("#asignarconsultar").click(function () {
    consultarPaciente();
});*/
