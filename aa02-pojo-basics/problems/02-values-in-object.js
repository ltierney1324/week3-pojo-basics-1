/***********************************************************************
Write a function called `valuesInObject(obj)` that takes in an object and returns
an array of all the values within that Object.


Do this once using using a `for...in` loop and once using `Object.values`.


Examples:

let animals = {dog: "Wolfie", cat: "Jet", bison: "Bilbo"}
let foods = {apple: "tart", lemon: "sour", mango: "sweet"}
valuesInObject(animals); // => ["Wolfie", "Jet", "Bilbo"]
valuesInObject(foods); // => ["tart", "sour", "sweet"]
***********************************************************************/

// function valuesInObject(obj) {
//     // Your code here
//     let values = [];

//     for (let value in obj) {
//         values.push(obj[value]);
//     }
//     return values;
// }

function valuesInObject(obj) {
    let values = [];

    Object.values(obj).forEach((value) => {
        values.push(value);
    });
    return values;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = valuesInObject;
