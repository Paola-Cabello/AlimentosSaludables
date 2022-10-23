//Eventos-Storage y Json
let mensaje = "Bienvenidos a haz tu pedido";
console.log(mensaje);

localStorage.setItem("saludo", mensaje);


let boton = document.getElementById("boton");

boton.addEventListener("click",(e)=>{
    let mensaj = document.getElementById("mensaj").value;
    e.preventDefault();
    localStorage.setItem("mensaj", mensaj);
    let direc = document.getElementById("direc").value;
    e.preventDefault();
    localStorage.setItem("direc", direc);
})

for(let i=0; i < localStorage.length; i++){
    let clave = localStorage.key(i);
    let valor = localStorage.getItem(clave);

    console.log(`La clave es ${clave} y el valor es ${valor}`);
}