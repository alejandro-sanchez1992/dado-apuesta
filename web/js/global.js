$(function(){
    $("#submit").attr("disabled","disabled");
    $("#submit").prop("disabled", true);

    $("input:radio[name=opciones1], input:radio[name=opciones2], input:radio[name=opciones3], input:radio[name=opciones4]").on("change", function(){
        if ( $('input:radio[name=opciones1]:checked').val() == 1 
            || $('input:radio[name=opciones2]:checked').val() == 1
            || $('input:radio[name=opciones3]:checked').val() == 1
            || $('input:radio[name=opciones4]:checked').val() == 1 ) {
            $('button#submit').prop('disabled', false);
            $("#submit").removeAttr("disabled");   
        }
        else {
            $("#submit").attr("disabled","disabled");
            $('button#submit').prop('disabled', true);
        }
    });

    $("#submit").click(function( event ){
            event.preventDefault();
            var nombre1 = $("#name1").val();
            var apuesta1 = $("#apuesta1").val();
            var puntos1 = $("#puntos1").val();
            var opciones1 = $('input:radio[name=opciones1]:checked').val()
            var valor1 = $("#valor1").html();

            var nombre2 = $("#name2").val();
            var apuesta2 = $("#apuesta2").val();
            var puntos2 = $("#puntos2").val();
            var opciones2 = $('input:radio[name=opciones2]:checked').val()
            var valor2 = $("#valor2").html();

            var nombre3 = $("#name3").val();
            var apuesta3 = $("#apuesta3").val();
            var puntos3 = $("#puntos3").val();
            var opciones3 = $('input:radio[name=opciones3]:checked').val()
            var valor3 = $("#valor3").html();

            var nombre4 = $("#name4").val();
            var apuesta4 = $("#apuesta4").val();
            var puntos4 = $("#puntos4").val();
            var opciones4 = $('input:radio[name=opciones4]:checked').val()
            var valor4 = $("#valor4").html();


            if (opciones1 == 1 || opciones2 == 1 || opciones3 == 1 || opciones4 == 1 ) {
                dados();
                $.ajax({
                    type : "POST",
                    url : "servletDado",
                    data : {
                        nombre1: nombre1,
                        apuesta1: apuesta1,
                        puntos1: puntos1,
                        opciones1: opciones1,
                        valor1: valor1,
                        nombre2: nombre2,
                        apuesta2: apuesta2,
                        puntos2: puntos2,
                        opciones2: opciones2,
                        valor2: valor2,
                        nombre3: nombre3,
                        apuesta3: apuesta3,
                        puntos3: puntos3,
                        opciones3: opciones3,
                        valor3: valor3,
                        nombre4: nombre4,
                        apuesta4: apuesta1,
                        puntos4: puntos4,
                        opciones4: opciones4,
                        valor4: valor4,
                    },
                    success : function(data) {
                        //var myJsonString = $.parseJSON(data);
                        $(".respuesta").html(data);
                    }
                });
            }
            else {
                alert("Debe de Ingresar los campos");
            }
    });
});