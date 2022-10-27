export default{
    setPokemonCard(ind,id, pokemon,src,idd,name,atack,defensa, abilities){
    var pokeid= pokemon
    console.log('pasa por setpoke',pokeid,`pokemon_img${id}`)
    console.log(src)
    return src.value=pokemon.sprites.front_default,
    idd.value=id,name.value=pokemon.name,atack.value=pokemon.stats[1].base_stat,
    defensa.value=pokemon.stats[2].base_stat, abilities.value=pokemon.abilities.length
   
 
    
}
}
