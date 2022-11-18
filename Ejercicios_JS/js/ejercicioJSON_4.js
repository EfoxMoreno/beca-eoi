const request = new Request("https://j4jjw.mocklab.io/usersDataList");
const URL = request.url;
const method = request.method;
const credentials = request.credentials;

let tabla = `<div class="row mt-4">`;
let filas = ``;
let count = 1;

fetch(request)
.then(response => response.json())
.then(data => {
    data.arrayUsuarios.forEach(item => {
        filas +=`        
        <div class="col-sm-4">
            <div class="card text-white bg-success" style="width: 18rem;">
                <div class="card-body text-center">
                    <h5 class="card-title">${item.nombre}</h5>
                    <p class="card-text">${item.apellidos}</p>
                </div>
                <ul class="list-group list-group-flush">
        `;
        item.direcciones.forEach(direccion => {
            if(count > 2) { count = 1; }
            if(count <= 2) { filas += `<p class="text-center bg-primary" style="margin: 0px; padding: 12px; border: 1px solid #1c6ce1;;">INFORMACION `+count+`</p>`;}
            filas += `
                <li class="list-group-item text-white bg-secondary"><u>Direccion:</u> <br><p class="text-center" style="margin: 0px 0px 10px 0px;">${direccion.nombre}</p></li>
                <li class="list-group-item text-white bg-secondary "><u>Población:</u> <br><p class="text-center" style="margin: 0px 0px 10px 0px;">${direccion.poblacion}</p></li>
            `;
            count++;
        });
        filas +=`</ul></div></div>`;
    });
    tabla += filas;
    document.getElementById("resultados").innerHTML = tabla;
});
