console.log("hola mundo")

const PESO = document.getElementById("peso");

let peso = (PESO.value);
let resultado = 0;
let flu = document.getElementById('flu');
let man = document.getElementById('man'); 
let err = document.getElementById('error');
let met = document.getElementById('metodo');

const BOTON = document.getElementById("calcular");
BOTON.addEventListener("click", calcularFlujo)
function calcularFlujo(){
    console.log("click en el botón");
    let peso = (PESO.value);
    console.log(peso);
    if (peso <=30){
        holiday(peso)
} else if (peso > 30){
    superficieCorporal(peso);
} else {
    error();
}
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
    else if (peso >20 && peso <=30) {
        resultado= (((parseInt(peso) - 20)*20)+1500);
        console.log(resultado);
    }
    if (resultado) {
    
        let mantenimiento = parseFloat((resultado / 24) * 1.5).toFixed(2);
        met.innerHTML = "Método utilizado: Holliday-Segar"
        flu.innerHTML = `Manteniminento: ${resultado}cc/h`
        man.innerHTML = `m+m/2: ${mantenimiento}cc/h`
        met.style.display = "block"
        man.style.display = "block"
        flu.style.display = "block"
        err.style.display = "none"
    }
    else {
        error()
    }    
        
    
}

function superficieCorporal(peso) {
    if (peso >30){
        superfcorp= ((peso *4)+7) / (peso + 90)
        resultado1 = parseFloat(superfcorp * 1500).toFixed(2)
        resultado2 = parseFloat(superfcorp * 2000).toFixed(2)
    }
    if(resultado1 && resultado2){
        met.innerHTML = "Método utilizado: Superficie Corporal"
        flu.innerHTML = `Superficie Corporal SC * 1500: ${resultado1}cc/h`
        man.innerHTML = `Superficie Corporal SC * 2000: ${resultado2}cc/h`
        met.style.display = "block"
        man.style.display = "block"
        flu.style.display = "block"
        err.style.display = "none"
    } 
    else {
        error()
    } 
}

function error() {
    err.style.display = "block"
    man.style.display = "none"
    flu.style.display = "none"
    met.style.display = "none"
}