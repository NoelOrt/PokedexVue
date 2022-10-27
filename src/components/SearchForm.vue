<script setup>
import SearchPoke from '../services/SearchPoke';
import { searches, del } from '../hooks/useSearch.js';
var busc='';

function search(){
    searches.search()
}
function borrar(){
    del.dele()
}

   


</script>


<template>
    <div id="form">
        <input v-model="busc"  id="Busca" type="text" placeholder="ID o nombre del Pokemon" @keyup="search()">
        <input type="submit" value="BORRAR" @click="borrar()">
    </div>
</template>

<style scoped>


#form{
    width: 70%;
    margin: auto;
    margin-top: 100px;
    text-align: center;
}

#form input[type="text"]{
    width: 70%;
    margin-right: 1%;
    padding: 15px 10px;
    border: 2px solid #FA5858;
    border-radius: 5px;
    font-size: 100%;
}

#form input[type="submit"]{
    width: 18%;
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