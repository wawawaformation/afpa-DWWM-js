
/**
 * 
 * @param {Number} min Nombre minimum
 * @param {Number} max 
 * @returns {Number}
 */
const tirerNombre = (min, max)=>  Math.round(Math.random()*(max-min) + min)



/**
 * 
 * @param {string} saisie 
 * @param {int} nombreAuHasard 
 * @returns {false|string}
 */
const comparerNombre = (saisie, nombreAuHasard) => {
    let msg;
    if(saisie == nombreAuHasard){
       return false
    }else{
        if(saisie > nombreAuHasard){
            msg = 'trop grand'
        }else{
            msg = 'trop petit'
        }

        return msg
    }
}


const nombreAuHasard = tirerNombre(0, 100)
console.log(nombreAuHasard)
let flag = true

while(flag){
    let saisie = prompt('Quel nombre choisissez vous ?')
    let msg = comparerNombre(saisie, nombreAuHasard)
    
    if(msg){
        console.log(msg)
    }else{
        flag = !flag
    }
}


console.log('gagne')

