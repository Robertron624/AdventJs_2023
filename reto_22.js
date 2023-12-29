// En la fábrica de juguetes de Santa, los elfos están desarrollando un lenguaje de programación llamado Santa.js 👨‍💻👩‍💻 basado en símbolos para controlar sus máquinas de juguetes 🚂.

// Han creado un sistema de instrucciones simple y necesitan tu ayuda para construir un compilador que interprete estos símbolos.

// El compilador trabaja con un contador que inicialmente tiene un valor de 0. Las instrucciones modificarán el valor de este contador.

// Instrucciones del lenguaje de los elfos en base a símbolos:

// +: Incrementa en 1 el valor del contador.
// *: Multiplica por 2 el valor del contador.
// -: Resta 1 al valor del contador.
// %: Marca un punto de retorno. No modifica el contador.
// <: Vuelve atrás una vez a la última instrucción con el símbolo % que haya visto. Si no hay un % previo, no hace nada.
// ¿: Inicia un bloque condicional que se ejecuta si el contador es mayor a 0.
// ?: Finaliza un bloque condicional.
// Crea una función compile que reciba un string con las instrucciones del lenguaje y devuelve el resultado de ejecutarlas. Aquí tienes algunos ejemplos:



function compile(code) {
    let count = 0;
    let lastReturnPoint = 0;
    let conditional = null;

    for (let i = 0; i < code.length; i++) {

        // count modification instructions
        if(conditional === null || conditional) {
            switch (code[i]) {
                case "+":
                    count++;
                    break;
                case "*":
                    count *= 2;
                    break;
                case "-":
                    count--;
                    break;
                case "%": {
                    lastReturnPoint = i;
                    break;
                }
                case "<": {
                    if (lastReturnPoint > 0) {
                        i = lastReturnPoint;
                        lastReturnPoint = 0;
                    }
                    break;
                }
            }
        }

        
        if (code[i] === "?") {
            conditional = null;
        }

        if (code[i] === "¿") {
            if (count > 0) {
                conditional = true;
            } else {
                conditional = false;
            }
        }
    }

    return count;
}

const result1 = compile('++*-') // 3
console.log(result1);

const result2 = compile('++%++<') // 6
console.log(result2);

const result3 = compile('++<--') // 0
console.log(result3);

const result4 = compile("++¿+?"); // 3
console.log(result4);

const result5 = compile('--¿+++?') // -2
console.log(result5);

const result6 = compile('--¿+++?+++¿--?') // -1
console.log(result6);
