/* a) Crear una variabe de tipo cadena llamada cadena1 con valor CADENA1 */
let cadena1 = "CADENA1";

/* b) Crear ua variable con el nombre cadena2 sin valor */
let cadena2;

/* c) Mostrar el tipo de cadena1 */
console.log(typeof(cadena1));

/* d) Mostrar el tipo de cadena2 */
console.log(typeof(cadena2));

/* e) Con la sentencia if , si el tipo de cadena2 es undefined mostrar por consola el texto "SIN DEFINIR" */
if(typeof(cadena2) == "undefined"){
    console.log("SIN DEFINIR");
}
/* f) Definir un Objeto llamado cliente añadir las siguientes propiedades con sus valores nombre = “PEPITO”, tel=“656666666” */
let cliente = {
    nombre: "PEPITO", 
    tel: "656666666"
};
/* g) Añadir al Objeto cliente la propiedad direccion=“C/ Salud,21” */
cliente.direccion = "C/ Salud,21";

/* h) Recorrer todas las propiedades del Objeto cliente y mostrarlas por pantalla */
console.log(cliente);