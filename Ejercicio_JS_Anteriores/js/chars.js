var url = location.href;
console.log(url);

var variables = url.split('?');
console.log(variables);

var cadenas = variables[1].split('&');
console.log(cadenas);

var nombre = cadenas[0].split('=');
var edad = cadenas[1].split('=');
console.log("Nombre: " + nombre[1] + " - Edad: " + edad[1]);