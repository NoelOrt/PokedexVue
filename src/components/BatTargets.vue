<script setup>
import BatCriaCard from './BatCriaCard.vue';

const props=defineProps(['aray'])
localStorage.setItem('ref','0')
</script>

<template>
    <article class="panel">
        <BatCriaCard v-for="(poke, index) in props.aray" :key="poke.id" :poke="poke" :index="index"/>

                
    </article>

</template>

<style scoped>



    .panel{
        width: 100%;
        padding: 50px 1%;
        margin: auto;
        margin-top: 50px;
    
    }
</style>