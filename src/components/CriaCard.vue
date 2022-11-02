<script setup>
import{ref} from 'vue'
const props=defineProps(['poke','index'])
const poke=ref([]);
let id=props.poke.id
let ind=props.index
let pokemon_card$= 'pokemon_card'+ind
const pokemon_img$='pokemon_img'+id
let src=props.poke.sprites.other.dream_world.front_default
let pokemon_name$='pokemon_name'+id
let pokemon_attack$='pokemon_attack'+id
let pokemon_defenses$='pokemon_defenses'+id
let pokemon_abilities$='pokemon_abilities'+id

//Componente repetido 

</script>

<template>
    <div class="pokemon_card" :id="pokemon_card$" @click="$router.push({name:'amPoke', params:{pokeid:props.poke.id}})">
     <div class="img_card">
            <img :id="pokemon_img$" :src="src">
        </div>

        <p class="pokemon_id">ID{{props.poke.id}}</p>
        <p class="pokemon_name" :id="pokemon_name$">{{props.poke.name}}</p>

        <div class="pokemon_attributes">
            <div class="attribute">
                <p class="pokemon_attack" :id="pokemon_attack$">{{props.poke.stats[1].base_stat}}</p>
                <p>attack</p>
            </div>
            <div class="attribute">
                <p class="pokemon_defenses" :id="pokemon_defenses$">{{props.poke.stats[2].base_stat}}</p>
                <p>defenses</p>
            </div>
            <div class="attribute">
                <p class="pokemon_abilities" :id="pokemon_abilities$">{{props.poke.abilities.length}}</p>
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