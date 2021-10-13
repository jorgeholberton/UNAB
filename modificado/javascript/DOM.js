function agregarTexto()
{
    var elementodiv=document.getElementById("contenedor");
    var elementoinput=document.getElementById("mi_texto");

    var texto=elementoinput.value;
    elementodiv.innerText=texto;
}