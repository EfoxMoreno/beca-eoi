function fecha (fechaActual, ampliarMeses) {
    let fechaCadena = fechaActual.split("-"); //2022 10 01
    let suma = Number(fechaCadena[1]) + Number(ampliarMeses);

    let anyo = Number(fechaCadena[0]);
    let mes = Number(fechaCadena[1]);
    let dia = Number(fechaCadena[2]);

    if(suma < 12){
        anyo += 1;
        mes = (Number(fechaCadena[1]) + ampliarMeses) - 12;
    } else {
        mes = (Number(fechaCadena[1]) + ampliarMeses) - 12;
    }

    if(mes < 10){ mes = "0" + mes; }

    let mensaje = dia + "/" + mes + "/" + anyo;

    console.log(mensaje);
    alert(mensaje);
}