//PROMPT
//prompt("por favor ingresa tu nombre")
let nombreUsuario = prompt("cual es tu nombre?");

console.log(nombreUsuario);

alert(`El nombre agregado por el usuario es ${nombreUsuario}`);

let numero = parseInt(prompt("dame un  puntaje si te gusta la pagina"));

console.log(numero + 10);

//CONDICIONALES

let alimentoFavorito = prompt ("cual de nuestros alimentos es tu favorito?");

if(alimentoFavorito == "budines"){
    alert ("el mio también");
} else{
    alert("El mio es el budin");
}

let gustoFavorito = prompt ("cual de nuestros gustos es tu favorito?");
if (gustoFavorito.toLowerCase() == "avena"){
    alert ("que rico");
}else {
    alert("Muy buena eleccion el mio es avena con chocolate");
}

//CICLOS
//POR CONTEO
for(let i = 1; i <= 20; i ++){
    let ingresaApellidoyNombre = prompt ("ingrese su apellido y nombre");
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
let clasificacion = prompt("Como nos clasificas?");

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
    let evento = prompt ("Cual es tu evento?");
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

