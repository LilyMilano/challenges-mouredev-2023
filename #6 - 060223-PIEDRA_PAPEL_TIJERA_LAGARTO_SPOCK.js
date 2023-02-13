/*
 * Crea un programa que calcule quien gana más partidas al piedra,
 * papel, tijera, lagarto, spock.
 * - El resultado puede ser: "Player 1", "Player 2", "Tie" (empate)
 * - La función recibe un listado que contiene pares, representando cada jugada.
 * - El par puede contener combinaciones de "🗿" (piedra), "📄" (papel),
 *   "✂️" (tijera), "🦎" (lagarto) o "🦎" (spock).
 * - Ejemplo. Entrada: [("🗿","✂️"), ("✂️","🗿"), ("📄","✂️")]. Resultado: "Player 2".
 * - Debes buscar información sobre cómo se juega con estas 5 posibilidades.
 */
// ......................................................

//? Sheldon Game: Rock, Paper, Scissors, Lizard, Spock.

//? Sheldon himself explained it as follows:
// " The scissors cut the paper.
// The paper covers the rock.
// The rock crushes the lizard.
// The lizard poisons Spock.
// Spock breaks the scissors.
// The scissors decapitate the lizard.
// The lizard devours the paper.
// The paper disempowers Spock.
// Spock vaporises the rock and, as always,
// the rock crushes the scissors."

const win_moves = {
	'🗿': ['✂️', '🦎'],
	'📄': ['🗿', '🖖'],
	'✂️': ['🦎', '📄'],
	'🦎': ['🖖', '📄'],
	'🖖': ['✂️', '🗿'],
};

// ......................................................
//? Scoring Logic_________________________________________

function coopersGame(moves) {
	let sheldon = 0;
	let leonard = 0;

	for (let move of moves) {

		if (move[0] !== move[1]) {
			if (win_moves[move[0]].includes(move[1])) {
				sheldon += 1;
			} else {
				leonard += 1;
			}
		}
	}
	// ___________________________________________________
	if (sheldon !== leonard) {
		if (sheldon > leonard) return 'Sheldon won!';
		else return 'Leonard won!';
	} else return 'Tie!';
}

//? Testing results_________________________________________

console.log(
	coopersGame([
		['🗿', '✂️'],
		['✂️', '🗿'],
		['📄', '✂️'],
	])
); // Log: Leonard won!

console.log(
	coopersGame([
		['🗿', '✂️'],
		['✂️', '🗿'],
		['📄', '📄'],
	])
); // Log: Tie!

console.log(
	coopersGame([
		['🗿', '✂️'],
		['🦎', '📄'],
		['✂️', '🦎'],
	])
); // Log: Sheldon won!

