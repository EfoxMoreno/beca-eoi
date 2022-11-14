/* a) Crear una variabe de tipo array llamada array1 con valor [1,2,3,4] */
let array1 = [1,2,3,4];
let resultado = "";

/* b) Crear un pequeño programa que recorra el array y cuando encuentre el 1 muestre UNO , 
      el 2 nuestre DOS, el 3 muestre TRES, el 4 muestre CUATRO Utilizar la instrucción Switch */
for(let x = 0; x < array1.length; x++){
    switch(array1[x]){
    case 1:
        resultado = "UNO";
        break;
    case 2:
        resultado = "DOS";
        break;
    case 3:
        resultado = "TRES";
        break;
    case 4:
        resultado = "CUATRO";
        break;
    default:
        resultado = "No existen más valores";
        break;
    }
    console.log(resultado);
}

/* c) Introducir un 3 al final del array y visualizar el array */
array1.push(3);
console.log(array1);

/* d) Quitar los 3 últimos elementos del array y visualizar el array */
array1.splice(-3);
console.log(array1);