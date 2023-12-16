// Los elfos están catalogando los renos de Santa 🦌 según la distancia que pueden recorrer.

// Para ello tienen una cadena de texto movements donde cada caracter representa la dirección del movimiento del reno:

// > = Avanza a la derecha
// < = Avanza a la izquierda
// * = Puede avanzar o retroceder
// Por ejemplo, si el movimiento es >>*<, va hacia la derecha dos veces, luego puede ir a derecha o izquierda (lo que maximice la distancia recorrida final) y luego ir a la izquierda.

// Los elfos quieren saber cuál es la máxima distancia que recorre el reno al finalizar todos los movimientos.

// En el ejemplo anterior, la máxima distancia que recorre el reno es 2. Va a la derecha dos veces +2, luego con el * puede ir a la derecha otra vez para maximizar la distancia +1 y luego va a la izquierda -1.

// Crea una función maxDistance que reciba la cadena de texto movements y devuelva la máxima distancia que puede recorrer el reno en cualquier dirección:

// Ten en cuenta que no importa si es a la izquierda o la derecha, la distancia es el valor absoluto de la distancia recorrida máxima al finalizar los movimientos.


const movements = '>>*<'
const result = maxDistance(movements)
console.log(result) // -> 2

const movements2 = '<<<>'
const result2 = maxDistance(movements2)
console.log(result2) // -> 2

const movements3 = '>***>'
const result3 = maxDistance(movements3)
console.log(result3) // -> 5

const movements4 = "<<**>>"
const result4 = maxDistance(movements4)
console.log(result4) // -> 2

const movements5 = ">***>"
const result5 = maxDistance(movements5)
console.log(result5) // -> 5

// More examples:

const movements6 = '>>*<<'
const result6 = maxDistance(movements6)
console.log(result6) // -> 1

const movements7 = '><><'
const result7 = maxDistance(movements7)
console.log(result7) // -> 0

const movements8 = '***'
const result8 = maxDistance(movements8)
console.log(result8) // -> 3


function maxDistance(movements) {
    let steps = 0;
    let asteriskCount = 0;

    // Iteramos para contar los pasos y contar la cantidad de asteriscos
    for (let i = 0; i < movements.length; i++) {
        const movement = movements[i];

        if (movement === '>') {
            steps += 1;
        } else if (movement === '<') {
            steps -= 1;
        } else if (movement === '*') {
            asteriskCount += 1;
        }
    }

    // Ahora, determinamos qué movimiento realizar por cada asterisco
    for (let i = 0; i < movements.length; i++) {
        const movement = movements[i];

        if (movement === '*') {
            // Se puede elegir '>' o '<' basado en qué dirección conviene más
            let resultPlusOne = Math.abs(steps + 1);
            let resultMinusOne = Math.abs(steps - 1);

            // Si el asterisco puede aumentar la distancia, lo hacemos
            if (resultPlusOne >= resultMinusOne) {
                steps += 1;
            } else {
                steps -= 1;
            }

            // Reducimos el número de asteriscos restantes
            asteriskCount -= 1;

            // Si ya no hay más asteriscos, salimos del bucle
            if (asteriskCount === 0) {
                break;
            }
        }
    }

    return Math.abs(steps);
}


// Otra forma

// function maxDistance(movements) {
//     let steps = 0;
//     let asteriskCount = 0;
//     let asteriskIndex = [];

//     // Iteramos para contar los pasos, la cantidad de asteriscos y sus índices
//     for (let i = 0; i < movements.length; i++) {
//         const movement = movements[i];

//         if (movement === '>') {
//             steps += 1;
//         } else if (movement === '<') {
//             steps -= 1;
//         } else if (movement === '*') {
//             asteriskCount += 1;
//             asteriskIndex.push(i);
//         }
//     }

//     // Determinamos qué movimiento realizar por cada asterisco
//     for (let i = 0; i < asteriskIndex.length; i++) {
//         const currentIndex = asteriskIndex[i];
//         const resultPlusOne = Math.abs(steps + 1);
//         const resultMinusOne = Math.abs(steps - 1);

//         if (resultPlusOne >= resultMinusOne) {
//             steps += 1;
//         } else {
//             steps -= 1;
//         }

//         asteriskCount -= 1;

//         if (asteriskCount === 0) {
//             break;
//         }
//     }

//     return Math.abs(steps);
// }
