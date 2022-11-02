<script setup>
import { onMounted } from '@vue/runtime-core';
import BattelButton from '../components/BattelButton.vue';
import BatTargets from '../components/BatTargets.vue';
import { services } from '../hooks/useFetchPoke.js';
import { ref, computed } from 'vue'
import { set } from '../hooks/useSet.js';
import SetPoke from '@/services/SetPoke.js'
import { defineStore } from 'pinia'
import GetPoke from '../services/GetPoke';
import cont from '../services/cont';
import WinVue from '../components/Win.vue';
import Batalla from '../services/Batalla';
const arrayPoke=ref([]);
const arrayid=ref([]);
let j=0
onMounted(async ()=>{

    //En el componente Home ya se están guardando los pokemons, aqui es redundante llamar nuevos pokemons
    // Si lo estas haciendo a posta, porque quieres nuevos pokemons para la pelean deberias seprarlo en un Hook.
    for(var i=0;i<10;i++){
    GetPoke.getAllPokemons().then ((respuesta) =>{ 
        arrayPoke.value.push(respuesta.data) 
        arrayid.value.push(j) 
        localStorage.setItem('Poke'+j ,JSON.stringify( respuesta.data))
        var x=JSON.parse(localStorage.getItem('Poke'+j))
        j++
    })
    
}})
console.log(Batalla.win2)

</script>

<template>
    <BattelButton :conta="cont"/>
    <WinVue :ver="Batalla.win2.value" :ver1="Batalla.win3.value" :winarr="Batalla.winarr.value"/>
    <BatTargets :aray="arrayPoke" />
</template>
