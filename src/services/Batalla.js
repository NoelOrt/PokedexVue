import { createReturnStatement } from '@vue/compiler-core';
import {ref, computed} from 'vue'
import BattelButton from '../components/BattelButton.vue';
const win=ref()
var win2=ref(0)
var win3=ref(0)
const winarr=ref([])
const resumen =ref()

export default {
 
 batalla(){
    console.log('entra en batalla')
    var pokemon1=JSON.parse(localStorage.getItem("poke1"));
    var pokemon2=JSON.parse(localStorage.getItem("poke2"));
    
    
    
    if(pokemon1.stats[1].base_stat<pokemon2.stats[2].base_stat){
        win.value=pokemon2;
        win2.value=1
        win3.value=1
        localStorage.setItem("win", 2);
        resumen.value= pokemon1.name.toUpperCase()+' ataca y pierde contra '+pokemon2.name.toUpperCase();
    }
    else if(pokemon1.stats[1].base_stat>pokemon2.stats[2].base_stat){
        localStorage.setItem("win", 1);
        win.value=pokemon1;
        win2.value=1
        win3.value=1
        resumen.value=pokemon1.name.toUpperCase()+' '+' ataca y gana contra '+' '+ pokemon2.name.toUpperCase();

    }
    else{
        localStorage.setItem("win", 3);
        win.value=3;
        win2.value=1
        win3.value=0
        resumen.value= pokemon1.name.toUpperCase()+' '+' ataca y empata contra '+' '+pokemon2.name.toUpperCase();
        
    }
    
    if(win.value==3){
        win3.value=0
        let id=pokemon1.id+' VS '+pokemon2.id
        var nTypes=0
        let src=pokemon1.sprites.front_default
        let src2=pokemon2.sprites.back_default
        let pokemon_name$=pokemon1.name+' VS '+pokemon2.name
        let pokemon_attack$=''
        let pokemon_defenses$=''
        let pokemon_abilities$=''
        let attribute='0'
        let attribute1='0'
        let attribute2='0'
        let j=0
        let attr, type
        let attr1, type1  
        let attr2 , type2 
        resumen.value= pokemon1.name.toUpperCase()+' '+' ataca y empata contra '+' '+pokemon2.name.toUpperCase()
        for(var i=0;i<nTypes;i++){
            if(j==0){attribute='attribute', attr=pokemon1.types[j].type.name, type='type'}
            if(j==1){attribute1='attribute',attr1=pokemon1.types[j].type.name, type1='type 1'}
            if(j==2){attribute2='attribute',attr2=pokemon1.types[j].type.name, type2='type 2'}
            j++

        }
        winarr.value=[id,nTypes,src,src2,pokemon_name$,pokemon_attack$,pokemon_defenses$,
            pokemon_abilities$,attribute, attribute1, attribute2,j,attr, attr1, attr2,type,type1
            ,type2, resumen.value]
    }
        else{
            let id=win.value.id
            var nTypes=win.value.types.length
            let src=win.value.sprites.front_default
            let src2=win.value.sprites.back_default
            let pokemon_name$=win.value.name
            let pokemon_attack$=win.value.stats[1].base_stat
            let pokemon_defenses$=win.value.stats[2].base_stat
            let pokemon_abilities$=win.value.abilities.length
            let attribute='0'
            let attribute1='0'
            let attribute2='0'
            let j=0
            let attr, type
            let attr1, type1  
            let attr2 , type2 
            for(var i=0;i<nTypes;i++){
                if(j==0){attribute='attribute', attr=win.value.types[j].type.name, type='type'}
                if(j==1){attribute1='attribute',win.value.types[j].type.name, type1='type 1'}
                if(j==2){attribute2='attribute',win.value.types[j].type.name, type2='type 2'}
                j++

            }
            winarr.value=[id,nTypes,src,src2,pokemon_name$,pokemon_attack$,pokemon_defenses$,
            pokemon_abilities$,attribute, attribute1, attribute2,j,attr, attr1, attr2,type,type1
            ,type2, resumen.value]
        }
    
    return win , win2;
},
win,
win2,
winarr,
win3


}