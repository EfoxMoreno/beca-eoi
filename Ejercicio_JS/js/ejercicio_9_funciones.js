function suma(parametro_uno, parametro_dos) {
    return parametro_uno + parametro_dos;
}

function multiplicacion(parametro_uno, parametro_dos) {   
    return parametro_uno * parametro_dos;
}

function obtenerDatos(){
    let identificador_uno = document.getElementById("identificador_uno").innerHTML;
    let identificador_dos = document.getElementById("identificador_dos").innerHTML;
    let resultado = document.getElementById("resultado");

    let sumar = suma(Number(identificador_uno), Number(identificador_dos));
    let multiplicar = multiplicacion(Number(identificador_uno), Number(identificador_dos));

    let suma_id = "Sumar: " + identificador_uno + " + " + identificador_dos + " = " + sumar;
    let multiplicar_id = "Multiplicar: " + identificador_uno + " * " + identificador_dos + " = " + multiplicar;    
    
    let total = "Total suma de resultados: " + (sumar + multiplicar);

    resultado.innerHTML = suma_id + "<br>" + multiplicar_id + "<br>" + total;
}