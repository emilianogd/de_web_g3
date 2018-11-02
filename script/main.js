$(document).ready(function(){
    var imgItems = $('.slider li ').length;//Numero de Slider
    var imgPos = 1;

    for(i = 1 ; i <= imgItems ; i++){//Ciclo para los slider
        $('.pagination').append('<li><span class="fa fa-circle"></span></li>');
    }

    $('.slider li').hide();//Ocultar los slider
    $('.slider li:first').show();//Mostrar el primer slider
    $('.pagination li:first').css({'color': '#CD6E2E'});//Dar estilo al primer punto de los slider

    //funcion para que los puntos cambien de slider
    $('.pagination li').click(pagination);
    $('.right span').click(nextSlider);
    $('.left span').click(prevSlider);

    setInterval(function(){
        nextSlider();
    }, 4000);

    //funciones ---------
    function pagination(){
        var paginationPos = $(this).index()+1;//variable para guardar el numero de punto que cliceas
        $('.slider li').hide();//ocultamos todos los slider
        $('.slider li:nth-child('+ paginationPos +')').fadeIn();//mostramos el slide seleccionado
        //estilo a la paginacion seleccionada
        $('.pagination li').css({'color': '#858585'});
        $(this).css({'color': '#CD6E2E'});
        imgPos = paginationPos;
    }

    function nextSlider(){        
        if(imgPos >= imgItems){
            imgPos = 1;
        }else{
            imgPos++
        }
        $('.pagination li').css({'color': '#858585'});
        $('.pagination li:nth-child('+ imgPos +')').css({'color': '#CD6E2E'});
        $('.slider li').hide();//ocultamos todos los slider
        $('.slider li:nth-child('+  imgPos +')').fadeIn(); //mostramos el slide siguiente
    }

    function prevSlider(){
        if(imgPos <= 1){
            imgPos = 5;
        }else{
            imgPos--;
        }
        $('.pagination li').css({'color': '#858585'});
        $('.pagination li:nth-child('+ imgPos +')').css({'color': '#CD6E2E'});
        $('.slider li').hide();//ocultamos todos los slider
        $('.slider li:nth-child('+  imgPos +')').fadeIn(); //mostramos el slide siguiente
    }
});