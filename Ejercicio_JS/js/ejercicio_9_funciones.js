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

    resultado.innerHTML = suma(Number(identificador_uno), Number(identificador_dos));
}