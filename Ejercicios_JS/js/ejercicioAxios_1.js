const headers = {
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin':'*'
};


const urlUsers = ("https://j4jjw.mocklab.io/users");
axios.get(urlUsers,{headers})
.then((respuestaUsuarios) => {
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
    respuestaUsuarios.data.arrayUsuarios.forEach(item => {
        filas +=`
        <tr>
            <td>${item.nombre}</td>
            <td>${item.apellidos}</td>
            <td>${item.direccion}</td>
        </tr>`;
    });
    tabla += filas+finTabla;
    document.getElementById("resultados").innerHTML = tabla;
});