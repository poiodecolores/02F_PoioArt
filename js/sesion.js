// Una página web es un documento, este documento puede exhibirse en la ventana de un navegador
// o también como código fuente HTML. Pero en los dos casos, es el mismo documento. 
// El Modelo de Objeto de Documento (DOM) proporsiona otras formas de presentar, guardar y 
// manipular este mismo documento. 
// El dom es una representación completamente orientada al objeto de la página web y puede
// ser modificado con un lenguaje de Script como JavaScript. 

// Mi variable login1 va a ser igual al objeto que está en el documento HTML 
// que tiene el id "login1"

var login1 = document.getElementById("login1");
var login2 = document.getElementById("login2");
var loginUser = document.getElementById ("loginUser")


if(localStorage.getItem('name')){
    var usuarioTemp = localStorage.getItem('name');
    loginUser.innerHTML = usuarioTemp
}


function iniciarSesion() {
    var usuario= prompt("Ingresa tu nombre");
    
    //La propiedad de solo lectura de localStorage te permite acceder al objeto local
    //diferentes sesiones de navegación.

    // Se puede utilizar para acceder al espacio de almacenamiento local del origen actual.

    //Almacenamiento local para un dominio en particular
    localStorage.setItem('name', usuario)
    
    //innerHtml sirve para "escribir" dentro de un elemento HTML
    //DOMString
    loginUser.innerHTML= usuario;
}

function cerrarSesion() {
    loginUser.innerHTML= " ";
    localStorage.clear();
}

login1.onclick=function() {
    iniciarSesion();
}

login2.onclick=function () {
    cerrarSesion();
}