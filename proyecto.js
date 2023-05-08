//Se crearon las contante para selecionar el boton hamburguesa, boton Xs y la lista del nav 
const boton = document.getElementById("botonNav");
const equis = document.getElementById("xsNav");
const menu = document.getElementById("liNav");
const botonEnviar = document.getElementById("boton");
const regexNombre = new RegExp(/^[A-Za-z]{3,10}$/);
const regexApellido = new RegExp(/^[A-Za-z]{3,10}$/);
const regexCorreo = new RegExp(/^\w+@\w+[A-Za-z]{4,7}\.[a-zA-Z]{2,3}$/);
const regexNumero = new RegExp(/^\d{2,20}$/);
const regexAsunto = new RegExp(/^(\w+\s){0,100}\w+$/);


/* const mover = document.getElementById("prueba");
const mover1 = document.getElementById("prueba1"); */
let hora = document.getElementById("hora");

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
nombre.addEventListener("input",validarNombre )

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

 const validarBoton = () =>{
    /* let caja = document.getElementById("spanBoton") */
    if(validarNombre()){
        /* caja.style.display = "block";
        caja.innerText = `Formulario enviado` */
        console.log("el mensaje se envio")
    }else{
        console.log("El mensaje no se envio")
    }
}
botonEnviar.addEventListener("submit", validarBoton) 