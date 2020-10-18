function validarFormulario() {


    // La propiedad value establece o devuelve el valor del atributo value de
    // un campo numerico. El atributo de valor especifica el valor predeterminado,
    // o el valor que un usuario escribe. (O un valor establecido por un script)

    var txtNombre = document.getElementById ('nombre').value;
    var txtTelefono = document.getElementById ('telefono').value;
    var txtCorreo = document.getElementById('correo').value;
    var txtMensaje = document.getElementById('mensaje').value;

    if (txtNombre == null || txtNombre.length == 0) {
        alert('ERROR: El campo Nombre no debe ir vacío ni incompleto');
        return false;
    } else{
        if (/^([0-9])*$/.test(txtNombre)) {
            alert('ERROR: El campo "Nombre" no debe tener números');
            return false;
      } else {

        // Si no son letras, negación:
        if (!(/^[A-Za-z\_\-\.\s\xF1\xD1]+$/.test(txtNombre))){
            alert('ERROR: El campo "Nombre" no debe tener carácteres especiales');
            return false;

        }

      }
    
    }
   
    

    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(txtCorreo))){ 
    alert('ERROR: Debe escribir un correo válido');
    return false;
          


    }

    if (txtTelefono == null || txtTelefono.length  ==  0){

        alert ('ERROR: El campo "Teléfono" no debe ir vacio ni llevar letras');
        return false;
    } else{

        // Evalúa un argumento para determinar si es un numero:

        if (isNaN(txtTelefono)){
            alert('ERROR: El campo "Teléfono" no debe llevar letras');
            return false;
        }
    }

    if (txtMensaje == null || txtMensaje.length == 0) {
        alert('ERROR: El campo "Mensaje" no puede ir vacío');
        return false;

    }


    alert('Gracias por tu información :)')
    return true

}