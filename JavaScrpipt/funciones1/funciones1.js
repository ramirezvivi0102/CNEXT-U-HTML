function encabezadoEvento(nombre, lugar){
     return `Evento: ${nombre}. Lugar: ${lugar}`;
   }
   
   console.log(encabezadoEvento("Intercambio de Libros", "Biblioteca"));
   console.log(encabezadoEvento("Lectura de Poemas", "Sala A"));
   
   function limpiarNombreParticipante(nombre, apellidos){
     return `${apellidos.trim().toUpperCase()}, ${nombre.trim().toLowerCase()}`;
   }
   
   console.log(limpiarNombreParticipante("    Luis", "Castro   "));
   console.log(limpiarNombreParticipante(" ANA", "MENDEZ   "));