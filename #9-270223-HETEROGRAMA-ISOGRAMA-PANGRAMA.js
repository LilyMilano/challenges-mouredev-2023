/*
 * Crea 3 funciones, cada una encargada de detectar si una cadena de
 * texto es un heterograma, un isograma o un pangrama.
 * - Debes buscar la definición de cada uno de estos términos.
 */
// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
/*

TODO Definitions:

? A heterogram (from hetero-, meaning 'different', + -gram, meaning 'written') is a word, phrase, or sentence in which no letter of the alphabet occurs more than once.

? Isogram means a string where each letter present is used the same number of times. For example, a word where every featured letter appears twice, like "Shanghaiings", might be called a pair isogram.

? A perfect pangram is an example of a heterogram, with the added restriction that it uses all the letters of the alphabet.

? From Wikipedia, the free encyclopedia */

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

//TODO Pangram:

function isPangram(str) {
	try {
		const lowercase_alphabet = 'abcdefghijklmnopqrstuvwxyz';
		str = str.toLowerCase();
		return Array.from(lowercase_alphabet).every(char => str.includes(char));
	} catch (error) {
		console.log(error);
	}
}

//Testing:

let forTesting = [
	'abcdefghijklmnopqrstuvwxyzz',
	'Pack my box with five dozen liquor jugs',
	'Mr Jock, TV quiz PhD, bags few lynx',
	'Oh brave new world that has such people in it',
];

forTesting.forEach((str) => {
	console.log(`"${str}" is Pangram? ${isPangram(str)}`);
});

//Logs:
// "abcdefghijklmnopqrstuvwxyzz" is Pangram? true 
// "Pack my box with five dozen liquor jugs" is Pangram? true 
// "Mr Jock, TV quiz PhD, bags few lynx" is Pangram? true 
// "Oh brave new world that has such people in it" is Pangram? false
