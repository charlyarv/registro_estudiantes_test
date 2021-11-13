$(document).ready(function(){
    $("#btn_buscar").click( function(){
        let matricula = $("#matricula").val();

        let dat = {};
        dat.matricula = matricula;

        $.ajax({
            method: 'POST',
            url: '/api/getDataEdit',
            data: dat,
            success: function(response){
                if(response.data.length == 0){
                    alert("No existe registro");
                }
                else{
                    let folio_id = response.data[0].folio_id; 
                    
                    let nombre = response.data[0].nombre;
                    let genero = response.data[0].genero;
                    let grado_escolar = response.data[0].grado_escolar;
    
                    $("#nombre").val(nombre);
                    let genero_select = document.getElementById('genero'); 
                    genero_select.value = genero; 
                    $("#grado_escolar").val(grado_escolar);
                    $("#h_folio_id").val(folio_id);
                }
            },
            error: function(){
                alert("Hubo un error al encontrar registro");
            }
        });
    });



    $("#btn_guardar").click( function(){
        // VALORES DEL FORMULARIO
        let folio_id = $("#h_folio_id").val();
        let nombre = $("#nombre").val();
        let genero = $("#genero").val();
        let grado_escolar = $("#grado_escolar").val();
        
        let dat = {};
        dat.folio_id = folio_id;
        dat.nombre = nombre;
        dat.genero = genero;
        dat.grado_escolar = grado_escolar;

        $.ajax({
            method: 'POST',
            url: '/api/setData',
            data: dat,
            success: function(response){
                let valor = '';
                valor = response.data.idRegistrado
                
                if(valor != ''){
                    alert("Registro Exitoso");
                }
                else{
                    alert("Error al registrar");
                }
                opciones_start();
            },
            error: function(){
                alert("Hubo un error al registrar");
            }
        });
    });
});