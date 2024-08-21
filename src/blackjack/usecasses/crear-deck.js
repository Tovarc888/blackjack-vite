import _ from "underscore";
/**
 * Represents a book.
 * Esta función crea un nuevo deck
 * @param {Array<String>} tiposDeCarta  un ejemplo puede ser ['C','D','H','S']
 * @param {Array<String>} tiposDeEspeciales un ejemplo puede ser ['A','J','Q','K']
 */




export const crearDeck = (tiposDeCarta, tiposDeEspeciales) => {

    if (!tiposDeCarta || tiposDeCarta === 0) throw new Error ('tiposDeCarta es obligatorio como un arreglo de string');  
    if (!tiposDeEspeciales || tiposDeEspeciales === 0) throw new Error ('tiposDeEspeciales es obligatorio como un arreglo de string');  


    let deck = [];
    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposDeEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    console.log( deck );
    return deck;
}