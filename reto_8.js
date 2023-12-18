// Los elfos están muy ocupados en el taller de Santa Claus organizando regalos 🎁 para la víspera de Navidad 🎄.

// El formato de entrada es especial, ya que indica el número de regalos y el tipo de regalo con letras de la a a la z. Por ejemplo, '66a11b' significa 66 regalos a y 11 regalos b.

// Los elfos tienen un sistema especial para organizar los regalos:

// Cada 10 regalos del mismo tipo se empaquetan en una caja, representada por {x}. Por ejemplo, 20 regalos tipo a se empaquetan en 2 cajas así: {a}{a}.
// Cada 5 cajas se apilan en un palé, representado por [x]. Por ejemplo, 10 cajas de a se apilan en 2 palés de esta manera: [a][a]
// Cualquier regalo adicional se coloca en una bolsa, representada por () y se colocan todas dentro. Por ejemplo 4 regalos de b se colocan en una bolsa así (bbbb)
// Los regalos luego se colocan en el siguiente orden: palés, cajas y bolsas. Y los regalos aparecen en el mismo orden que la cadena de entrada.

// Tu tarea es escribir una función organizeGifts que tome una cadena de regalos como argumento y devuelva una cadena representando el almacén.

const result1 = organizeGifts(`76a11b`);
console.log(result1);
// '[a]{a}{a}(aaaaaa){b}(b)'

const result2 = organizeGifts("20a");
console.log(result2);
// '{a}{a}'

const result3 = organizeGifts("9c");
console.log(result3);
// "{d}(ddddddddd)[e](e)"

const result4 = organizeGifts("19d51e");
console.log(result4);
// '[d](ddddddddddddddd){e}{e}{e}{e}{e}'

/* Explicación:

  76a: 76 regalos tipo 'a' se empaquetarían en 7 cajas y sobrarían 6 regalos, resultando en 1 palé [a] (por las primeras 5 cajas), 2 cajas sueltas {a}{a} y una bolsa con 6 regalos (aaaaaa)

  11b: 11 regalos tipo 'b' se empaquetarían en 1 caja y sobraría 1 regalo, resultando en 1 caja suelta {b} y una bolsa con 1 regalo (b)
  */


function organizeGifts(gifts) {

  const gifPerBox = 10;
  const boxesPerPallet = 5;

  // get the gift items from the string (a, b, c, etc)
  const giftItemRegex = /[a-z]/g;
  const giftNumberRegex = /[0-9]+/g;

  const giftItems = gifts.match(giftItemRegex);
  const giftNumbers = gifts.match(giftNumberRegex);

  let result = '';

  for (let i = 0; i < giftItems.length; i++) {

    let pallets = '';
    let boxes = '';
    let bags = '';
    const giftItem = giftItems[i];
    const giftNumber = parseInt(giftNumbers[i]);

    // boxes -> every exact 10 gifts
    const boxesCount = Math.floor(giftNumber / gifPerBox);
    const giftsLeft = giftNumber % gifPerBox;

    // pallets -> every exact 5 boxes
    const palletsCount = Math.floor(boxesCount / boxesPerPallet);
    const boxesLeft = boxesCount % boxesPerPallet;

    // bags -> every gift left
    const bagsItemsCount = giftsLeft;

    // adding the boxes

    boxes += `{${giftItem}}`.repeat(boxesLeft);

    // adding the pallets

    pallets += `[${giftItem}]`.repeat(palletsCount);

    // adding the items in the bag if there are items left

    if(bagsItemsCount > 0) {
      bags += `(${giftItem.repeat(bagsItemsCount)})`;
    }


    // adding the gifts to the result

    result += `${pallets}${boxes}${bags}`;
  }

  return result;
}