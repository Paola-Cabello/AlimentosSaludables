let enviar = document.getElementById("enviar");

enviar.addEventListener("click",(e)=>{
    let nombreYapellido = document.getElementById("nombreYapellido").value;
    e.preventDefault();
    localStorage.setItem("nombreYapellido", nombreYapellido);
    let correo = document.getElementById("correo").value;
    e.preventDefault();
    localStorage.setItem("correo", correo);
    let tel = document.getElementById("basic-url").value;
    e.preventDefault();
    localStorage.setItem("basic-url", tel); 
    let whatsapp = document.getElementById("cel").value;
    e.preventDefault();
    localStorage.setItem("cel", whatsapp);
    let nosElegiste = document.getElementById("nosElegiste").value;
    e.preventDefault();
    localStorage.setItem("nosElegiste", nosElegiste);
    let queNecesitas = document.getElementById("queNecesitas").value;
    e.preventDefault();
    localStorage.setItem("queNecesitas", queNecesitas);
})

//Fetch
const boton = document.querySelector("#btn");
const contenedor = document.querySelector(".fetch");


const obtenerDatos = ()=> {
    fetch("https://randomuser.me/api") 
         .then(response => response.json())
         .then(result => {
            let data = result.results;
            console.log(data)
         })
}

boton.onclick = ()=> {
    obtenerDatos()
}

//Post
//const obtenerNuevosDatos = ()=>{
//fetch("https://jsonplaceholder.typicode.com/posts", {
//    method: "POST",
//    body:JSON.stringify({
//        title: "nombre" ={nombre},
//        body: "Contactos de eventos",
//        userId: 53
//    }),
//    headers: {
//        "Content-type": "application/json; charset=UTF-8",

//    }
//})

//    .then(response => response.json())
//    .then(data => console.log(data))

//}

//boton.onclick = ()=> {
//    obtenerNuevosDatos()
//}
