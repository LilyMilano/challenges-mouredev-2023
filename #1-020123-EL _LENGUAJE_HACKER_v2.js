'use strict';

/*
 * Escribe un programa que reciba un texto y transforme lenguaje natural a
 * "lenguaje hacker" (conocido realmente como "leet" o "1337"). Este lenguaje
 *  se caracteriza por sustituir caracteres alfanuméricos.
 * - Utiliza esta tabla (https://www.gamehouse.com/blog/leet-speak-cheat-sheet/) 
 *   con el alfabeto y los números en "leet".
 *   (Usa la primera opción de cada transformación. Por ejemplo "4" para la "a")
 */

function hackerLanguage(muggletext) {
	let muggleTextLowerCase = muggletext.toLowerCase();
	let translator = '';

	// Con un ciclo for recorremos el texto ingresado.
	// Con un condicional switch asignamos a cada char su correspondencia en lenguaje hacker.

	for (let i = 0; i <= muggleTextLowerCase.length; i++) {
		switch (muggleTextLowerCase[i]) {
			case 'a':
				translator += '4';
				break;
			case 'b':
				translator += 'I3';
				break;
			case 'c':
				translator += '[';
				break;
			case 'd':
				translator += ')';
				break;
			case 'e':
				translator += '3';
				break;
			case 'f':
				translator += '|=';
				break;
			case 'g':
				translator += '&';
				break;
			case 'h':
				translator += '#';
				break;
			case 'i':
				translator += '1';
				break;
			case 'j':
				translator += ',_|';
				break;
			case 'k':
				translator += '>|';
				break;
			case 'l':
				translator += '|_,';
				break;
			case 'm':
				translator += '/\\/\\';
				break;
			case 'n':
				translator += '^/';
				break;
			case 'o':
				translator += '0';
				break;
			case 'p':
				translator += '|*';
				break;
			case 'q':
				translator += '(_,)';
				break;
			case 'r':
				translator += 'I2';
				break;
			case 's':
				translator += '5';
				break;
			case 't':
				translator += '7';
				break;
			case 'u':
				translator += '(_)';
				break;
			case 'v':
				translator += '\\/';
				break;
			case 'w':
				translator += '\\/\\/';
				break;
			case 'x':
				translator += '><';
				break;
			case 'y':
				translator += 'j';
				break;
			case 'z':
				translator += '2';
				break;
			case '1':
				translator += 'L';
				break;
			case '2':
				translator += 'R';
				break;
			case '3':
				translator += 'E';
				break;
			case '4':
				translator += 'A';
				break;
			case '5':
				translator += 'S';
				break;
			case '6':
				translator += 'b';
				break;
			case '7':
				translator += 'T';
				break;
			case '8':
				translator += 'B';
				break;
			case '9':
				translator += 'g';
				break;
			case '0':
				translator += 'o';
				break;
		}
	}
	return translator;
}

console.log(hackerLanguage('abcdefghikjlmnopqrstuvwxyz1234567890'));

// ____________________________________________________________________________
