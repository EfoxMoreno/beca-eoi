
function fecha (fechaActual, ampliarMeses){
    let fechaCadena = fechaActual.split("-");
    let suma = Number(fechaCadena[1]) + Number(ampliarMeses);

    let anyo = Number(fechaCadena[0]);
    let mes  = Number(fechaCadena[1]);
    let dia  = Number(fechaCadena[2]);

    // Total de meses + Meses agregados, si se supera sumar al año y restar al mes
    if(suma > 12){ 
        anyo += 1;
        mes = (Number(fechaCadena[1]) + ampliarMeses) - 12;
    } else {
        mes = (Number(fechaCadena[1]) + ampliarMeses);
    }

    // Sí el mes es menor a 10 agregarle un cero delante
    if(mes < 10){ mes = "0" + mes; }
    if(dia < 10){ dia = "0" + dia; }

    let mensaje = dia + "/" + mes + "/" + anyo;
    
    console.log(mensaje);  // Mostramos en consola el resultado final
    alert(mensaje);        // Mostramos en alerta el resultado final
}