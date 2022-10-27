import { ref } from "vue";
const theme=ref()
export default {
   
      ThemeL() {
        console.log("I am changing theme to light");
        theme.value = "light";
        localStorage.setItem('fondo','light')
      },
      changeThemeD() {
        console.log("I am changing theme to dark");
        theme.value = "dark";
        localStorage.setItem('fondo','dark')
      },
     theme
  } 
  
