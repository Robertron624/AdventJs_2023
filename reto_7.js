// Santa está experimentando con nuevos diseños de regalos y necesita tu ayuda para visualizarlos en 3D.

// Tu tarea es escribir una función que, dado un tamaño n (entero), genere un dibujo de un regalo en 3D utilizando caracteres ASCII.

// Las líneas de los regalos se dibujan con # y las caras con el símbolo que nos pasan como parámetro:


let result1 = drawGift(4, '+')

/*
   ####
  #++##
 #++#+#
####++#
#++#+#
#++##
####
*/

// drawGift(5, '*')
/*
    #####
   #***##
  #***#*#
 #***#**#
#####***#
#***#**#
#***#*#
#***##
#####
*/

// drawGift(1, '^')
/*
#
*/

console.log(result1);


// Importante: Nos han dicho que siempre hay que dejar un salto de línea al final del dibujo.

// Nota: Ten en cuenta que, en los tests, la primera línea se ve empujada por el caracter ".

function drawGift(n, char) {
    let gift = "";
    let lines = n * 2 - 1;
    const wrapper = '#';
    let leftSpaces = n - 1;
    

    for (let i = 0; i < lines; i++) {
        if((i + 1) < n) {
            
            gift += wrapper.repeat(leftSpaces) + char.repeat(i + 1) + wrapper.repeat(n - i - 1) + '\n';
            leftSpaces--;

            

            // console.log(gift);
        }


    }


    return gift;
}