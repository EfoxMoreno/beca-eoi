function boton1() {
    var elementP = document.getElementById("p1");
    var buttonOne = document.getElementById("boton1");

    if(elementP.className == ""){
        elementP.className = "parrafo";
        buttonOne.innerText = "Quitar estilo a párrafo";
        buttonOne.className = "aplicado";
    }else{
        elementP.className = "";
        buttonOne.innerText = "Aplicar estilo a párrafo";
        buttonOne.className = "";
    }
}