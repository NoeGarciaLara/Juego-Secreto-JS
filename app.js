let numeroSecreto = 0;
let intentos = 1;
let listaNumeros = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if(numeroUsuario===numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos===1) ? 'vez': 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if (numeroUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El numero es menor');
        }else{
            asignarTextoElemento('p', 'El numero es mayor');
        }
        intentos++;
        limpiarCaja();
    } 
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
    return;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
   if(listaNumeros.length == numeroMaximo){
    asignarTextoElemento('p','ya se sortearon todos los numeros posibles');
   }else{
   
    if (listaNumeros.includes(numeroGenerado)){
        return generarNumeroSecreto();
    }else{
        listaNumeros.push(numeroGenerado);
        return numeroGenerado;
    }
   }
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    return;
}

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled','true');
    return;
}

condicionesIniciales();