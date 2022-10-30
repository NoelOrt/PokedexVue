import { ref } from "vue";
const theme=ref()
export default {
   
      ThemeL() {
        theme.value = "light";
        localStorage.setItem('fondo','light')
      },
      changeThemeD() {
        theme.value = "dark";
        localStorage.setItem('fondo','dark')
      },
     theme
  } 
  
