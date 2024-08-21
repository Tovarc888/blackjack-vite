import { pedirCarta, valorCarta, crearCartaHTML } from "./";

/**
 * 
 * @param {Number} puntosMinimos puntos minimos que la computadora ncesita para ganar 
 * @param {HTMLElement} divCartasComputadora para mostrar las cartas 
 * @param {HTMLElement} puntosComputadoraHTML para mostrar los puntos 
 * @param {Array<String>}  deck

*/



export const turnoComputadora = ( puntosMinimos, divCartasComputadora,  puntosComputadoraHTML, deck  = [] ) => {

    if(!puntosMinimos) throw new Error ('Puntos minimos son necesarios');
    if(!puntosComputadoraHTML) throw new Error ('Puntos HTML son necesarios');
    
    let puntosComputadora=0;

    do {
        const carta = pedirCarta(deck);
        const imgCarta = crearCartaHTML( carta );
        divCartasComputadora.append( imgCarta );
        
        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosComputadoraHTML.innerText = puntosComputadora;
        

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );
    
    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );

}