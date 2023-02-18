// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

// let arr = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 9, true];
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);
// console.log(arr[5]);
// console.log(arr[6]);
// console.log(arr[7]);
// console.log(arr[8]);
// console.log(arr[9]);
// console.log(arr[10]);


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
// let bookOne = {title: 'kolobok', pageCount: 20, genre: 'tale'}
// let bookTwo = {title: 'Sherlock Holmes', pageCount: 100, genre: 'detective'}
// let bookThree = {title: 'Superman', pageCount: 200, genre: 'comics'}
//
// console.log(bookOne);
// console.log(bookTwo);
// console.log(bookThree);


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

// let bookOne = {title: 'kolobok', pageCount: 20, genre: 'tale', authors: [{name: 'people', age: 500}]};
// let bookTwo = {title: 'Sherlock Holmes', pageCount: 100, genre: 'detective', authors: [{name: 'Konan Doile', age: 200}]}
// let bookThree = {title: 'Superman', pageCount: 200, genre: 'comics', authors: [{name: 'Gerry Sigel', age: 50}]}
// //
// console.log(bookOne);
// console.log(bookTwo);
// console.log(bookThree);


// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
// let user = [
//     {name: 'ivan', username: 'iv', password: 'iq1'},
//     {name: 'mykola', username: 'iv', password: 'm2'},
//     {name: 'petro', username: 'iv', password: 'p3'},
//     {name: 'igor', username: 'iv', password: 'i4'},
//     {name: 'vasyl', username: 'iv', password: 'v5'},
//     {name: 'ivan', username: 'iv', password: 'iv6'},
//     {name: 'ivan', username: 'iv', password: 'iv7'},
//     {name: 'ivan', username: 'iv', password: 'iv8'},
//     {name: 'ivan', username: 'iv', password: 'iv9'},
//     {name: 'ivan', username: 'iv', password: 'iv10'},
//
// ]

//   //виведемо пароль 5 користувача
// console.log(user[5].password);


// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// let x = 0;
// if (x !==0) {
//     console.log('вірно');
// } else {
//     console.log('не вірно');
// }


// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

// let time = 60;
// if (time > 0 && time <= 15) {
//     console.log('1 чверть')
// } else if (time >= 16 && time <= 30) {
//     console.log('2 чверть')
// } else if (time >= 31 && time <= 45) {
//     console.log('3 чверть')
// } else if (time >= 46 && time <= 60) {
//     console.log('4 чверть')
// } else {
//     console.log('не правильно введений час')
// }

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// let day = 32;
// if (day > 0 && day <= 10) {
//     console.log('1 декада');
// } else if (day > 10 && day <= 20) {
//     console.log('2 декада');
// } else if (day > 20 && day <= 31) {
//     console.log('2 декада');
// } else {
//     console.log('такого числа немає')
// }

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано
// на цей день (можна замість плану на день, назву дня англійською).
// let day = prompt('прошу ввести день тиждня');
// switch (day) {
//     case '1':
//         console.log('почистити зуби');
//         break;
//
//     case '2':
//         console.log('поснідати');
//         break;
//
//     case '3':
//         console.log('зробити зарядку');
//         break;
//
//     case '4':
//         console.log('вбратися');
//         break;
//
//     case '5':
//         console.log('піти на роботу');
//         break;
//
//     case '6':
//         console.log('попрацювати');
//         break;
//
//     case '7':
//         console.log('повернутися додому');
//         break;
//
//     default:
//         console.log('неправильно введене число')
//
// }


//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

// let number1 = prompt('прошу ввести 1 число');
// let number2 = prompt('прошу ввести 2 число');
//
// if (number1 > number2) {
//     console.log(number1)
// } else if (number2 > number1) {
//     console.log(number2)
// } else if (number1 === number2) {
//     console.log('числа рівні')
// }


//
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

let x = undefined;
x= x || 'default'
console.log(x)

// let y = '';
// let res = y || 'default';       //оператор або вибирає перше яке трапляється значення true. jcr y ='', а це false змінній res присвоюється 'default'
// console.log(res);



//
//
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
//     За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// if (coursesAndDurationArray[0].monthDuration > 5) {
//     console.log('super0')
// } if (coursesAndDurationArray[1].monthDuration > 5) {
//     console.log('super1')
// } if (coursesAndDurationArray[2].monthDuration > 5) {
//     console.log('super2')
// } if (coursesAndDurationArray[3].monthDuration > 5) {
//     console.log('super3')
// } if (coursesAndDurationArray[4].monthDuration > 5) {
//     console.log('super4')
// } else if (coursesAndDurationArray[5].monthDuration > 5) {
//     console.log('super5')
// }

