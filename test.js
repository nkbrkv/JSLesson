'use strict';

const soldier = {
    health: 400,
    armor:  100,
    damage: 50,
    mana:   200,
};

const john = {
    health: 100,
    damage: 200,
};

john.__proto__ = soldier;

console.dir(john);

// let a = [1, 2, 4, 5],
//     b = [12, 324, 345, 123];
 
// let newArray = [...a, ...b, 213, 98, 97];

// console.dir(newArray);



// let arr = [10, 2, 3, 123, 5, 4, 643, 7, 8, 9, 21];
// let leftPart = [];
// let rightPart = [];


// function sortQuick(arr) {

//     let mid = Math.floor(arr.length / 2);
    
//     for (let i = 0; i <= mid; i++) {

//         let j = mid + i;

//         if (arr[i] > arr[j]) {

//         } 
        
//     }

//     console.log(arr);


// }

// sortQuick(arr);

// arr.sort((a, b) => a - b);
// console.log(arr);

// function compareNum(a, b) {
//     return a - b;
// }

// arr.forEach(function(item, i, arr) {

//     console.log(`${i}: ${item} внутри массива ${arr}`);

// });

// const options = {




//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black', 
//         bg: 'red'
//     },
//     makeTest: function () {
//         console.log("Test");
//     },
// };

// options.makeTest();

// const {border, bg} = options.colors;

// console.log(border);

// console.log(Object.keys(options).length);

// console.log(options.name);
// delete options.name;
// console.log(options);

// let counter = 0;

// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let prop in options[key]) {
//             console.log(`Свойство ${prop} имеет значение ${options[key][prop]}`);
//             counter++;
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//     }
// } 

// console.log(counter);