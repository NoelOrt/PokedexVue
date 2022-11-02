export default {
	dele() {
		var txt = document.getElementById('Busca')
		txt.value = ''
		for (var i = 0; i < 10; i++) {
			var n = i + 10
			//muy mala práctica acceder al DOM directamente
			document.getElementById('pokemon_card' + i).style.display = ''
		}
	}
}
