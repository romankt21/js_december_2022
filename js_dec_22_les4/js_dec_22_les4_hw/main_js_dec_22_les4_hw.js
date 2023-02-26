// // - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function rectangle (a, b) {
//     return  a * b
// }
// console.log(rectangle(5, 2));
// 23,08

//  // - створити функцію яка обчислює та повертає площу кола з радіусом r
// function circle (r) {
//     const pi = 3.14;
//     return pi*r*r
// }
// console.log(circle(3));


// // - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function cylinder(r, h) {
//     const pi = 3.14;
//     return pi * r * r * h
// }
//
// console.log(cylinder(3,4))

//  // - створити функцію яка приймає масив та виводить кожен його елемент
// let arr = [1, 0, true, 'str', [4, -5, 8]];
// function array (arra) {
//     for (let i = 0; i < arguments.length; i++) {
//         const item = arguments[i];
//     document.write(`<ul>`)
//     document.write(`<li> ${item} </li>`)
//     document.write(` </ul> `)
//     }
//
// }
//
// array(arr);

// //- створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function foo(text) {
//     document.write(`<p>${text}</p>`)
// }
//
// foo('hello');
// foo('hi')

// //- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function foo(text) {
//     document.write(`<div>`);
//
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//
//     document.write(`</div>`);
//
// }
// foo('hello')

// //- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// //Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function foo (number, text){
//     for (let i = 0; i < number.length; i++) {
//         const item = number[i];
//
//     }
//         document.write(`<div>`);
//
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//
//     document.write(`</div>`);
// }
// foo(3, 'hello')



// //- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let array = [1, 'str', true, [1, 3, -5]];
// function foo (arr) {
//     for (let i = 0; i < arr.length; i++) {
//         const item = arr[i];
//         document.write(`<ul>`);
//
//         document.write(`<li>${item}</li>`);
//
//         document.write(`</ul>`);
//     }
//
// }
//
// foo(array);


// //- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let arr = [
//     { id: 1, name: 'vasyl', age: 30},
//     { id: 2, name: 'ivan', age: 35},
//     { id: 3, name: 'mykola', age: 40},
//     ]
//
// function foo(array) {
//     for (const item of array) {
//         document.write(`<div>${item.id} ${item.name}  ${item.age}</div>`)
//     }
// }
// foo(arr);


// //- створити функцію яка повертає найменьше число з масиву
// не вийшло
// let array = [2, 5, 25,1, 0 ,-15];
//
// function foo (arr) {
//     let max = 0;
//
//
//
//     for (let i = 0; i < arr.length; i++) {
//         const item = arr[i];
//         console.log(item)
//         if (item > max){
//            max = item
//         }
//             return item
//     }
// }
//
// console.log(foo(array));



// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let array = [1, 2, 10];
function sum (arr) {
    for (let i = 0; i < arr.length; i++) {
        const arrElement = arr[i];

    }
}


// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250