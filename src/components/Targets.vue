<script setup>
import CriaCard from './CriaCard.vue';

const props=defineProps(['aray'])
</script>

<template>
    <article class="panel">
        <CriaCard v-for="(poke, index) in props.aray" :key="poke.id" :poke="poke" :index="index"/>

                
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