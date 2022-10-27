import SetPoke from '@/services/SetPoke.js'
import setPokemonCard from '../services/SetPoke'
const set= {
    seter(){
        return setPokemonCard(ind, id).then ((respuesta) =>{ 
            console.log('funciona?')
    })
        
        
    }
}

export {set}