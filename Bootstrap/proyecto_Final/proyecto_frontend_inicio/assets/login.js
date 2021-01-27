function limpiarErrores(){
    var errores = document.getElementsByClassName("error");
    for(var i = 0; i < errores.length; i++){
      errores[i].innerHTML = "";
    }
  }
  
  function validar(formulario) {
  
    limpiarErrores();
  
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(formulario.email.value)) {
      document.getElementById("errorEmail").innerText = "Campo inválido";
      formulario.email.focus();
      return false;
    }
  
    if (formulario.contrasena.value.trim().length == 0) {
      document.getElementById("errorContrasena").innerText = "Campo obligatorio";
      formulario.contrasena.focus();
      return false;
    }
  
    if (formulario.contrasena.value.trim().length < 8) {
      document.getElementById("errorContrasena").innerText = "Campo inválido (Mínimo 8 caracteres)";
      formulario.contrasena.focus();
      return false;
    }

    alert("Datos enviados");
  
    return true;
  }
  