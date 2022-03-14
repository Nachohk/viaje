    
$(document).ready(function(){


    $("#pan").click(function(){
        $ ("#qw").toggle(1000);
    });


    $("#tira").click(function(){
        $ ("#misu").toggle(1000);
    });   
     

    $("#plat").click(function(){
        $ ("#teada").toggle(1000);
    });   
    
    $("#enviar").click(function(){
        alert("El correo fue enviado correctamente");
     
    });

    $("#qwe2").dblclick(function(){
        $(this).css("color", "red")
    
    });

    $("#qwe").dblclick(function(){
            $(this).css("color", "red")
    
    });

});
