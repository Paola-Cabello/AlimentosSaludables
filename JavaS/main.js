//PROMPT
//prompt("por favor ingresa tu nombre")
let nombreUsuario = prompt("cual es tu nombre y apellido?");

console.log(nombreUsuario);

alert(`El nombre agregado por el usuario es ${nombreUsuario}`);

let numero = parseInt(prompt("Te doy una pista, tenemos budín marmolado ¿Cuantos tipos mas de budines crees que tenemos?"));

console.log(numero + 1);

alert("Te cuento, tenemos cinco sabores distintos ¿Estuviste cerca?");

//CONDICIONALES

let alimentoFavorito = prompt ("Aparte de budines también tenemos: alfajores, muffin y masas ¿Cual probarias?");

if(alimentoFavorito == "budines"){
    alert ("yo también");
} else{
    alert("Yo probaria el budin");
}

let gustoFavorito = prompt ("Nuestros productos son a base de avena o harina integral ¿Cual elegirias?");
if (gustoFavorito.toLowerCase() == "avena"){
    alert ("que rico");
}else {
    alert("Muy buena eleccion yo tambien");
}

//CICLOS
//POR CONTEO
for(let i = 1; i <= 20; i ++){
    let ingresaApellidoyNombre = prompt ("ingrese nuevamente su apellido y nombre");
    alert("cliente numero "+i+" nombre" +ingresaApellidoyNombre);
    if(i == 1){
        break;
    }
}

//WHILE
let dato = prompt ("Decime que sabor te gustaría que hagamos?. Ingresa `salir` para salir");
   while(dato != "salir") {
        alert(`el dato que me diste es ${dato}`);
    dato = prompt ("Decime que sabor te gustaría que hagamos?. Ingresa `salir` para salir");
}

//SWITCH
let clasificacion = prompt("Te gustaron las preguntas? Como nos clasificarias?");

switch (clasificacion){
    case "debes mejorar":
        alert("Haremos lo posible para mejorar");
        break;
    case "bueno":
        alert("Gracias, seguiremos mejorando");
        break;
    case "muy bueno":
        alert("Gracias");
        break;
    case "Excelente":
        alert("Gracias, estamos realmente felices");
        break;
    default:
        alert("Gracias, tu opinion nos importa")
        break;
    }

//FUNCTION

function mostrarEvento(){
    let evento = prompt ("Tienes un evento? Cual es tu evento?");
    alert(`Tu evento es ${evento}`);
}
mostrarEvento();

function calcularDescuento (precio, porcentaje){
    let valorDescuento = precio * porcentaje /100; 
    let precioFinal = precio - valorDescuento

    return precioFinal;
}

let valorBudin = calcularDescuento(750, 20);
console.log(valorBudin);

//OBJETO LITERAL

const cliente1 ={
    apellido: "Chabeuf",
    nombre: "Juliana",
    telefono: 3442585964,
    direccion: "Estrada 1269" 
}

console.log(cliente1.telefono);

cliente1.telefono= 3442556870;

console.log(cliente1.telefono);

class Cliente {
    constructor(apellido, nombre, telefono, direccion) {
        this.apellido = apellido;
        this.nombre = nombre;
        this.telefono = telefono;
        this.direccion = direccion;
    }
}

const cabrera = new Cliente("Cabrera", "Alejandra", 3442489562, "Ereño 145");

console.log(cabrera);

let telefonoCliente = parseInt(prompt ("Cual es tu telefono?"));
let direccionCliente = prompt ("Cual es tu direccion?");

const  cliente = new Cliente(telefonoCliente, direccionCliente);
console.log(cliente);


for (const prop in cabrera) {
console.log(`La propiedad es ${prop} y su valor es ${cabrera[prop]}`)

}

//ARRAYS
//-------------------------0------------------1------------2-----=============3=========================
const listaPedido = ["1 budin marmolado", "6 alfajores", "pedido 1", {nombre: "Marta", apellido: "Gonzalez",} ];

for (let i=0; i < listaPedido.length; i++) {
    console.log(listaPedido[i]);
}

listaPedido.push("Hora del pedido 17hs");
console.log(listaPedido);

listaPedido.unshift("Costo 1200");
console.log(listaPedido);

let direccion = prompt("A que hora retiras el pedido?");
listaPedido.push(direccion);
console.log(listaPedido);

const listaEvento = ["cumpleaños", "30 años","20 de octubre","telefono 415141", "18 horas en el Club Mitre", "menu merienda", "costo del evento 20000"];
const listaCompleta= listaPedido.concat(listaEvento);
console.log(listaCompleta);

class NuevoPedido {
    constructor(alimento, retira, costo) {
      
        this.alimento = alimento;
        this.retira = retira;
        this.costo = costo;
    }
}

const listaNueva = [];

const agregarPedido = () => {
 
    let alimento= prompt ("Cuales son los alimientos encargados?");
    let retira = parseInt(prompt ("A que hora retira el pedido?"));
    let costo = parseFloat(prompt ("Cual es el costo total?"));

    let nuevoPed = new NuevoPedido (alimento, retira, costo);

    listaNueva.push(nuevoPed);
    return listaNueva;
}

agregarPedido()

//FUNCIONES DE ORDEN SUPERIOR

function AlimentosEnStock (array, funcion) {
    for(const alimento of array){
        funcion (alimento);
    }
}

const alimentos = ["budin de chocolate", "alfajores de avena con dulce de leche", "masas de avena y limon"];
AlimentosEnStock(alimentos, console.log);

const listaPrecios = [
    {nombre: "budin", precio: 750},
    {nombre: "alfajores", precio: 150},
    {nombre: "masas", precio: 70},
];

//Foreach

listaPrecios.forEach((comida)=> {
    console.log (`Este alimento es ${comida.nombre} y su precio es $${comida.precio}`)
})

//Find

let buscar = listaPrecios.find ((comida) => comida.nombre == "budin");

console.log (buscar);

//Filter
let buscarPorPrecio = listaPrecios.filter (comida => comida.precio > 100);

console.log(buscarPorPrecio);

//Some
console.log(listaPrecios.some(alim => alim.nombre == "masas"))

//Map
let listaPreciosNuevos = listaPrecios.map(alimento => alimento.precio = alimento.precio * 1.07);

console.log(listaPreciosNuevos)

//Reduce

const totalCompra = listaPrecios.reduce((acumulador, alimento)=>acumulador + alimento.precio, 0);
console.log(totalCompra)

//Sort
alimentos.sort();
console.log(alimentos)

//Dom

console.dir(document.body)

//Acceder al DOM
//id 

let parrafoUno = document.getElementById("parrafoUno");
console.log(parrafoUno);

//Class

let parrafo = document.getElementsByClassName("parrafoDos");
console.log(parrafo);

//Etiqueta

let titulo = document.getElementsByTagName("h1");
console.log(titulo);

for(const parrafoDos of parrafo) {
    console.log(parrafoDos.innerHTML)
}

//Por selector
console.log(document.querySelectorAll("p"));

//Modificar contenido
//InnerText
parrafoUno.innerText = "Somos una pequeña empresa familiar que realizamos alimentos dulces con avena y harina integral.";

let nuevoDiv = document.createElement("h2");
nuevoDiv.setAttribute("id","nuevoTitulo");
nuevoDiv.innerHTML = "¡Si tienes un evento, nosotros te lo organizamos!";
console.log(nuevoDiv);

document.getElementById("nuevoDiv").append(nuevoDiv);

//Quitar
let nuevoD = document.getElementById("nuevoDiv");
nuevoD.append(nuevoDiv);
nuevoD.remove(nuevoDiv);

