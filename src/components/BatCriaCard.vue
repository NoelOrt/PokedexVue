<script setup>
import{ref} from 'vue'
import {set} from '@/hooks/useSet.js'
import SetPoke from '@/services/SetPoke.js'
import logo from '@/img/PokeLogo.png'
import inte from '@/img/inte.png'
import GetPoke from '../services/GetPoke';
import cont from '../services/cont.js';
import BattelButton from '../components/BattelButton.vue';
const props=defineProps(['poke','index'])
const poke=ref([]);
let id=props.poke.id
let ind=props.index


const pokemon_card$='pokemon_card'+ind
const pokemon_img$='pokemon_img'+id
const src= ref(inte)
const pokemon_name$='pokemon_name'+id
const pokemon_attack$='pokemon_attack'+id
const pokemon_defenses$='pokemon_defenses'+id
const pokemon_abilities$='pokemon_abilities'+id
const idd=ref('??')
const name=ref('????')
const atack=ref('????')
const defensa=ref('????')
const abilities=ref('????')
function setpokemon(id, ind){
    
    GetPoke.getPokemon(id).then((respuesta)=>{
        localStorage.setItem('poke'+cont.contador.value, JSON.stringify( respuesta.data))
        console.log(ind)
        SetPoke.setPokemonCard(ind,id,respuesta.data,src,idd,name,atack,defensa, abilities)
        
    }
)}
function augmentar(){
    if(cont.contador.value<2){
    cont.augmentar()
    setpokemon(id, ind)}
    
}

</script>

<template>
    <div class="pokemon_card" :id="pokemon_card$" @click="augmentar()">
     <div class="img_card">
            <img :id="pokemon_img$" :src="src">
        </div>

        <p class="pokemon_id">ID{{ idd}}</p>
        <p class="pokemon_name" :id="pokemon_name$">{{name}}</p>

        <div class="pokemon_attributes">
            <div class="attribute">
                <p class="pokemon_attack" :id="pokemon_attack$">{{atack}}</p>
                <p>attack</p>
            </div>
            <div class="attribute">
                <p class="pokemon_defenses" :id="pokemon_defenses$">{{defensa}}</p>
                <p>defenses</p>
            </div>
            <div class="attribute">
                <p class="pokemon_abilities" :id="pokemon_abilities$">{{abilities}}</p>
                <p>abilities</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .pokemon_card{
        position: relative;
        background: #fff;
        width: 18.6%;
        height: auto;
        margin-left: 1%;
        margin-bottom: 1%;
        display:inline-block;
        text-align: center;
        border-radius: 10px;
    }
    .pokemon_card1{
        position: relative;
        background: #fff;
        width: 18.6%;
        height: auto;
        margin-left: 1%;
        margin-bottom: 1%;
        display:inline-block;
        text-align: center;
        border-radius: 10px;
    }
    .pokemon_card:hover{
        background-color: #3e8e41   
    }
    .pokemon_card:active{
        background-color: #3e8e41;
        box-shadow: 0 5px #666;
        transform: translateY(4px);
    }
    .pokemon_card2{
        position: relative;
        background: #fff;
        width: 18.6%;
        height: auto;
        margin-left: 1%;
        margin-bottom: 1%;
        display:inline-block;
        text-align: center;
        border-radius: 10px;
        
    }
    
    .img_card{
    width: 100%;
    text-align: center;
    background-color:rgb(222, 222, 241);
    border-radius: 10px 10px 0 0;
}

.img_card img{
    width: 60%;
    height: 200px;
}

.pokemon_id{
    font-size: 10pt;
    color:#FA5858;
    font-weight: bolder;
    position: absolute;
    margin-top: 5px;
    margin-left: 5px;
}

.pokemon_name{
    margin: 20% 0;
    font-size: 25pt;
    font-weight: bold;
}

.pokemon_attributes{
    width: 100%;
    height: 4rem;
}

.attribute{
    width: 33.3%;
    height: 100%;
    margin: -2px;
    padding: 2% 0;
    color: #fff;
    background: #FA5858;
    display: inline-block;
    font-weight: bold;
    border-right: 3px solid #a83b3b;
}

.attribute:nth-child(1){
    border-radius: 0 0 0 10px;
}

.attribute:nth-child(3){
    border-right:none;
    border-radius: 0 0 10px 0;
}



</style>