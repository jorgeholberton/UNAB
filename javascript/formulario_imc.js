/*var input = document.getElementById('nomb');
input.oninvalid = function(event) { event.target.setCustomValidity('Nombre de usuario. Obligatorio, entre 3-40 carácteres Sólo se permiten letras mayúsculas y minúsculas'); }

var input = document.getElementById('ape');
input.oninvalid = function(event) { event.target.setCustomValidity('Apellido de usuario. Obligatorio, entre 3-40 carácteres Sólo se permiten letras mayúsculas y minúsculas'); }*/

function validateEmailAddress(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
    }
    function validate() {
    $("#result").text("");
    var emailaddress = $("#email").val();
    if (validateEmailAddress(emailaddress)) 
    {
    $("#result").text(emailaddress + " is valid :)");
    $("#result").css("color", "green");
    } 
    else 
    {
    $("#result").text(emailaddress + " is not correct, please retry:(");
    $("#result").css("color", "red");
    }
    return false;
    }
    $("#validate").bind("click", validate);