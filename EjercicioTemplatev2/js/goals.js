const headers = {
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin':'*'
};

const urlGoals = ("http://ligafalm.eu:28100/goals?page=0&size=100");
const urlUsers = ("http://ligafalm.eu:28100/users?page=0&size=100");
const urlMilestone = ("http://ligafalm.eu:28100/milestones");
const form = document.getElementById('formularioPost');
const selectorUser = document.getElementById('selectUser');
const selectorMilestone = document.getElementById('selectMilestone');

axios.get(urlUsers,{headers})
.then((respuestaUsers) => {
    let filas = "";
    respuestaUsers.data.forEach(goalsProd => {
        filas += `
            <option value="${goalsProd.currentMilestone.id}">${goalsProd.username}</option>
        `;
    });
    selectorUser.innerHTML += filas;
});

axios.get(urlMilestone,{headers})
.then((respuestaMilestone) => {
    let filas = "";
    respuestaMilestone.data.forEach(goalsMilestone => {
        filas += `
            <option value="${goalsMilestone.id}">${goalsMilestone.name}</option>
        `;
    });
    selectorMilestone.innerHTML += filas;
});


form.addEventListener('submit', function(element) {
    element.preventDefault();
    let arrayGoals = [];

    const dataRequest = {
        "name":document.getElementById("post-name").value,
        "description":document.getElementById("post-description").value,
        "assignedTo":document.getElementById("selectUser").value
    };

    let idMilestone = parseInt(selectorMilestone.value);

    let goalID = [];
    axios.get(urlMilestone+"/"+idMilestone+"/goals",{headers})
    .then((respuestaMilestone) => {        
        respuestaMilestone.data.goals.forEach(data => {
            goalID.push(data.id);
        });

        arrayGoals = respuestaMilestone.data.goals;
        arrayGoals.push(dataRequest);

        const dataMilestoneRequest = {
            "id":idMilestone,
            "goals": arrayGoals
        };
        /*
        for(let x = 0; x < arrayGoals.length; x++){
            console.log(arrayGoals[x]);
        }*/
    });

    axios.post(urlGoals,dataRequest,{headers})
    .then(() => {
        window.location.assign("../goals.html");
    })
    .catch((error) => {
        console.log(error);
    });

}, false);