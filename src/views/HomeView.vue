<script setup>
// Los import que no se usan debes quitarlos
import { onMounted } from '@vue/runtime-core';
import SearchForm from '../components/SearchForm.vue';
import Targets from '../components/Targets.vue';
import { services } from '../hooks/useFetchPoke.js';
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import GetPoke from '../services/GetPoke';
const arrayPoke=ref([]);
// Esta constante no se está utilizando
const objePoke=ref({})

// Ya tienes la i como contador, la j es innecesaria
let j=0
onMounted(async ()=>{
    for(var i=0;i<10;i++){
    GetPoke.getAllPokemons().then ((respuesta) =>{ 
        arrayPoke.value.push(respuesta.data) 
        localStorage.setItem('poke'+j, JSON.stringify( respuesta.data))
        j++
        objePoke.value=respuesta.data
        
    })
    
}})

</script>

<template>
    <SearchForm/>
    <Targets :aray="arrayPoke"/>
</template>

//Falta identación en todo el proyecto