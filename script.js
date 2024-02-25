console.log("hola mundo")

const PESO = document.getElementById("peso");

let peso = (PESO.value);
let resultado = 0;
let flu = document.getElementById('flu');
let man = document.getElementById('man'); 

const BOTON = document.getElementById("calcular");
BOTON.addEventListener("click", calcularFlujo)
function calcularFlujo(){
    console.log("click en el botón");
    let peso = (PESO.value);
    console.log(peso);
    holiday(peso)
}

function holiday(peso){
    
    if (peso <=10){
        resultado =parseInt(peso) * 100;
        console.log(resultado);
    }
    else if (peso >10 && peso <=20) {;
        resultado = (((parseInt(peso) - 10) * 50)+1000);
        console.log(resultado);
    }
    else if (peso >20) {
        resultado= (((parseInt (peso) - 20)*20)+1500);
        console.log(resultado);
    }
    let mantenimiento = (resultado / 24) * 1.5;
    flu.innerHTML = `${resultado}cc/h`
    man.innerHTML = `m+m/2: ${mantenimiento}cc/h`
    man.style.display = "block"
    flu.style.display = "block"

    
}
