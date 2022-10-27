<script setup>
import Batalla from "../services/Batalla"
const props1=defineProps(['ver','winarr','ver1'])

</script>

<template>
    <section v-if="props1.ver" class="panelCon">
        <p id="resumen">{{props1.winarr[18]}}</p>
        <div class="pokemon_card3" >
          <div class="img_card">
            <img id='pokemon_img3' :src="props1.winarr[2]">
            <img id='pokemon_img23' :src="props1.winarr[3]">
            
        </div>
        <p class="pokemon_id">ID: {{props1.winarr[0]}}</p>
        <p class="pokemon_name" id="pokemon_name$">{{props1.winarr[4]}}</p>

        <div v-if="props1.ver1" class="pokemon_attributes">
            <div class="attribute">
                <p class="pokemon_attack" id="pokemon_attack$">{{props1.winarr[5]}}</p>
                <p>attack</p>
            </div>
            <div class="attribute">
                <p class="pokemon_defenses" id="pokemon_defenses$">{{props1.winarr[6]}}</p>
                <p>defenses</p>
            </div>
            <div :class="props1.winarr[8]">
                <p class="pokemon_types" id="pokemon_types0${id}">{{props1.winarr[12]}}</p>
                <p>{{props1.winarr[15]}}</p>
            </div>
            <div :class="props1.winarr[9]" id="attribute1">
                <p class="pokemon_types" id="pokemon_types1${id}">{{props1.winarr[13]}}</p>
                <p>{{props1.winarr[16]}}</p>
            </div>
            <div :class="props1.winarr[10]" id="attribute2">
                <p class="pokemon_types" id="pokemon_types2${id}">{{props1.winarr[14]}}</p>
                <p>{{props1.winarr[17]}}</p>
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
#resumen{
text-align: center;
font-size: 100px;
color: #3e8e41;
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