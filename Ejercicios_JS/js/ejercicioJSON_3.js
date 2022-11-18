const request = new Request("https://j4jjw.mocklab.io/users");
const URL = request.url;
const method = request.method;
const credentials = request.credentials;

let tabla = `<table id="dataTable">
<thead>
    <tr>
        <th>Nombre</th>
        <th>Apellidos</th>
        <th>Direccion</th>
    </tr>
</thead>
<tbody>`;

let finTabla = `</tbody>
    </table>`;

let filas = ``;

fetch(request)
.then(response => response.json())
.then(item => {
    for(let x = 0; x < item.arrayUsuarios.length; x++){
        filas +=`
        <tr>
            <td>${item.arrayUsuarios[x].nombre}</td>
            <td>${item.arrayUsuarios[x].apellidos}</td>
            <td>${item.arrayUsuarios[x].direccion}</td>
        </tr>`;
    }
    tabla += filas+finTabla;
    document.getElementById("resultados").innerHTML = tabla;
});