
document.getElementById("boton_Illustrator").addEventListener("click", function(){
    document.getElementById('porcentaje1').innerHTML = "80%";
});

document.getElementById("boton_Photoshop").addEventListener("click", function(){
    document.getElementById('porcentaje2').innerHTML = "70%";
});

document.getElementById("boton_InDesign").addEventListener("click", function(){
    document.getElementById('porcentaje3').innerHTML = "50%";
});

document.getElementById("boton_Corel").addEventListener("click", function(){
    document.getElementById('porcentaje4').innerHTML = "100%";
});

function enviarFormulario(){
    document.formulario.submit()
}