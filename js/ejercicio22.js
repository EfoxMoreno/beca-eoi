/*function preparandoDatos() {
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
*/

const form = document.getElementById("formData");

form.addEventListener('submit', function(element){
    element.preventDefault();    
    const formData = new FormData(form);
    var nombre = formData.get("nombre");
    var email = formData.get("mail");
    var select = formData.get("provincia");

    var palabraInicial = nombre.startsWith("ANTONIO");
    var resultado = "";

    if(nombre.length < 20 && palabraInicial === true){ resultado += "Nombre: " + nombre; }

    if(email.length > 0){ resultado += "Email: " + email; }

    resultado += select;

    document.getElementById("resultado").innerHTML = resultado;
});