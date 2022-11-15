/*
a) Define en el HTML 2 divs que contengan 1 número cada uno, otro div vacío y un botón que llame a la función d).

b) Define una función que reciba 2 parámetros y devuelva el resultado de la suma.

c) Define una función que reciba 2 parámetros y devuelva el resultado de la multiplicación.

d) Define una función que recoja los 2 parámetros definidos en los divs del apartado 
	a), los sume con la función 
	b) y los multiplique con la función c).

    A continuación y en esa misma función, se deberán sumar los 2 resultados obtenidos de 
    las funciones b) y c) y representar el resultado en el 3º div definido en el html.
*/

function suma(parametro_uno, parametro_dos) {
    return parametro_uno + parametro_dos;
}

function multiplicacion(parametro_uno, parametro_dos) {   
    return parametro_uno * parametro_dos;
}

function obtenerDatos(){
    let numero_uno = document.getElementById("numero_uno").innerHTML;
    let numero_dos = document.getElementById("numero_dos").innerHTML;
    let resultado = document.getElementById("resultado");

    let sumar = suma(Number(numero_uno), Number(numero_dos));
    let multiplicar = multiplicacion(Number(numero_uno), Number(numero_dos));

    let suma_id = "Sumar: " + numero_uno + " + " + numero_dos + " = " + sumar;
    let multiplicar_id = "Multiplicar: " + numero_uno + " * " + numero_dos + " = " + multiplicar;    
    
    let total = "Total suma de resultados: " + (sumar + multiplicar);

    resultado.innerHTML = suma_id + "<br>" + multiplicar_id + "<br>" + total;
}