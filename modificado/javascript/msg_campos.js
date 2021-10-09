/*var input = document.getElementById('nomb');
input.oninvalid = function(event) { event.target.setCustomValidity('Nombre de usuario. Campo Obligatorio, entre 3-40 carácteres Sólo se permiten letras mayúsculas y minúsculas'); }

var input = document.getElementById('ape');
input.oninvalid = function(event) { event.target.setCustomValidity('Apellido de usuario. Campo Obligatorio, entre 3-40 carácteres Sólo se permiten letras mayúsculas y minúsculas'); }*/

function metricas() 
{
    let combo=document.getElementById('combo').value;
    let codHTML='<strong>Estatura en Pulgadas:</strong> <abbr title="Obligatorio" aria-label="required">*</abbr>';
   
    if(combo==1)
    {
       document.getElementById('lbl_est').innerHTML='<strong>Estatura en Metros:</strong> <abbr title="Obligatorio" aria-label="required">*</abbr>';
       document.getElementById('lbl_peso').innerHTML='<strong>Peso en Kilos:</strong> <abbr title="Obligatorio" aria-label="required">*</abbr>';
    }
    else
    {
       document.getElementById('lbl_est').innerHTML='<strong>Estatura en Pulgadas:</strong> <abbr title="Obligatorio" aria-label="required">*</abbr>';
       document.getElementById('lbl_peso').innerHTML='<strong>Peso en Libras:</strong> <abbr title="Obligatorio" aria-label="required">*</abbr>';
    }
}