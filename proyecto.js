//Se crearon las contante para selecionar el boton hamburguesa, boton Xs y la lista del nav 
const boton = document.getElementById("botonNav");
const equis = document.getElementById("xsNav");
const menu = document.getElementById("liNav");


const formulario = document.getElementById("formulario");
const regexNombre = new RegExp(/^[A-Za-z]{3,10}$/);
const regexApellido = new RegExp(/^[A-Za-z]{3,10}$/);
const regexCorreo = new RegExp(/^\w+@\w+[A-Za-z]{4,7}\.[a-zA-Z]{2,3}$/);
const regexNumero = new RegExp(/^\d{2,20}$/);
const regexAsunto = new RegExp(/^(\w+\s){0,100}\w+$/);
let hora = document.getElementById("hora");


/* const mover = document.getElementById("prueba");
const mover1 = document.getElementById("prueba1"); */

//Se utilizo un evento para al darle click oculte el menu, muestre la lista y muestra la x
boton.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    boton.classList.toggle("hidden");
    equis.classList.toggle("hidden");
    
})

//Se utilizo un evento para al darle click oculte la x, oculte la lista y muestra el menu
equis.addEventListener("click", () => {
    equis.classList.toggle("hidden");
    boton.classList.toggle("hidden");
    menu.classList.toggle("hidden");
    console.log("no vez")
})

/* mover.addEventListener("click", ()=>{
    if(mover === !("click")){
        mover.classList.toggle("paused");
    }else{
        mover.classList.toggle("running");
    }
    
    console.log("paused")
})
 */

setInterval(
    ()=>{
        let tiempo = new Date();
        hora.innerText = tiempo.toLocaleTimeString();
    },1000
);


const validarNombre = () =>{
    let nombre = document.getElementById("nombre");
    /* Obteniendo los valores ingresado en la casilla de nombre */
   /*  console.log(regexNombre.test(nombre.value)); */
    let valorNombre = nombre.value;
    /* Selecionando el id del contenedor de nombre */
    let caja = document.getElementById("spanNombre")
    if(valorNombre.trim().length >= 2 && !regexNombre.test(valorNombre)){
        nombre.classList.add("errorNombre")
        nombre.classList.remove("rightNombre");
        caja.style.display = "block";
        caja.innerText = `Porfavor ingresar un nombre (solo palabras), sin espacio al final del mismo`
        
    }else if(regexNombre.test(valorNombre)){
        nombre.classList.remove("errorNombre");
        nombre.classList.add("rightNombre");
        caja.style.display = "none";
        
    }else{
        caja.style.display = "block";
       
    }
   
}
nombre.addEventListener("input",validarNombre );

const validarApellido = () =>{
    let apellido = document.getElementById("apellido");
    /* Obteniendo los valores ingresado en la casilla de apellido */
   /*  console.log(regexApellido.test(apellido.value)); */
    let valorApellido = apellido.value;
    /* Selecionando el id del contenedor de apellido */
    let caja = document.getElementById("spanApellido")
    if(valorApellido.trim().length >= 2 && !regexApellido.test(valorApellido)){
        apellido.classList.add("errorApellido")
        apellido.classList.remove("rightApellido");
        caja.style.display = "block";
        caja.innerText = `Porfavor ingresar un Apellido (solo palabras), sin espacio al final del mismo`
    }else if(regexApellido.test(valorApellido)){
        apellido.classList.remove("errorApellido");
        apellido.classList.add("rightApellido");
        caja.style.display = "none";
    }else{
        caja.style.display = "block";
    }
   
}
apellido.addEventListener("input",validarApellido )


const validarCorreo = () =>{
    let correo = document.getElementById("correo");
    /* Obteniendo los valores ingresado en la casilla de correo */
   /*  console.log(regexCorreo.test(correo.value)); */
    let valorCorreo = correo.value;
    /* Selecionando el id del contenedor de correo */
    let caja = document.getElementById("spanCorreo")
    if(valorCorreo.trim().length > 5 && !regexCorreo.test(valorCorreo)){
        correo.classList.add("error")
        correo.classList.remove("right");
        caja.style.display = "block";
        caja.innerText = `Por favor ingresar un correo valido`
    }else if(regexCorreo.test(valorCorreo)){
        correo.classList.remove("error");
        correo.classList.add("right");
        caja.style.display = "none";
    }else{
        caja.style.display = "block";
    }
   
}
correo.addEventListener("input",validarCorreo )

const validarNumero = () =>{
    let numero = document.getElementById("numero");
    /* Obteniendo los valores ingresado en la casilla de correo */
   /*  console.log(regexNumero.test(correo.value)); */
    let valorNumero = numero.value;
    /* Selecionando el id del contenedor de correo */
    let caja = document.getElementById("spanNumero")
    if(valorNumero.trim().length >= 1 && !regexNumero.test(valorNumero)){
        numero.classList.add("errorNumero");
        numero.classList.remove("rightNumero");
        caja.style.display = "block";
        caja.innerText = `Por favor ingresar un numero de telefono sin espacio`
    }else if(regexNumero.test(valorNumero)){
        numero.classList.remove("errorNumero");
        numero.classList.add("rightNumero");
        caja.style.display = "none";
    }else{
        caja.style.display = "block";
    }
}
numero.addEventListener("input",validarNumero )

const validarAsunto = () =>{
    let asunto = document.getElementById("asunto");
    /* Obteniendo los valores ingresado en la casilla de asunto */
   /*  console.log(regexAsunto.test(asunto.value)); */
    let valorAsunto = asunto.value;
    /* Selecionando el id del contenedor de asunto */
    let caja = document.getElementById("spanAsunto")
    if(valorAsunto.trim().length >=0  && !regexAsunto.test(valorAsunto)){
        asunto.classList.add("errorAsunto")
        asunto.classList.remove("rightAsunto");
        caja.style.display = "block";
        caja.innerText = `Por favor ingresar un texto sin espacio al final`
    }else if(regexAsunto.test(valorAsunto)){
        asunto.classList.remove("errorAsunto");
        asunto.classList.add("rightAsunto");
        caja.style.display = "none";
    }else{
        caja.style.display = "block";
    }
   
}
asunto.addEventListener("input",validarAsunto )



 const validarBoton = (e) =>{
    e.preventDefault()
    let nombre = document.getElementById("nombre");
    let apellido = document.getElementById("apellido");
    let correo = document.getElementById("correo");
    let numero = document.getElementById("numero");
    let asunto = document.getElementById("asunto");
    let caja = document.getElementById("spanBoton");

    if(regexNombre.test(nombre.value) && regexApellido.test(apellido.value) && regexCorreo.test(correo.value) && regexNumero.test(numero.value) && regexAsunto.test(asunto.value)) { 
        nombre.value = "";
        apellido.value = "";
        correo.value = "";
        numero.value = "";
        asunto.value = "";
        caja.classList.add("rightBoton");
        caja.classList.remove("errorBoton"); 
        caja.style.display = "block";
        caja.innerText = `El mensaje se a enviado`
    }else{
        caja.classList.remove("rightBoton");
        caja.classList.add("errorBoton");
        caja.style.display = "block";
        caja.innerText = `Complete todo los campos`
    }
}
formulario.addEventListener("submit", validarBoton) ;


const botonOscuro = document.getElementById("botonOscuro");
const botonClaro = document.getElementById("botonClaro");
const modoOscuro = document.getElementById("modoOscuro");

const cambiarColorOscuro = () =>{

    let parrafoContacto = document.getElementById("parrafoContacto");
    let hora = document.getElementById("hora");
    let botonNav = document.getElementById("botonNav");
    let botonxsNav = document.getElementById("xsNav");
    let botonEnviar = document.getElementById("botonEnviar");
    let footer = document.getElementById("footer");
    let spanBoton = document.getElementById("spanBoton");

    modoOscuro.classList.add("fondoOscuro");

    parrafoContacto.classList.add("blanco");
    hora.classList.add("blanco");

    botonNav.classList.add("blanco");

    botonxsNav.classList.add("blanco");

    botonEnviar.classList.add("blanco");
    footer.classList.add("blanco");
    
    
   


    botonOscuro.classList.toggle("hidden");
    botonClaro.classList.toggle("hidden");
}
botonOscuro.addEventListener("click",cambiarColorOscuro)

const cambiarColorClaro = () => {
    modoOscuro.classList.remove("fondoOscuro");
    hora.classList.add("cambio");
    hora.classList.remove("blanco");

    parrafoContacto.classList.add("cambio");
    parrafoContacto.classList.remove("blanco");

    botonNav.classList.add("cambio");
    botonNav.classList.remove("blanco");

    
    botonEnviar.classList.add("cambio");
    botonEnviar.classList.remove("blanco");

    footer.classList.add("cambio");
    footer.classList.remove("blanco");

    botonOscuro.classList.toggle("hidden");
    botonClaro.classList.toggle("hidden");
}
botonClaro.addEventListener("click",cambiarColorClaro);