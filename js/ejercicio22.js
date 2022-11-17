function preparandoDatos() {
    var formulario = document.forms.formData;
    var nombre = formulario.nombre;

    document.getElementById("formData").onsubmit = function() {
        var nombreValue = nombre.value;

        var palabraContenida = "ANTONIO";
        var nombreMayusculas = nombreValue.toUpperCase();
        var contieneInicialPalabra = nombreMayusculas.startsWith(palabraContenida);
        
        if(nombreValue.length < 20 && contieneInicialPalabra === true){
            alert(nombreValue);
        }

        // Lugar de pruebas
    };
}

window.onload = function() {
    preparandoDatos();
};