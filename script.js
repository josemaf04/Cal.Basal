console.log("hola mundo")

const PESO = document.getElementById("peso");

let peso = (PESO.value);

const BOTON = document.getElementById("calcular");
BOTON.addEventListener("click", calcularFlujo)
function calcularFlujo(){
    console.log("click en el botón");
    let peso = (PESO.value);
    console.log(peso);
    holiday()
}

function holiday(){
    if (PESO.value <=10){
        resultado =parseInt (PESO.value) * 100;
        console.log(resultado);
    }
    else if (PESO.value >10 && PESO.value <=20) {;
        resultado =parseInt (((PESO.value - 10) * 50)+1000);
        console.log(resultado);
    }
    else if (PESO.value >20) {
        resultado=parseInt (((PESO.value - 20)*20)+1500);
        console.log(resultado);
    }
}
