const form = document.getElementById("formData");

form.addEventListener('submit', function(element){
    element.preventDefault();    
    const formData = new FormData(form);
    var nombre = formData.get("nombre");
    var email = formData.get("mail");
    var select = formData.get("provincia");

    var palabraInicial = nombre.startsWith("ANTONIO");
    var verificado = [false,false,false];
    var resultado = "";

    if(nombre.length < 20 && palabraInicial === true){ 
        resultado += "Nombre: " + nombre;
        verificado[0] = true;
    }

    if(email.length > 0){
        resultado += "<br>";
        resultado += "Email: " + email; 
        resultado += "<br>";       
        verificado[1] = true;
    }

    resultado += "Provincia: " + select;

    if (verificado[0] === true && verificado[1] === true) {
        document.getElementById("resultado").innerHTML = resultado;
    } else {
        document.getElementById("resultado").innerHTML = "Los datos del formulario no son correctos";
    }
});