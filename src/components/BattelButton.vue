<script setup>
import SearchPoke from '../services/SearchPoke';
import { searches, del } from '../hooks/useSearch.js';
import cont from '../services/cont.js';
import { ref, computed } from 'vue'
import Batalla from '../services/Batalla';
const props=defineProps(['conta'])
const emits = defineEmits(['reset:pokemon', 'ready:battle'])

function augmentar(){
    if(cont.contador.value == 2) {
        Batalla.batalla()
        cont.augmentar()
        emits('ready:battle'); // Enviaremos al padre que tenemos nuevos pokemons para la lucha
        return
    }
    // Vue hace aplicaciones SPA (Single Page applications) si usas reload te estas cargando la filosofia de Vue.
    // vamos a solucionar esto
    // 1.- Vamos a emitir un evento al padre que es BatallaView que tiene que mostras nuevos pokemons.
    // 2.- declaro un emit arriba en la linea 8.
    // 3.- en lugar de hacer un reload enviamos el evento emit
    // 4.- en el componente BatallaView recibimos este evento 
    // <BattelButton :conta="cont" @reset:pokemon="fetchPokemon"/>
    // Ahora cada ves que le des reiniciar traera otro 10 nuevos pokemons
    if(cont.contador.value==3) emits('reset:pokemon'), cont.rst;
    
}



</script>


<template>
    <div id="form">
        <input type="submit" :value=props.conta.val.value @click="augmentar()">
    </div>
</template>

<style scoped>


#form{
    width: 70%;
    margin: auto;
    margin-top: 100px;
    text-align: center;
}



#form input[type="submit"]{
    width: 50%;
    padding: 15px 10px;
    border: none;
    border-radius: 5px;
    font-size: 100%;
    cursor: pointer;
    transition: .5s;
    background-color: #FA5858;
    color: #fff;
    font-weight: bolder;
    border: 2px solid #FA5858;
}

#form input[type="submit"]:hover{
    background-color: #fff;
    color: #FA5858;
}
</style>>