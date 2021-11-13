$(document).ready(function(){
    $("#btn_guardar").click( function(){
        // VALORES DEL FORMULARIO
        let folio_id = $("#h_folio_id").val();
        let matricula = $("#matricula").val();
        let nombre = $("#nombre").val();
        let genero = $("#genero").val();
        let grado_escolar = $("#grado_escolar").val();
        
        let dat = {};
        dat.folio_id = folio_id;
        dat.matricula = matricula;
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