<script setup>
import { onMounted } from '@vue/runtime-core';
import { ref, computed } from 'vue'
import GetPoke from '../services/GetPoke';
import TargetUnit from '../components/TargetUnit.vue';
const arrayPoke=ref([]);
const objePoke=ref({})
const props=defineProps(['pokeid'])

onMounted(async ()=>{
    
    GetPoke.getPokemon(props.pokeid).then ((respuesta) =>{ 
        arrayPoke.value.push(respuesta.data) 
        objePoke.value=respuesta.data
       
       
    })
    
})


</script>


<template>
    <TargetUnit v-for="poke in arrayPoke" :key="poke.id" :poke="poke"/>
    
</template>


<style scoped>


</style>>