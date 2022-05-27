/**
 * Instrucciones:
 * 
 * 1 - Para el formulario de contacto hacer que el spinner desaparezca luego de 5 segundos (investigar setTimeOut, funcion de javascript)
 * y al desaparecer mostrar el formulario de contacto.
 * 
 * 2 - Al hacer click en el boton enviar validar que los campos no esten vacíos
 * 
 * 3 - Al hacer click en el botón enviar crear un elemento usando el dom con javascript y mostrar una alerta de bootstrap( https://getbootstrap.com/docs/5.0/components/alerts/ )
 * El mensaje de la alerta debe decir que se envió el formulario
 * 
 * 4- Al desaparecer la alerta (5 segundos despues) ocultar el formulario y mostrar una card que diga como titulo h3: "Gracias por contactarnos"
 * como parrafo del body de la card mostrar un mensaje que haga referencia a que en la brevedad seran contactados.
 * 
 */

//Variables (constantes)
const spinner = document.getElementById("spinner")
const formCard = document.getElementById("contact-form-card")
const btnEnviar = document.getElementById("btn-enviar")
const textEmail = document.getElementById("exampleFormControlInput1")
const textArea = document.getElementById("exampleFormControlTextarea1")
const contenedor = document.getElementById("container")



 setTimeout(function(){
    //oculto spinner
    spinner.classList.add("d-none");
    //muestro form de contacto
    if (formCard.classList.contains("d-none")) {
        formCard.classList.remove("d-none");
    } //else {
      //  formCard.classList.add("d-none");
   // }
}, 5000);

//evento click del botón enviar
btnEnviar.addEventListener ("click", () =>{
    if (textEmail.value === ""){
        alert("El campo email debe completarse.")
    } else if(textArea.value === ""){
        alert("El campo mensaje debe completarse.")
    } else{
        
        //ALERT: El formulario se ha enviado correctamente.
        formCard.innerHTML += '<foother><div class="alert alert-light" role="alert">El formulario se ha enviado correctamente.</div></foother>';

        //Luego de 5'' oculto el form de contacto y reeplazo con el form de agradecimiento.
        setTimeout(() =>{
            formCard.classList.add("d-none");
            contenedor.innerHTML = '<div class="card" id="contact-form-Thank"><div class="card-header"><h3>¡Gracias por contactarnos!</h3></div><div class="card-body"><div class="mb-3"><p>A la brevedad será contactado.</p></div></div></div>';
        },5000);
         
        
    }
})

