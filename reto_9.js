// Están encendiendo las luces de Navidad 🎄 en la ciudad y, como cada año, ¡hay que arreglarlas!

// Las luces son de dos colores: 🔴 y 🟢 . Para que el efecto sea el adecuado, siempre deben estar alternadas. Es decir, si la primera luz es roja, la segunda debe ser verde, la tercera roja, la cuarta verde, etc.

// Nos han pedido que escribamos una función adjustLights que, dado un array de strings con el color de cada luz (representados con los emojis 🔴 para el rojo y 🟢 para el verde), devuelva el número mínimo de luces que hay que cambiar para que estén los colores alternos.
let adjustedLights1 = adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢'])
// -> 1 (cambias la cuarta luz a 🔴)

let adjustedLights2 = adjustLights(['🔴', '🔴', '🟢', '🔴', '🟢'])
// // -> 1 (cambia la primera luz a verde)

let adjustedLights3 = adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴'])
// // -> 2 (cambias la segunda luz a 🟢 y la tercera a 🔴)

let adjustedLights4 = adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢'])
// // -> 0 (ya están alternadas)

let adjustedLights5 = adjustLights(['🔴', '🔴', '🔴'])
// // -> 1 (cambias la segunda luz a 🟢)

function adjustLights(lights) {
    let changes = 0;
    let greenLight = '🟢';
    let redLight = '🔴';

    // ciclo de atras hacia adelante
    for(let i = lights.length - 1; i > 0; i--) {
        const light = lights[i];
        const previousLight = lights[i - 1];

        if(light === previousLight) {

            const lightToChange = light === greenLight ? redLight : greenLight;
            lights[i - 1] = lightToChange;

            changes++;
        }
    }

    return changes;
}

console.log(adjustedLights1);
console.log(adjustedLights2);
console.log(adjustedLights3);
console.log(adjustedLights4);
console.log(adjustedLights5);