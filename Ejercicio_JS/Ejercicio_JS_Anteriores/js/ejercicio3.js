/* Crear una variabe de tipo cadena llamada cadena1 con valor CADENA1 */
let cadena1 = "CADENA1";

/* La posición del texto "ENA" en la variable cadena1 */
console.log("Está en la posición: " + cadena1.indexOf("ENA"));

/* El carácter de la última posición de la cadena */
console.log("Carácter última posición: " + cadena1.charAt(cadena1.length-1));

/* El valor de la variable cadena1 convertido a minúsculas */
console.log("Cadena pasada a minúsculas: " + cadena1.toLocaleLowerCase());

/* Sustituir en cadena1 "DE" por "ME" */
console.log("Sustituir en cadena1 DE por ME: " + cadena1.replace("DE", "ME"));

/* Crear una variable de tipo cadena llamada cadena2 con valor CADENA2 y concatenar cadena2 con cadena1 */
let cadena2 = "CADENA2";

console.log(cadena2 + cadena1);