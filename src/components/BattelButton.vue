<script setup>
import SearchPoke from '../services/SearchPoke';
import { searches, del } from '../hooks/useSearch.js';
import cont from '../services/cont.js';
import { ref, computed } from 'vue'
import Batalla from '../services/Batalla';
const props=defineProps(['conta'])

function augmentar(){
    if(cont.contador.value==2){
    Batalla.batalla()
    cont.augmentar()
    return
    }

    if(cont.contador.value==3) window.location.reload(), cont.rst;
    
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