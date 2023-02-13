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

//? Sheldon Game:
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

// ......................................................

let rules = {
	'✂️': ['📃', '🦎'],
	'📃': ['🗿', '🖖'],
	'🗿': ['🦎', '✂️'],
	'🦎': ['🖖', '📃'],
	'🖖': ['✂️', '🗿'],
};

// ______________________________________________________

// Players:
let sheldon_points = 0;
let leonard_points = 0;

// ______________________________________________________

function Game(moves) {
	sheldon_points = 0;
	leonard_points = 0;
	moves.forEach(playGame);
	if (sheldon_points === leonard_points) {
		return 'Tie';
	} else if (sheldon_points > leonard_points) {
		return 'Sheldon won!';
	} else {
		return 'Leonard won!';
	}
}

// ______________________________________________________

function playGame([player1, player2]) {
	if (model[player1].indexOf(player2) > -1) {
		points_player1 += 1;
	} else if (model[player2].indexOf(player1) > -1) {
		points_player2 += 1;
	}
}
