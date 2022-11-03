import GetPoke from '@/services/GetPoke.js'

// Aqui aprovecharemos para hacer la funcionalidad de 10 pokemon.
// Usaremos una variable para saber cuantos pokemonm debemos devolver. count
const services = {
	async getPokeApi(count) {
		let res = [] // Creamos un array vacio para ir rellenado con los pokemon
		for (let i = 0; i < count; i++) {
			//desestructuramos la respuesta, dentro de result hay data
			const { data } = await GetPoke.getAllPokemons()
			res.push(data)
		}
		//devolvemos el array con los pokemon
		return res
	}
}

export { services }
