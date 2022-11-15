let obj = {
    counter: 0,
    inc: function(value){
        this.counter += typeof value === 'number' ? value : 1;
    },
};

// Caso 1 - Invocación sin parámetro
obj.inc();
console.log("Valor del contador: " + obj.counter);

// Caso 2 - Invocación con parámetro
obj.inc(2);
console.log("Valor del contador: " + obj.counter);