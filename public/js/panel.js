$(document).ready(function(){
    opciones_start();
    anchoVentana();
});

$("#d_b_menu").click(function(){
    anchoVentana();
});

$("#btn_filtrar").click( function(){
    opciones_start('f');
})

function opciones_start(valor){
    let dat = {};
    if(valor != ''){
        let filtro = $("#filtro_grado_escolar").val();
        dat.filtro = filtro;
    }

    $.ajax({
        method: 'POST',
        url: '/api/getData',
        data: dat,
        success: function(response){

            $("#panel_container").html("");
            let contenedor = document.getElementById("panel_container");
            let qty_reg = response.count;
            let i=0;

            let div1 = document.createElement("div"); 

            contenedor.appendChild(div1);

            let table = document.createElement("table");
            let thead = document.createElement("thead");
            let th1 = document.createElement("th");
            let th2 = document.createElement("th");
            let th3 = document.createElement("th");
            let th4 = document.createElement("th");
            let th5 = document.createElement("th");
            let tbody = document.createElement("tbody");

            div1.className = "table-responsive";
            table.className = "table";

            th1.textContent = "Matricula";
            th2.textContent = "Nombre";
            th3.textContent = "Genero";
            th4.textContent = "Grado Escolar";
            th5.textContent = "Estatus";

            div1.appendChild(table);
            table.appendChild(thead);
            thead.appendChild(th1);
            thead.appendChild(th2);
            thead.appendChild(th3);
            thead.appendChild(th4);
            thead.appendChild(th5);
            table.appendChild(tbody);
            
            // BUCLE
            while(i<qty_reg)
            {
                let matricula = response.data[i].matricula;
                let nombre = response.data[i].nombre;
                let genero = response.data[i].genero;
                let grado_escolar = response.data[i].grado_escolar;
                let estatus = response.data[i].estatus;

                if(estatus == 1){
                    estatus = "Activo";
                    estatus_class = "table-success";
                }else{
                    estatus = "Inactivo";
                    estatus_class = "table-secondary";
                }
                
                let tr = document.createElement("tr");
                tr.className = estatus_class;
                

                let tdd1 = document.createElement("td");
                let tdd2 = document.createElement("td");
                let tdd3 = document.createElement("td");
                let tdd4 = document.createElement("td");
                let tdd5 = document.createElement("td");

                tdd1.className = "td-cont";
                tdd2.className = "td-cont";
                tdd5.className = "td-cont";
                tdd3.className = "td-cont";
                tdd4.className = "td-cont";
                
                tdd1.textContent = matricula; 
                tdd2.textContent = nombre; 
                tdd3.textContent = genero; 
                tdd4.textContent = grado_escolar; 
                tdd5.textContent = estatus; 
                
                tbody.appendChild(tr);
                tr.appendChild(tdd1);
                tr.appendChild(tdd2);
                tr.appendChild(tdd3);
                tr.appendChild(tdd4);
                tr.appendChild(tdd5);

                i++;
            }
        }
    });
}


$("#d_opcion_menu_inicio").click(function(){ // panel principal o inicial (consulta)
    $("#d_panel_buscar").show();
    opciones_start();
    anchoVentana();
});

$("#d_opcion_menu_registro").click(function(){ // Registro
    $("#d_panel_buscar").hide();
    $("#panel_container").load("registro.html");
    anchoVentana();
});

$("#d_opcion_menu_edicion").click(function(){ // Edicion
    $("#d_panel_buscar").hide();
    $("#panel_container").load("editar.html");
    anchoVentana();
});

$("#d_opcion_menu_eliminar").click(function(){ // Eliminar
    $("#d_panel_buscar").hide();
    $("#panel_container").load("eliminar.html");
    anchoVentana();
});