let jugador1, jugador2;
let panelInicio, panelRondas;
let rondas = 0;
let pGanJ1 = 0;
let pGanJ2 = 0;
let panelResultados = document.getElementById('resultados');
let botonDeNuevo = document.getElementById('otros');
let botonEmpezar = document.getElementById('empezar');
let texto;
let eleccionJugador1;
let eleccionJugador2;
let H1;

const elegir = {
    'piedra':{
        'piedra': 'empate',
        'papel': 'perdedor',
        'tijera': 'ganador'
    },

    'papel' :{
        'piedra': 'ganador',
        'papel': 'empate',
        'tijera': 'perdedor'

    },

    'tijera':{
        'piedra': 'perdedor',
        'papel': 'ganador',
        'tijera': 'empate'

    },
}

function iniciar(){
    
    //capturamos los nombres de los jugadores
    jugador1 = document.getElementById('jugador1').value;
    jugador2 = document.getElementById('jugador2').value;
 
    if(jugador1 !=='' && jugador2 !=='' ){
  //Cambiamos los estilos de los paneles para mostrar u ocultar
  panelInicio = document.getElementById('inicio');
  panelRondas = document.getElementById('rondas');

  panelInicio.classList.remove('visible');
  panelInicio.classList.add('invisible');
  panelRondas.classList.remove('invisible');
  panelRondas.classList.add('visible');
  //incremento contador de rondas
//incremento contador de rondas
rondas ++;
document.getElementById('contadorRonda').innerText = 'Ronda #' + rondas;

    //cargar panel del jugador 1
  document.getElementById('tituloJ1').innerText='Turno de' +'   '+ jugador1;
  document.getElementById('tituloJ2').innerText='Turno de' +'   '+ jugador2;
  document.getElementById('respuestaJ1').classList.remove('invisible');
  document.getElementById('respuestaJ1').classList.add('visible');
  document.getElementById('contadorRonda').innerText = 'Ronda #' + rondas;
  document.getElementById('puntosJ1').innerText= `${jugador1}:${pGanJ1}`; 
  document.getElementById('puntosJ2').innerText= `${jugador2}:${pGanJ2}`; 

    }
    else
    {

        alert("LLENE AMBOS CAMPOS CON UN NOMBRE O APODO");
    }
  
}

function seleccion(opcion, jugador){
    //agregamos respuesta del jugador
    document.getElementById('empezar').innerText= "Proxima";
    botonDeNuevo.classList.remove('visible');
    botonDeNuevo.classList.add('invisible');
    //validamos en que jugador estamos
    if(jugador === 1){
        
        document.getElementById('respuestaJ2').classList.remove('invisible');
        document.getElementById('respuestaJ2').classList.add('visible');
        document.getElementById('respuestaJ1').classList.remove('visible');
        document.getElementById('respuestaJ1').classList.add('invisible');
        eleccionJugador1 = opcion;
    }else{
      
        document.getElementById('respuestaJ2').classList.remove('visible');
        document.getElementById('respuestaJ2').classList.add('invisible');
        panelResultados.classList.remove('invisible');
        panelResultados.classList.add('visible');
        panelRondas.classList.remove('visible');
        panelRondas.classList.add('invisible');
        eleccionJugador2 = opcion;
        validarGanador(eleccionJugador1,eleccionJugador2);
        
    }
    

}

// validacion
function validarGanador(eleccionJugador1,eleccionJugador2){

    let resultado;
//ejecutamos logica del juego 
switch(elegir[eleccionJugador1][eleccionJugador2]){
    case 'ganador':
    resultado = 'Gano:  '+ jugador1;
    pGanJ1++;
    break;
  case 'perdedor':
    resultado = 'Gano:  '+ jugador2;
    pGanJ2++;
    break;
  default:
    resultado = "Empate";
    break;
}

if(rondas<3){
    
  
    document.getElementById('contadorRondaRes').innerText = 'Resultado Ronda #' + rondas;
    document.getElementById('ganador').innerText = resultado;
    document.getElementById('puntosJ1').innerText= jugador1 +': ' + pGanJ1; 
    document.getElementById('puntosJ2').innerText=  jugador2+': ' + pGanJ2; 
    rondas++;
    document.getElementById('contadorRonda').innerText = 'Ronda #' + rondas;
    
}else{
    document.getElementById('contadorRondaRes').innerText = 'Resultado Ronda #' + rondas;
    document.getElementById('contadorRonda').innerText = ' Ronda #' + rondas;
  //  document.getElementById('ganador').innerText = resultado;
    H1 = document.createElement('h1');

    if(pGanJ1 > pGanJ2){
        texto = document.createTextNode('Gano:'+' '+jugador1);
    }else if(pGanJ2 > pGanJ1){
        texto = document.createTextNode('Gano:'+' '+jugador2);
    }else {
        texto = document.createTextNode('empate');
    }
    H1.appendChild(texto);
    panelResultados.appendChild(H1);

    botonEmpezar.classList.remove('invisible');
    botonDeNuevo.classList.remove('invisible');
    botonEmpezar.classList.add('visible');
    botonDeNuevo.classList.add('visible');
    rondas = 1;
    pGanJ1 = 0;
    pGanJ2 = 0;
    document.getElementById('contadorRonda').innerText = 'Ronda #' + rondas;
    document.getElementById('puntosJ1').innerText= jugador1 +': ' + pGanJ1; 
    document.getElementById('puntosJ2').innerText= jugador2+': ' +pGanJ2; 
    document.getElementById('empezar').innerText= "¿Jugar de nuevo?";
    botonDeNuevo.classList.remove('invisible');
    botonDeNuevo.classList.add('visible');
    panelResultados.classList.remove('invisible');
    panelResultados.classList.add('visible');
    document.getElementById('resultados').removeChild(H1);

}
   
}

function nuevaRonda(){
   
    panelRondas.classList.remove('invisible');
    panelRondas.classList.add('visible');
    panelResultados.classList.remove('visible');
    panelResultados.classList.add('invisible');
    document.getElementById('respuestaJ1').classList.remove('invisible');
    document.getElementById('respuestaJ1').classList.add('visible');

}
function nuevoInicio(){
    panelInicio.classList.remove('invisible');
    panelInicio.classList.add('visible');
    panelRondas.classList.remove('visible');
    panelRondas.classList.add('invisible');  
    panelResultados.classList.remove('visible');
    panelResultados.classList.add('invisible');
    document.getElementById('jugador1').value ="";
    document.getElementById('jugador2').value ="";
    document.getElementById('respuestaJ2').classList.remove('visible');
    document.getElementById('respuestaJ2').classList.add('invisible');    
}

