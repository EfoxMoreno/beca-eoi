function suma(parametro_uno, parametro_dos) {
    return parametro_uno + parametro_dos;
}

function multiplicacion(parametro_uno, parametro_dos) {   
    return parametro_uno * parametro_dos;
}

var numero_uno = prompt("Inserta el Primer número: ");
var numero_dos = prompt("Inserta el Segundo número: ");

var resultado = Number(numero_uno) + Number(numero_dos);

setTimeout( function(){
    document.getElementById("resultado").innerHTML = "<br>El resultado de " + numero_uno + " + " + numero_dos + " es " + resultado;
}, 260);