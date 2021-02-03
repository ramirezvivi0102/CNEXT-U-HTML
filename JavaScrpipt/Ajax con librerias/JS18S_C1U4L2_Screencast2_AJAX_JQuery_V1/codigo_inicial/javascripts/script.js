// function cargarDatos() {
//   $.ajax({
//     url: "datos.json"
//   }).done(function(respuesta){
//     // console.log('respuesta: ', respuesta);
//     $("#contenido").html("Hola: " + respuesta.nombre);
//   });
// };


function cargarDatos() {
  $.ajax({
    url: "http://127.0.0.1:5500/Ajax%20con%20librerias/JS18S_C1U4L2_Screencast2_AJAX_JQuery_V1/codigo_inicial/datos.json"
  }).done(function(respuesta){
    $("#contenido").html("Hola: " + respuesta.nombre);
    $("#contenido").slideDown("slow");
  });
};


$( document ).ready(function() {
  $("#contenido").hide();

  $("button.cargar").click(function(){
    cargarDatos();
  })

});
