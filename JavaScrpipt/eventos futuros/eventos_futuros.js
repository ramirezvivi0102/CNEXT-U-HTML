function organizarEventos(eventos, fechaReferencia){
     var futuros = eventos.filter(x => x.fecha.getTime() >
    fechaReferencia.getTime())
     var pasados = eventos.filter(x => x.fecha.getTime() <=
    fechaReferencia.getTime())
     futuros = futuros.sort((a,b)=>{
     if (a.fecha.getTime() > b.fecha.getTime()){
     return 1;
     }
     if (a.fecha.getTime() < b.fecha.getTime()){
     return -1;
     }
     return 0;
     })
     pasados = pasados.sort((a,b)=>{
     if (a.fecha.getTime() > b.fecha.getTime()){
     return -1;
     }
     if (a.fecha.getTime() < b.fecha.getTime()){
     return 1;
     }
     return 0;
     })
     return [futuros,pasados];
    }
    var resultado = organizarEventos(eventos, new Date(2018, 3, 21));
    console.log(resultado[0]);
    console.log(resultado[1]);