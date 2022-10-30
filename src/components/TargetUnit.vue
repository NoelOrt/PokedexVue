<script setup>

const props=defineProps(['poke'])
let id=props.poke.id
var nTypes=props.poke.types.length
const pokemon_img$='pokemon_img3'
const pokemon_img2$='pokemon_img23'
let src=props.poke.sprites.front_default
let src2=props.poke.sprites.back_default
let pokemon_name$='pokemon_name'+id
let pokemon_attack$='pokemon_attack'+id
let pokemon_defenses$='pokemon_defenses'+id
let pokemon_abilities$='pokemon_abilities'+id
let attribute='0'
let attribute1='0'
let attribute2='0'
let j=0
let attr, type
let attr1, type1  
let attr2 , type2 
for(var i=0;i<nTypes;i++){
    if(j==0){attribute='attribute', attr=props.poke.types[j].type.name, type='type'}
    if(j==1){attribute1='attribute',attr1=props.poke.types[j].type.name, type1='type 1'}
    if(j==2){attribute2='attribute',attr2=props.poke.types[j].type.name, type2='type 2'}
    j++

}



</script>

<template>
    <section class="panelCon">
        <div class="pokemon_card3" @click="$router.push({name:'home'})">
          <div class="img_card">
            <img :id="pokemon_img$" :src="src">
            <img :id="pokemon_img2$" :src="src2">

        </div>

        <p class="pokemon_id">ID: #{{id}}</p>
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
            <div :class="attribute">
                <p class="pokemon_types" id="pokemon_types0${id}">{{attr}}</p>
                <p>{{type}}</p>
            </div>
            <div :class="attribute1" id="attribute1">
                <p class="pokemon_types" id="pokemon_types1${id}">{{attr1}}</p>
                <p>{{type1}}</p>
            </div>
            <div :class="attribute2" id="attribute2">
                <p class="pokemon_types" id="pokemon_types2${id}">{{attr2}}</p>
                <p>{{type2}}</p>
            </div>
        </div>
        </div>
    </section>

</template>

<style scoped>



    .panelCon{
        width: 100%;
        padding: 50px 1%;
        margin: auto;
        margin-top: 50px;
    
    }
    .pokemon_card3{
        position: relative;
        background: rgba(10, 244, 225, 0.255);
        width: 60%;
        height: auto;
        text-align: center;
        border-radius: 10px;
        margin: 0 auto;
        display: block;
    }
    .pokemon_card3:hover{
        background-color: #e415c9   
    }
   
    
    .img_card{
    width: 100%;
    text-align: center;
    background-color:rgb(222, 222, 241);
    border-radius: 10px 10px 0 0;
}

.img_card img{
    width: 80%;
    height: 300px;
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
.pokemon_card3:active{
        background-color: #3e8e41;
        box-shadow: 0 5px #666;
        transform: translateY(4px);
    }

</style>