﻿$(function () {
    var validCap = false;
    var numberrand = Math.floor((Math.random() * 100) + 1);
    $('#lblValorAleatorio').html(numberrand);
    $("#slider").slider({
        orientation: "horizontal",
        range: "min",
        min: 0,
        max: 100,
        value: 0,
        slide: function (event, ui) {
            $("#amount").val(ui.value);
            if ($("#amount").val() == $('#lblValorAleatorio').html()) {
                $('#divCapcha').css('background-color', 'green');
                validCap = true;
            }
            else { $('#divCapcha').css('background-color', ''); validCap = false; }
        }
    });
    $("#amount").val($("#slider").slider("value"));

    $('#frmContact').validate({ // initialize plugin
        rules: {
            name: "required",
            message: "required",
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            name: "Especifica tu nombre",
            message: "Escribe un mensaje",
            email: {
                required: "Necesitamos tu email para contactarnos contigo",
                email: "Tu email debe tener el siguiente formato dominio@..."
            }
        }
        ,
        // your rules & options,
        submitHandler: function (form) {
            // your ajax would go here
            if (validCap) {
                sendMail();
            }
            return false;  // blocks regular submit since you have ajax
        },
        showErrors: function (errorMap, errorList) {
            this.defaultShowErrors();
        },
        errorContainer: "#divSummaryErrors",
        errorLabelContainer: "#divSummaryErrors ul",
        wrapper: "li",
        errorClass : "authError"
    });

});

function sendMail() {
    $.ajax({
        method: "POST",
        url: "SendMail",
        data: { name: $('#name').val(), email: $('#email').val(), textMessage: $('#message').val() },
        success: function(msg){
        alert( "Tu mensaje ha sido enviado" );
    },
    //Manejo del ERROR
    error: function(XMLHttpRequest, textStatus, errorThrown) {
        alert("Lo sentimos, tu mensaje no pudo ser enviado, por favor intenta mas tarde.");
        //Se puede obtener informacion útil inspecionando el Objeto XMLHttpRequest
        console.log(XMLHttpRequest);
    }
    })  
}