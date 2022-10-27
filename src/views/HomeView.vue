<script setup>
import { onMounted } from '@vue/runtime-core';
import SearchForm from '../components/SearchForm.vue';
import Targets from '../components/Targets.vue';
import { services } from '../hooks/useFetchPoke.js';
import { ref, computed } from 'vue'

import { defineStore } from 'pinia'
import GetPoke from '../services/GetPoke';
const arrayPoke=ref([]);
const objePoke=ref({})
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
