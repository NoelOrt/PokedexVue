export default {
	search() {
		//console.log('a entrado en busqueda')
		var txt = document.getElementById('Busca').value
		//console.log(txt)
		let card = []
		let coincide = []
		for (var i = 0; i < 10; i++) {
			var n = i + 10

			card[i] = JSON.parse(localStorage.getItem('poke' + i))
		}
		for (var j = 0; j < 10; j++) {
			coincide[j] = card[j].name.indexOf(txt)
		}
		for (var k = 0; k < 10; k++) {
			if (coincide[k] == 0) {
				document.getElementById('pokemon_card' + k).style.display = ''
			} else {
				document.getElementById('pokemon_card' + k).style.display = 'none'
			}
		}

		//En el campus Universitario hemos hecho ejemplos de como buscar, este Hook es totalmente innecesario
	}
}
