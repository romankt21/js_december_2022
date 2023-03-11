// function  Human(name) {
//     this.name = name;
//     this.greeting  = function (msg) {
//         console.log(`${msg} my name is ${this.name}`)
//     }
// }
//
// let human1 = new Human('vasyl');
//
// let friend = {
//     name: 'petro',
//     age: 25
// }
//
// human1.greeting.call(friend, 'aloha');
// human1.greeting.apply(friend, ['aloha', 'qwe']);


// function User(name, age) {
//     this.name = name;
//     this.age = age;
// }
//
// let user = new User('vasyl', 12)
// user.greeting = msg => {return `${msg} my name is ${this.name}`;};
// user.greeting = function (msg) {
//     return `${msg} my name is ${this.name} `;
// };
//
// console.log(user.greeting('hi', 'bongur'));
//
// let user2 = new User('ira', 10);
// // let greetingCopy = user.greeting.bind(user2, 'привіт')
// let greetingCopy = user.greeting.bind(user2)
// console.log(greetingCopy('привіт'));
//


// function Human(name) {
//     this.name = name;
//     this.greeting = function (msg) {
//         console.log(`${msg} my name is ${this.name}`);
//     };
//
// }
// let human1 = new Human('vasya');
//
//
// let friend = {
//     name: 'kokos',
//     age: 123
// }
//
// human1.greeting.call(friend, 'aloha', 'asddadsqwe');
// human1.greeting.apply(friend, ['hello', 'asdasd', 'qweqweq']);
//
//
// let greetingCopy = human1.greeting.bind(friend);
// greetingCopy('wasssszzzzup');


// let user = {name: 'olya', age: 31, status: false};
//
// let userCopy = Object.create(user);
// userCopy.surname = 'kvas'
// user.mail = 'lviv'
//
// console.log(userCopy);
// console.log(userCopy.name);
// console.log(userCopy.age);
// console.log(userCopy.status);
//
//
// console.log(userCopy.name, userCopy.hasOwnProperty('name'));
// console.log(userCopy.age, userCopy.hasOwnProperty('age'));
// console.log(userCopy.status, userCopy.hasOwnProperty('status'));
// console.log(userCopy.surname, userCopy.hasOwnProperty('surname'));


// class User {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//         this.foo = function () {
//             console.log(this);
//         };
//     }
//
//
//     bar() {
//             console.log(this);
//
//     }
// }
//
// let user = new User('petro', 33);
// console.log(user)

function Car(model, power) {
    this.model = model;
    this.power = power;

}
function SuperCar(model, power, turbo) {
    Car.apply(this /*supercar*/, arguments);
    this.turbo = turbo;
}

let superCar = new SuperCar('asd', 123, true);
console.log(superCar);

// 1,18.04