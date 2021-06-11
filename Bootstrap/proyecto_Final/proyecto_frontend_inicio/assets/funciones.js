
// js  boton contacto
function abrir(){
    $('#ventana').modal('show');
  }

  //js tabla index.

 function traerDatos(){
    //Carga los datos que estan en el JSON (info.json) usando AJAX
    $.ajax({
		url: "datos.json"
	  }).done(function (resultado) {

		//Guarda el resultado en variables
		// resultado = JSON.parse(resultado);
		// reproducciones = resultado.reproduciones;
		canciones= resultado.canciones;

		// Ordena el JSON de las canciones por numero de reproducciones

		  canciones = canciones.sort(function(a,b){

			if(b.reproducciones > a.reproducciones){
				return 1;
			} else{
				if(b.reproducciones < a.reproducciones){
					return -1;
				}else{
					return 0;
				}
			}
		  });

		// Generar contenido dinamico
		var htmlTablaDinamica = '';

		//Selecciona los eventos que sean anteriores a la fecha actual del JSON
		for(var i = 0; i < 3; i++){

			htmlTablaDinamica += `
				<tr>
				<td id='color22'>${ canciones[i].nombre}  </td>
                <td>  <audio  src='${ canciones[i].ruta} ' controls='controls' type='audio/mpeg' preload='preload' > </audio>  </td>
                </tr>
				   `
		}

		 // Modifica el DOM agregando el html generado
	     document.getElementById("contenido").innerHTML = htmlTablaDinamica
	  })
}

$(document).ready(function(){
	traerDatos();
})



