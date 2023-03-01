// // - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function rectangle (a, b) {
//     return  a * b
// }
// console.log(rectangle(5, 2));


//  // - створити функцію яка обчислює та повертає площу кола з радіусом r
// function circle (r) {
//     const pi = 3.14;
//     return pi*r*r
// }
// console.log(circle(3));


// // - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function cylinder(r, h) {
//     const pi = 3.14;
//     return 2*pi * r * (r + h)
// }
//
// console.log(cylinder(3,4))

//  // - створити функцію яка приймає масив та виводить кожен його елемент
// let arr = [1, 0, true, 'str', [4, -5, 8]];
// function array (arra) {
//        for (const item of arra) {
//
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
// function foo (text, number){
//
//         document.write(`<ul>`);
//
//     for (let i = 0; i < number; i++) {
//         document.write(`<li>${text}</li>`);
//     }
//
//
//     document.write(`</ul>`);
// }
// foo('hello', 3)



// //- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let array = [1, 'str', true, [1, 3, -5]];
// function listCreator (arr) {
//         document.write(`<ul>`);
//     for (const item of arr) {
//         document.write(`<li>${item}</li>`);
//     }
//
//         document.write(`</ul>`);
//   }
//
// listCreator(array);



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
// let array = [2, 5, 25, -5,  1, 0 ,-15];
// function minNum (numbers) {
//     let min = numbers[0];  // берем перше число масиву
//
//     for (const item of numbers) {
//
//
//
//         if (item < min) {
//             min = item
//         }
//
//     }
//     return min
// }
//
// console.log(minNum(array));
//


//52.57


// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
// let arraySum = [1, 2, 10];
// function sum (arr) {
//
//     let basket = 0;
//     for (const item of arr) {
//         basket  +=  item  //   basket  = basket + item
//
//     }
//     return basket
// }
//
// console.log(sum(arraySum))

// 1/00/57


// - створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

// function swap(arr,index1,index2) {
//
//     let v1 = arr[index1];
//     let v2 = arr[index2];
//
//     arr[index1] = v2;
//     arr[index2] = v1;
//
//     console.log(arr)
//
// }
// swap([11,22,33,44],0,1)

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

function exchange (sumUAH,currencyValues,exchangeCurrency) {
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency){
            return sumUAH/item.value
        }
    }


}



console.log(exchange(10000,
    [
        {currency:'USD',value:40},
        {currency:'EUR',value:42}
    ],
    'EUR'))

