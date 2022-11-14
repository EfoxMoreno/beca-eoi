let message = "MENSAJE DE ";

console.info(message+"INFO");
console.warn(message+"WARN");
console.error(message+"ERROR");
console.log(message+"LOG");
console.time();
console.timeEnd();

/* Sumar y Restar */
let numero_1 = 2;
let numero_2 = 34;
let resultado = 0;

console.log("Suma: " + calculos(numero_1, numero_2, "+") );
console.log("Resta: " + calculos(numero_1, numero_2, "-") );

function calculos(valor_1, valor_2, simbolo){
    switch(simbolo){
    case "+":
        resultado = valor_1 + valor_2;
        break;
    case "-":
        if(valor_1 < valor_2){
            resultado = valor_2 - valor_1; 
        } else {
            resultado = valor_1 - valor_2; 
        }
        break;
    default:
        console.log("Ese calculo no está implementado");
        break;
    }    
    return resultado;
}

/* Objeto */
let pc = {
    name : 'Windows',
    year: 1995
};
console.info(pc);

/* Array de objeto */
let listaObjetos = ["Manolo","Mario","Carlos"];
console.log(listaObjetos);