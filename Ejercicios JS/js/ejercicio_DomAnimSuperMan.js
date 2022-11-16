
var velocidad = 2000,
i = 0;

myFunction = function() {
    console.log("Superman vuelve " + i);
    i = i + 1;
    if(i > 9){
        clearInterval(timer)
    }
};

var timer = setInterval(myFunction, velocidad);