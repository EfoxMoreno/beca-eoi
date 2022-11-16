(function(){
    var doc   = document,
        elem  = doc.createElement("p"),
        cont  = doc.createTextNode("<strong> Nuevo párrafo creado dinámicamente </strong>"),
        pTres = doc.getElementById("tres");

    elem.appendChild(cont);
    elem.id = "conAppendChild";

    pTres.parentNode.appendChild(elem);
}());

(function() {
    var 
        doc = document,
        elem = doc.createElement("p"),
        pTres = doc.getElementById("tres");

    elem.innerHTML = "<strong> Nuevo párrafo creado dinámicamente </strong>";    
    elem.id = "conInner";

    pTres.parentNode.replaceChild(elem, pTres);
}());