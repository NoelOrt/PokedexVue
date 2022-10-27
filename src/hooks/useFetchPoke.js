import GetPoke from '@/services/GetPoke.js'

const services= {
    async getPokeApi(){
        return await GetPoke.getAllPokemons()
        
        
    }
}

export {services}