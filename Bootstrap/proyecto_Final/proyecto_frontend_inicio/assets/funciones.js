
//  boton contacto 
function abrir(){
    $('#ventana').modal('show');
  }
  
 
console.log('correcto');
  

function traerDatos(){

  var peticion = new XMLHttpRequest();
  peticion.open('GET','http://127.0.0.1:5501/proyecto_Final/proyecto_frontend_inicio/datos.json');
  peticion.onload = function(){
      if (peticion.status == 200){

        console.long(peticion.response);

      };
  };
  peticion.send();
};





