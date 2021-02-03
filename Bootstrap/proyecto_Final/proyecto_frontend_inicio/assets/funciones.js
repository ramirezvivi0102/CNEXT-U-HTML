
//  boton contacto
function abrir(){
    $('#ventana').modal('show');
  }

function traerDatos(){
    //Carga los datos que estan en el JSON (info.json) usando AJAX
    $.ajax({
		url: "datos.json",
		method: "GET"
	  }).done(function (resultado) {

		//Guarda el resultado en variables
		hoy = resultado.fechaActual;
		canciones= resultado.canciones;

		//Selecciona los eventos que sean anteriores a la fecha actual del JSON
		for(var i = 0; i < canciones.length; i++){
		  if (canciones[i].fecha < hoy){
			canciones.push(canciones[i]);
		  }
		}

		//Ordena los eventos segun la fecha (los mas recientes primero)
		canciones = canciones.sort(function(x,y){
		  if (x.fecha < y.fecha){
			return 1;
		  }
		  return -1;
		});

		//Crea un string que contenga el HTML que describe el detalle del evento
		var html = "cancines.html"

		//Recorre el arreglo y concatena el HTML para cada evento
	  //   for(var j = 0; j < canciones.length; j++){
	  //     html += `
	  //             <h2>${canciones[j].nombre}</h2>
	  //             <p>${canciones[j].ruta}</p>
	  //             <p>Reproducciones: ${canciones[j].reproducciones}</p
	  //             <p>Icono: ${canciones[j].icono}</p>


	  //   }

		//Modifica el DOM agregando el html generado
		//document.getElementById("canciones").innerHTML = html

	  })
};


$(document).ready(function () {
	traerDatos()
});

console.log('correcto');



