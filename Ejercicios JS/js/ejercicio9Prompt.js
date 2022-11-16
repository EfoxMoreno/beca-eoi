function suma(parametro_uno, parametro_dos) {
    return parametro_uno + parametro_dos;
}

function multiplicacion(parametro_uno, parametro_dos) {   
    return parametro_uno * parametro_dos;
}

var numbero_uno = prompt("Inserta el Primer número: ");
var numbero_dos = prompt("Inserta el Segundo número: ");

var resultado = Number(numbero_uno) + Number(numbero_dos);

setTimeout( function(){
    document.getElementById("resultado").innerHTML = "<br>El resultado de " + numbero_uno + " + " + numbero_dos + " es " + resultado;
}, 260);