import { ref, computed } from 'vue'
import axios from 'axios'

const pokeAPI = axios.create({
    baseURL: "https://pokeapi.co/api/v2",
    withCredentials: false,
    headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    },
    });


    export default {
        getAllPokemons() {
        let rand = Math.floor(Math.random() *600) + 1
        return pokeAPI.get("/pokemon/"+rand);
        },
        getPokemon(id,ind) {
        console.log('entra en getpokeid')
        return pokeAPI.get("/pokemon/"+id);
        },
    };



