// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log

// let hello = ' hello';
// let owu = 'owu';
// let com = 'com';
// let ua = 'ua';
// let a = 1;
// let b = 10;
// let c = -999;
// let d = 123;
// let e = 3.14;
// let f = 2.7;
// let g = 16;
// let h = true;
// let i = false;
//
// console.log(hello);
// console.log(owu);
// console.log(com);
// console.log(ua);
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// console.log(f);
// console.log(g);
// console.log(h);
// console.log(i);


//
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
// let firstName = 'Roman';
// let middleName = 'Ihorovych';
// let lastName = 'Kutnyi';
//
// let person = `${firstName}  ${middleName}  ${lastName}`
// console.log(person)
//
// let person1 = firstName + ' ' + middleName + ' ' + ' ' + lastName  // конкатинація
// console.log(person1)



// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;

// let a = 100;
// let b = '100';
// let c = true;
//
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);



//
// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

let firstName2 = prompt('прошу ввести Ваше імя');
let middleName2 = prompt('прошу ввести Ваше по-батькові');
// let age2 = prompt('прошу ввести Ваш вік');
//
// let age2 = +prompt('прошу ввести Ваш вік');  // + переводить в число
let age2 = parseInt('прошу ввести Ваш вік');  // + переводить в число
console.log(age2)

let res = `${firstName2} ${middleName2} ${age2}`
console.log(res)


