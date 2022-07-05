function validar() {
    let nombre = document.formulario.nombre.value;
    let rut = document.formulario.rut.value;
    let correo = document.formulario.correo.value;
    let telefono = document.formulario.telefono.value;
    let comuna = document.formulario.comuna.value;
    let fecha = document.formulario.fecha.value;
    let asunto = document.formulario.asunto.value;
    let mensaje = document.formulario.mensaje.value;

    //NOMBRE
    if (nombre.length < 4)
    {
         alert("Minimo debe tener 4 caracteres");
         document.formulario.nombre.focus();
         return false;
    }
    
    //RUT
    if ((rut.length > 10) || (rut.length < 9) || ((rut.search("-") == -1) || (rut.indexOf(".") != -1)))
        {
         alert("RUT debe tener entre 9 y 10 caracteres e incluir un guion y sin puntos");
         document.formulario.rut.focus();
         return false;
    }

     //TELEFONO
    if ((telefono.charAt(0)!='9') || (telefono.length!=9) || (telefono.indexOf("+") != -1) || (telefono.indexOf("-") != -1))
   {
       alert("El telefono debe comenzar con 9 y tener 9 caracteres y sin + ni -");
       document.formulario.telefono.focus();
       return false;
   }

    //ASUNTO
    if (asunto.length < 4)
    {
        alert("Minimo debe tener 4 caracteres");
        document.formulario.asunto.focus();
        return false;
    }

    //MENSAJE
    if (mensaje.length < 4 || mensaje.length > 500)
    {
        alert("Minimo debe tener 4 y máximo 500 caracteres");
        document.formulario.nombre.focus();
        return false;
    }

  
  
  

alert("Todo Correcto!!"+ "\nNombre: "+nombre+ "\nRUT: "+rut+"\nCorreo: "+correo+ "\nTeléfono: "+telefono+ "\nComuna: "+comuna+ "\nFecha: "+fecha+ "\nAsunto: "+asunto+ "\nMensaje: "+mensaje);
//si esta todo bien ingresado con esto le digo envie los datos al siguiente lugar
document.formulario.action = "contacto.html";
document.formulario.submit()= true;
}