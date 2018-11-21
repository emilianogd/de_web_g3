/*Funcion Cargar*/
$(document).ready(function(){    
    $('#btnCargar').click(function(){                       
        /*Obtener datos almacenados*/
        var email = localStorage.getItem("Email");
    });   
});

function validarContacto(){
    if(document.getElementById("nombrecontacto").value === ""){//Verifica que el usuario no ese vacio.
            alert("Nombre Vacio");
            return false;
        }else if(document.getElementById("emailcontacto").value === ""){//Verifica que el email no ese vacio.
            alert("Email Vacio");
            return false;
        }else if(document.getElementById("mensajecontacto").value === ""){//Verifica que el usuario sea el correcto.
            alert("Mensaje Vacio");
            return false;
        } alert ("Mensaje Enviado!");

    }
