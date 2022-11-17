function fecha (fechaActual, ampliarMeses) {
    let fechaCadena = fechaActual.split("-"); //2022 10 01
    let suma = Number(fechaCadena[1]) + Number(ampliarMeses);

    let anyo = Number(fechaCadena[0]);
    let mes = Number(fechaCadena[1]);
    let dia = Number(fechaCadena[2]);

    if(suma < 12){
        anyo += 1;
        mes = 
    }
}