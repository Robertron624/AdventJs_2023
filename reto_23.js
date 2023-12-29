// ¡Santa 🎅 está organizando una gran cena navideña 🫓 y quiere asegurarse de que todos los platos sean únicos y variados!

// Te da una lista de platos navideños donde cada elemento consiste en una lista de strings que comienza con el nombre del plato, seguido de todos los ingredientes utilizados para su preparación.

// Tienes que escribir una función que agrupe los platos por ingredientes siempre que haya al menos 2 platos que los contengan.

// Así que devolvemos un array de arrays donde la primera posición es el nombre del ingrediente y el resto los nombres de los platos.

// Tanto la lista de ingredientes como los platos deben estar ordenados alfabéticamente.

const dishes = [
    ["christmas turkey", "turkey", "sauce", "herbs"],
    ["cake", "flour", "sugar", "egg"],
    ["hot chocolate", "chocolate", "milk", "sugar"],
    ["pizza", "sauce", "tomato", "cheese", "ham"],
  ]
  
let result1 = organizeChristmasDinner(dishes)

const dishes2 = [
    ["gingerbread", "flour", "ginger", "sugar"],
    ["glazed ham", "ham", "honey", "sugar", "vinegar"],
    ["roast chicken", "chicken", "rosemary", "thyme", "garlic"],
    ["vegetable soup", "carrot", "potato", "onion", "garlic"],
    ["fruit punch", "apple juice", "orange juice", "sugar"]
  ]

let result2 = organizeChristmasDinner(dishes2)
  
  /*
  
  "sauce" está en 2 platos: "christmas turkey" y "pizza".
  "sugar" está en 2 platos: "cake" y "hot chocolate".
  El resto de ingredientes solo aparecen en un plato, por lo que no los mostramos.
  
  Enseñamos primero "sauce" porque alfabéticamente está antes que "sugar".
  Y los platos de cada ingrediente también están ordenados alfabéticamente.
  
  [
    ["sauce", "christmas turkey", "pizza"],
    ["sugar", "cake", "hot chocolate"]
  ]
  */


// I think this is a good solution, but I'm not sure if it's the best one (I think it's too slow)
function organizeChristmasDinner(dishes) {

    let result = [];
    let ingredients = {}

    for (let dish of dishes) {
        const dishName = dish[0];

        for(let i = 1; i < dish.length; i++) {
            if(!ingredients[dish[i]]) {
                ingredients[dish[i]] = [dishName];
            } else {
                ingredients[dish[i]].push(dishName);
            }

        }
    }

    result = Object.entries(ingredients)
    .filter(ingredient => ingredient[1].length > 1)
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map(ingredient => [ingredient[0], ...ingredient[1].sort()]);


    return result;
}

console.log(result1);
console.log(result2);

// Todos los nombres de los platos son diferentes.
// Los nombres de los ingredientes para un plato dado son distintos entre sí.
// Si no hay ingredientes repetidos, devolvemos un array vacío.


// Another solution, only a slightly faster than the previous one
function organizeChristmasDinner2(dishes){
    const ingredients = new Map();

    for (const dish of dishes) {
        const dishName = dish[0];

        for (let i = 1; i < dish.length; i++) {
            const ingredient = dish[i];

            if (!ingredients.has(ingredient)) {
                ingredients.set(ingredient, new Set([dishName]));
            } else {
                ingredients.get(ingredient).add(dishName);
            }
        }
    }

    const result = [];
    for (const [ingredient, dishSet] of ingredients) {
        if (dishSet.size > 1) {
            const sortedDishes = Array.from(dishSet).sort();
            result.push([ingredient, ...sortedDishes]);
        }
    }

    return result.sort((a, b) => a[0].localeCompare(b[0]));
}

result1 = organizeChristmasDinner2(dishes)
result2 = organizeChristmasDinner2(dishes2)

console.log(result1);

console.log(result2);