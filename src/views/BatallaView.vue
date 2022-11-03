<script setup>
import { onMounted, ref } from 'vue';
import BattelButton from '../components/BattelButton.vue';
import BatTargets from '../components/BatTargets.vue';
import { services } from '../hooks/useFetchPoke.js';
import { set } from '../hooks/useSet.js';
import SetPoke from '@/services/SetPoke.js'
import { defineStore } from 'pinia'
import GetPoke from '../services/GetPoke';
import cont from '../services/cont';
import WinVue from '../components/Win.vue';
import Batalla from '../services/Batalla';
const arrayPoke=ref([]);
const arrayid=ref([]);
const NRO_POKEMON = 10;
const showWinView = ref(true);

const fetchPokemon = async () => {
    arrayPoke.value = await services.getPokeApi(NRO_POKEMON)
    localStorage.setItem('pokemonBattle', arrayPoke.value)
}

/**
 * Esta funcíon trae 10 nuevos pokemon y oculta la vista winVue
 */
const resetPokemon = () => {
    fetchPokemon();
    showWinView.value = false;
    cont.rst();
}

onMounted(async () => {

    //En el componente Home ya se están guardando los pokemons, aqui es redundante llamar nuevos pokemons
    // Si lo estas haciendo a posta, porque quieres nuevos pokemons para la pelean deberias seprarlo en un Hook.

    fetchPokemon()

    // for(var i=0;i<10;i++){
    // GetPoke.getAllPokemons().then ((respuesta) =>{ 
    //     arrayPoke.value.push(respuesta.data) 
    //     arrayid.value.push(j) 
    //     localStorage.setItem('Poke'+j ,JSON.stringify( respuesta.data))
    //     var x=JSON.parse(localStorage.getItem('Poke'+j))
    //     j++
    // })
    
    // }
})
console.log(Batalla.win2)
</script>

<template>
    <!-- Estamos recibiendo un evento (ready:battle) este emit nos dice que tenemos pokemons para la lucha -->
    <!-- con este evento podemos volver a ver WinVue, si no le pasaramos este evento, este componente nunca sabria que hay que mostrar de nuevo WinVue y solo lo mostraria la 
    primera vez que se crea el componente. -->
    <BattelButton 
        :conta="cont" 
        @reset:pokemon="resetPokemon"
        @ready:battle="showWinView = true" 
    />
    <WinVue v-if='showWinView' :ver="Batalla.win2.value" :ver1="Batalla.win3.value" :winarr="Batalla.winarr.value"/>
    <BatTargets :aray="arrayPoke" />
</template>
