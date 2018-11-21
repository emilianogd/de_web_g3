
/*Funcion Cargar*/
$(document).ready(function(){    
    $('#btnCargar').click(function(){                       
        /*Obtener datos almacenados*/
        var email = localStorage.getItem("Email");
        var contraseña  = localStorage.getItem("Contraseña");
    });   
});

function validar(){
    var nombre, apellido, email, celular, contrasenia, recontrasenia;
    nombre = document.getElementById("Nombre").value;//Asigno el dato ingresado en la variable correspondiente.
    apellido = document.getElementById("Apellido").value;//Asigno el dato ingresado en la variable correspondiente.
    email = document.getElementById("Email").value;//Asigno el dato ingresado en la variable correspondiente.
    celular = document.getElementById("Celular").value;//Asigno el dato ingresado en la variable correspondiente.
    contrasenia = document.getElementById("Contraseña").value;//Asigno el dato ingresado en la variable correspondiente.
    recontrasenia = document.getElementById("reContraseña").value;//Asigno el dato ingresado en la variable correspondiente.

    /*Guardando los datos en el LocalStorage*/
    localStorage.setItem("Nombre", nombre);
    localStorage.setItem("Apellido", apellido);
    localStorage.setItem("Email", email);
    localStorage.setItem("Celular", celular);
    localStorage.setItem("Contraseña", contrasenia);
    localStorage.setItem("reContraseña", recontrasenia);

    if(nombre=== ""){//Validar el nombre no este vacio.
        alert("Nombre vacio");
        return false;
    }else if(apellido === ""){//Validar el apellido no este vacio.
        alert("Apellido vacio");    
        return false;
    }else if(email === ""){//Validar el email no este vacio.
        alert("Email vacio");    
        return false;
    }else if(celular === ""){//Validar el celular no este vacio.
        alert("Celular vacio");    
        return false;
    }else if(contrasenia === ""){//Validar que la contraseña no este vacia.
        alert("Contraseña vacio");    
        return false;
    }else if(recontrasenia === ""){//Validar que repetir contraseña no este vacia.
        alert("Repetir Contraseña vacio");    
        return false;
    }else if(contrasenia !== recontrasenia){//Validar que las contraseñas ingresadas sean iguales.
        alert("Las contreseñas no coinciden");
        return false;
    }
    alert("¡Registro Exitoso!");
}


function validarInicio(){
    if(document.getElementById("Usuario").value === ""){//Verifica que el usuario no ese vacio.
        alert("Usuario Vacio");
        return false;
    }else if(document.getElementById("Usuario").value !== localStorage.Email){//Verifica que el usuario sea correcto.
        alert("El usuario no coincide con el registrado");
        return false;
    }else if(document.getElementById("Password").value === ""){//Verifica que la contraseña no sea vacia.
        alert("Contraseña Vacia");
        return false;
    }else if(document.getElementById("Password").value !== localStorage.Contraseña){//Verifica la contraseña sea correcta.
        alert("Las contreseñas no coinciden");
        return false;    
    }
    alert("¡Bienvenido!");
}

function validarCompra(){
    if(document.getElementById("compraNombre").value === ""){//Verifica que el usuario no ese vacio.
        alert("Nombre Vacio");
        return false;
    }else if(document.getElementById("compraEmail").value === ""){//Verifica que el email no ese vacio.
        alert("Email Vacio");
        return false;
    }else if(document.getElementById("compraNombre").value !== localStorage.Nombre){//Verifica que el usuario sea el correcto.
        alert("El nombre no coincide con el registrado");
        return false;
    }else if(document.getElementById("compraEmail").value !== localStorage.Email){//Verifica que el email sea el correcto.
        alert("El email no coincide con el registrado");
        return false;
    }
    alert("Compra Exitosa");
}