$( document ).ready(function() {
    $.ajax({
        type: "GET",
        url: 'https://ahorraseguros.mx/ws-autos/servicios/marcas', 
        dataType: "json",
        success: function(data){
        $.each(data,function(key, registro) {
            $("#marcas").append('<option value='+registro.text+'>'+registro.text+'</option>');
        });   
        },
        error: function(data) {
        alert('error');
        }
    });


    $(".cambio-marcas").change(function() {
        let marca = $(this).val()
        $('#modelos').empty();
        $('#descripcion').empty();
        $('#sub-descripcion').empty();
        if (marca != '') { 
            $.ajax({
                type: "GET",
                url: 'https://ahorraseguros.mx/ws-autos/servicios/modelos?aseguradora=&marca='+marca, 
                dataType: "json",
                success: function(data){
                    let value = ''
                    let text = 'Selecciona un modelo';
                        $("#modelos").append('<option value='+value+'>'+text+'</option>');
                    $.each(data,function(key, registro) {
                        $("#modelos").append('<option value='+registro.text+'>'+registro.text+'</option>');
                    });   
                },
                error: function(data) {
                    alert('error');
                }
            });
        }
    });

    $(".cambio-modelo").change(function() {
        let modelo = $(this).val()
        $('#descripcion').empty();
        $('#sub-descripcion').empty();
        if (modelo != '') { 
            $.ajax({
                type: "GET",
                url: 'https://ahorraseguros.mx/ws-autos/servicios/descripciones?aseguradora=&marca='+$('#marcas').val()+'&modelo='+modelo, 
                dataType: "json",
                success: function(data){
                    let value = ''
                    let text = 'Selecciona una descripción';
                    $("#descripcion").append('<option value='+value+'>'+text+'</option>');
                    $.each(data,function(key, registro) {
                        $("#descripcion").append('<option value='+registro.text+'>'+registro.text+'</option>');
                    });   
                },
                error: function(data) {
                    alert('error');
                }
            });
        }

    });

    $(".cambio-descr").change(function() {
        let descripcion = $(this).val()
        $('#sub-descripcion').empty();
        if (descripcion != '') {
            $.ajax({
                type: "GET",
                url: 'https://ahorraseguros.mx/ws-autos/servicios/subdescripciones?aseguradora=&marca='+$('#marcas').val()+'&modelo='+$('#modelos').val()+'&descripcion='+descripcion, 
                dataType: "json",
                success: function(data){
                    let value = ''
                    let text = 'Selecciona una subdescripción';
                    $("#sub-descripcion").append('<option value='+value+'>'+text+'</option>');
                    $.each(data,function(key, registro) {
                        $("#sub-descripcion").append('<option value='+registro.text+'>'+registro.text+'</option>');
                    });   
                },
                error: function(data) {
                    alert('error');
                }
            });
        }

    });
    $(".submit").click(function() {
      var cantidadinputs=0;
        $('input').each(function () {
         config[this.name] = this.value;
         if (this.value == "") {
            $('.'+this.name).css('display', 'block');
            cantidadinputs++
         }
        });
        if (cantidadinputs == 0) {
            $(".formulario").submit();
        }

    });

    $('select').each(function () {
     config[this.name] = this.value;
     if (this.value == "") {
        $('.'+this.name).css('display', 'block');
        cantidadinputs++
    }
    });
});