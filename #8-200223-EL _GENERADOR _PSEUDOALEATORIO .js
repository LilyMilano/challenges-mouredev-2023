/*
 * Crea un generador de números pseudoaleatorios entre 0 y 100.
 * - No puedes usar ninguna función "random" (o semejante) del lenguaje de programación seleccionado.
 *
 * Es más complicado de lo que parece...
 */

function pseudoRandom() {
	let start = performance.now();
	let end = performance.now();
	let p = Math.trunc((end - start) * 10000);

	if(p <=100) {
		return p;
	}
}

console.log(pseudoRandom());   // Log: 67