<?php
/*
* Crea un programa que simule el comportamiento del sombrero selccionador del
* universo mágico de Harry Potter.
* - De ser posible realizará 5 preguntas (como mínimo) a través de la terminal.
* - Cada pregunta tendrá 4 respuestas posibles (también a selecciona una a través de terminal).
* - En función de las respuestas a las 5 preguntas deberás diseñar un algoritmo que
* coloque al alumno en una de las 4 casas de Hogwarts (Gryffindor, Slytherin , Hufflepuff y Ravenclaw)
* - Ten en cuenta los rasgos de cada casa para hacer las preguntas y crear el algoritmo seleccionador.
* Por ejemplo, en Slytherin se premia la ambición y la astucia.
*/

/*
* Quiz:

1.-When I make decisions, I...
- Make sure it works out for me. (S)
- Think about how it will affect others.(H)
- Take chances and pick the risky choise. (G)
- Consider every option carefully. (R)

2.-I like to spend time with people who...
- Are the same as me. (S)
- Are kind (H)
- Are different and creative.(G)
- Are smart. (R)

3.-Which element attracts you?
- Water (S)
- Land (H)
- Fire (G)
- Air (R)

4.-Which of the Hogwarts ghosts would you ask for advice?
- The Bloody Baron (S)
- The Fat Friar (H)
- Headless Nick (G)
- the Grey Lady (R)
*/
//? ____________________________________________________________________________

function sortingHat() {
    $questions = [
        "1. When I make decisions, I...",
        "2. I like to spend time with people who...",
        "3. Which element attracts you?",
        "4. Which of the Hogwarts ghosts would you ask for advice?",
        "5. Which color combination do you like from the options given?",
    ];

    $answers = [
        ["a. Make sure it works out for me", "b. Think about how it will affect others", "c. Take chances and pick the risky choise", "d. Consider every option carefully"],
        ["a. Are the same as me", "b. Are kind", "c. Are different and creative", "d. Are smart"],
        ["a. Water ", "b. Land", "c. Fire", "d. Air"],
        ["a. The Bloody Baron", "b. The Fat Friar", "c. Headless Nick", "d. The Grey Lady"],
    ];

    echo "Welcome to  the Sorting Hat!\n";
    echo "Answer the questions to find your Hogwarts House:\n";

//     $answers = [];
//     for ($i=0; $i<5; $i++) {
//         echo $questions[$i] . "\n";
//         foreach ($answers[$i] as $$answer) {
//             echo $answer . "\n";
//         }
//         $respuesta = readline("Elige una opción (a, b, c o d): ");
//         $respuestas[] = $respuesta;
//     }

//     $puntuaciones = ["Gryffindor" => 0, "Ravenclaw" => 0, "Hufflepuff" => 0, "Slytherin" => 0];

//     foreach ($respuestas as $respuesta) {
//         if ($respuesta == "a") {
//             $puntuaciones["Gryffindor"]++;
//         } elseif ($respuesta == "b") {
//             $puntuaciones["Ravenclaw"]++;
//         } elseif ($respuesta == "c") {
//             $puntuaciones["Hufflepuff"]++;
//         } elseif ($respuesta == "d") {
//             $puntuaciones["Slytherin"]++;
//         }
//     }

//     $casa = array_search(max($puntuaciones), $puntuaciones);
//     return $casa;
// }

// echo "¡Felicidades! Según tus respuestas, perteneces a la casa de ".HogwartsHatSelector();
// ?>