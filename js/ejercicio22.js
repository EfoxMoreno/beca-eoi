function preparandoDatos() {
    var formulario = document.forms.formData;
    var nombre = formulario.nombre;

    document.getElementById("formData").onsubmit = function() {
        var nombreValue = nombre.value;

        if(nombreValue.length < 20){
            alert(nombreValue.length);
        }

        // Lugar de pruebas
        var palabraContenida = "ANTONIO";
        var nombreMayusculas = nombreValue.toUpperCase();
        alert(palabraContenida + " / " + nombreMayusculas);
    };
}

window.onload = function() {
    preparandoDatos();
};