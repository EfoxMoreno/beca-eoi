
var velocidad = 2000,
i = 0;

myFunction = function() {
    console.log("Batman vuelve " + i);
    i = i + 1;
    if(i < 10){
        setTimeout(myFunction, velocidad);
    }
};

setTimeout(myFunction, velocidad);