function suma(param1, param2){
    alert(param1 + param2);
    document.getElementById("resultado").innerHTML=param1+param2;
    console.log(document.getElementById("entrada").innerHTML);
    return console.log(param1 + param2);
}

(function (param1, param2) {
    alert(param1 + param2);
    console.log(param1 + param2);
}(12, 12));