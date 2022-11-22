const headers = {
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin':'*'
};

const urlUsers = ("http://ligafalm.eu:28100/products");
axios.get(urlUsers,{headers})
.then((respuestaProductos) => {
    let tabla = `
    <table id="dataTable" class="text-center col-sm-6 mt-4">
    <thead>
        <tr class="text-center bg-primary text-white rounded-top">
            <th class="p-2 mb-2 border border-2 border-dark">Id</th>
            <th class="p-2 mb-2 border border-2 border-dark">Name</th>
            <th class="p-2 mb-2 border border-2 border-dark">Description</th>
            <th class="p-2 mb-2 border border-2 border-dark">Code</th>
            <th class="p-2 mb-2 border border-2 border-dark">Options</th>
        </tr>
    </thead>
    <tbody>`;
    let filas = ``;
    let finTabla = `</tbody>
    </table>`;
    respuestaProductos.data.forEach(item => {
        filas +=`
        <tr class="bg-dark text-white rounded-bottom">
            <td class="col-sm-2 p-2 mb-2 border border-2 border-danger">${item.id}</td>
            <td class="col-sm-3 p-2 mb-2 border border-2 border-danger">${item.name}</td>
            <td class="col-sm-3 p-2 mb-2 border border-2 border-danger">${item.description}</td>
            <td class="col-sm-4 p-2 mb-2 border border-2 border-danger">${item.code}</td>
            <td class="col-sm-4 p-2 mb-2 border border-2 border-danger">
                <button data-bs-toggle='modal' data-bs-target='#exampleModal' onclick="identificador(${item.id})">Edit</button> 
            </td>
        </tr>`;
    });
    tabla += filas+finTabla;
    document.getElementById("resultados").innerHTML = tabla;
});


// Nuevo Ejercicio 22/11/2022

function identificador(idItem) {
    axios.get(urlUsers,{headers})
    .then((respuestaProductos) => {
        respuestaProductos.data.forEach(item => {
            if(item.id === idItem){
                document.getElementById("recipient-id").value = item.id;
                document.getElementById("recipient-name").value = item.name;
                document.getElementById("message-text").value = item.description;
                document.getElementById("recipient-code").value = item.code;
                
                // Formulario para modificar articulos
                const form = document.getElementById('formulario');
                form.addEventListener('submit', function(element) {
                    element.preventDefault();
                    const formData = new FormData(form);
                    const dataRequest = {
                        "id":item.id,
                        "name":item.name,
                        "description":item.description,
                        "code":item.code
                    };
                    axios.post(urlUsers,dataRequest,{headers})
                    .then((url) => {
                        window.location.assign("index.html");
                    });
                });
            }
        });
    });
}

