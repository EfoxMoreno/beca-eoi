function preparandoDatos() {
    var formulario = document.forms.formData;
    var nombre = formulario.nombre;

    document.getElementById("formData").onsubmit = function() {
        alert(nombre);
    };
}

window.onload = function() {
    preparandoDatos();
}