function anchoVentana(){
    let ancho = screen.width;
    if(ancho < 950 ){
        $("#panel_menu").toggle(100);
    }
    else{
        $("#panel_menu").show(100);
    }
}