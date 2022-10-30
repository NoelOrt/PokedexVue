<script setup>
import {RouterLink , RouterView} from 'vue-router';
import logo from '@/img/PokeLogo.png'
import { ref } from 'vue';
import Theme from '@/services/Theme.js'


console.log(Theme.theme)
const src= ref(logo)

</script>

<template>
    <body :class="Theme.theme.value === 'light' ? 'light-theme' : 'dark-theme'" class="body">
        
    
     <header>
            <nav id="menu">
              <img id="logo" :src="src">
                
                <ul id = "menu-items">
                    <li><input type="radio" name="switcher" id="dark" @click="Theme.changeThemeD()">Dark</li>
                    <li><input type="radio" name="switcher" id="light" @click="Theme.ThemeL()">Light</li>
                    <li><a @click="$router.push({name:'batalla'})">Batalla</a></li>
                    <li><a @click="$router.push({name:'home'})">Pokédex</a></li>
                    
                </ul>

            </nav>
        </header>
<RouterView/>
</body>
</template>

<style scoped>
  :root{
    --dark:rgb(131, 145, 146);
    --light:rgb(249, 231, 159);

    
  }


/*RESET*/
*{
    margin: 0;
    padding: 0;
    font-family: 'Lato', sans-serif;
    box-sizing: border-box;
}

a{text-decoration: none;}
ul{list-style: none;}


/*MENU*/
.body {
  height: 100%;
  padding: 0 50px 0 50px;
}
.light-theme {
  background-color: var(--light);
  color: rgb(99, 107, 107);
}
.dark-theme {
    background-color: var(--dark);
    color:  rgb(71, 11, 160);
}
  
</style>
