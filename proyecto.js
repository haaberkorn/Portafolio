//Se crearon las contante para selecionar el boton hamburguesa, boton Xs y la lista del nav 
const boton = document.getElementById("botonNav");
const equis = document.getElementById("xsNav");
const menu = document.getElementById("liNav");
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




let correo = document.getElementById("correo");

correo.addEventListener("blur", () => {
    /* Obteniendo los valores ingresado en la casilla de correo */
    let valorCorreo = correo.value;
    /* Selecionando el id del contenedor de correo */
    let caja = document.getElementById("spanOculto")
    if(valorCorreo.length === 0){
        correo.classList.add("error")
        caja.style.display = "block";
        caja.innerText = "Aqui va el error"
    }else{
        alert("vas bien");
    }
})