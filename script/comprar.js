var DatosJuegos = {
    "Juegos" : [{
        "nombre" : "Call of Duty - MW3",
        "value" : "Juego1",
        "precio" : 950
    },{ 
        "nombre" : "Battlefield V",
        "value" : "Juego2",
        "precio" : 1250
    },{ 
        "nombre" : "Grand Theft Auto V",
        "value" : "Juego3",
        "precio" : 1500
    },{ 
        "nombre" : "Skyrim",
        "value" : "Juego4",
        "precio" : 650
    },{
        "nombre" : "Megaman",
        "value" : "Juego5",
        "precio" : 750
    },{
        "nombre" : "Aleatorio",
        "value" : "Juego6",
        "precio" : 500
    }]
}

var selectElement = document.getElementById("selectJuego");
var listaJuegos = DatosJuegos.Juegos;
var option;

for (let i = 0; i < listaJuegos.length; i++) {
    const juego = listaJuegos[i];

    let option = document.createElement("option");
    option.value = juego.value;
    option.innerHTML = juego.nombre;
    selectElement.appendChild(option);
}

var cantidadElement = document.getElementById("cantidadJuegos");

cantidadElement = function (){//Compara el juego seleccionada con los de la base de datos anterior..
    if(document.getElementById("selectJuego").value==="Juego1"){
        var precioid = DatosJuegos.Juegos[0].precio*document.getElementById("cantidadJuegos").value;
        document.getElementById("calculoSinI").innerHTML = precioid;

    }else if(document.getElementById("selectJuego").value==="Juego2"){
        var precioid = DatosJuegos.Juegos[1].precio*document.getElementById("cantidadJuegos").value;
        document.getElementById("calculoSinI").innerHTML = precioid;
    
    }else if(document.getElementById("selectJuego").value==="Juego3"){
        var precioid = DatosJuegos.Juegos[2].precio*document.getElementById("cantidadJuegos").value;
        document.getElementById("calculoSinI").innerHTML = precioid;
    
    }else if(document.getElementById("selectJuego").value==="Juego4"){
        var precioid = DatosJuegos.Juegos[3].precio*document.getElementById("cantidadJuegos").value;
        document.getElementById("calculoSinI").innerHTML = precioid;
    
    }else if(document.getElementById("selectJuego").value==="Juego5"){
        var precioid = DatosJuegos.Juegos[4].precio*document.getElementById("cantidadJuegos").value;
        document.getElementById("calculoSinI").innerHTML = precioid;
    
    }else if(document.getElementById("selectJuego").value==="Juego6"){
        var precioid = DatosJuegos.Juegos[5].precio*document.getElementById("cantidadJuegos").value;
        document.getElementById("calculoSinI").innerHTML = precioid;
    }

    if(document.getElementById("selectFormato").value === "fisico"){//Verifica el tipo de envio segun la opcion.
        if(document.getElementById("selectEnvio").value === "comun"){
            var envio = precioid * 0.005;
            document.getElementById("precioEnvio").innerHTML = envio;
            var precioParcial = envio + precioid;
            var iva = precioParcial * 0.22;
            document.getElementById("precioIVA").innerHTML = iva;
            var precioTotal = iva + envio + precioid;
            document.getElementById("precioTotal").innerHTML = precioTotal;
        }
        else if(document.getElementById("selectEnvio").value === "especial"){
            var envio = precioid * 0.02;
            document.getElementById("precioEnvio").innerHTML = envio;
            var precioParcial = envio + precioid;
            var iva = precioParcial * 0.22;
            document.getElementById("precioIVA").innerHTML = iva;
            var precioTotal = iva + envio + precioid;
            document.getElementById("precioTotal").innerHTML = precioTotal;
        }
        else if(document.getElementById("selectEnvio").value === "premium"){
            var envio = precioid * 0.05;
            document.getElementById("precioEnvio").innerHTML = envio;
            var precioParcial = envio + precioid;
            var iva = precioParcial * 0.22;
            document.getElementById("precioIVA").innerHTML = iva;
            var precioTotal = iva + envio + precioid;
            document.getElementById("precioTotal").innerHTML = precioTotal;
        }
    }
    else if(document.getElementById("selectFormato").value === "digital"){
        document.getElementById("precioEnvio").innerHTML = 0;    
        var precioParcial = precioid;
        var iva = precioParcial * 0.22;
        document.getElementById("precioIVA").innerHTML = iva;   
        var precioTotal = iva + precioid;
        document.getElementById("precioTotal").innerHTML = precioTotal;
    }
}

function mostrar(id) {
    if (id == "fisico") {
        $("#fisico").show();
    }//Si el juego es fisico se muestra un nuevo desplegable con opciones de envio.
    if(id == "digital"){
        $("#fisico").hide();
    }//Si el juego es digital no mustra las opciones de envio.
}