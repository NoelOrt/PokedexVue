import {ref, computed} from 'vue'
import BattelButton from '../components/BattelButton.vue';
import Batalla from './Batalla';
const contador=ref(0)
const val=ref('SELECIONA LUCHADORES!!!')

export default {
  augmentar(){

    contador.value++
    if(contador.value<2){val.value='SELECIONA LUCHADORES!!!'}
    if(contador.value==2){val.value='EMPEZAR BATALLA!'}
    if(contador.value==3){val.value='¡Reiniciar!'}
    return val.value,contador.value
  
    
  },
  rst(){
    contador.value=0
    return contador.value

  },
  contador,

  val
}