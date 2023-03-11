// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

// let id = 1;
//
// function User(name, surname, email, phone) {
//     this.id = id++;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
//     // console.log(this)
// }
//
//
// // створити пустий масив, наповнити його 10 об'єктами new User(....)
// let users = [
//     new User('mykola', 'mykolyshyn', 'myk', 123),
//     new User( 'petro', 'petrenko', 'pet', 234),
//     new User( 'ivan', 'ivanenko', 'iv', 345),
//     new User( 'vasyl', 'vasylenko', 'vas', 456),
//     new User( 'andriy', 'andriyenko', 'and', 567),
//     new User( 'zoriana', 'zorin', 'zor', 678),
//     new User( 'lesia', 'lesko', 'les', 789),
//     new User( 'oksana', 'oksan', 'oks', 890),
//     new User( 'olena', 'olench', 'olen', 901),
//     new User( 'vira', 'vira', 'vir', 112)
// ]
// console.log('*****');
// console.log(users)


// //- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

// let filterUsers = users.filter(function (value){
//     return value.id % 2;
// });
// console.log(filterUsers);



//
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
// let sortUsers = users.sort(function (a,b){
//     return a.id - b.id;
// });
// console.log(sortUsers);


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)



// let id = 1;
//
// class Client {
//     constructor(name, surname , email, phone, order) {
//         this.id = id++;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
// // створити пустий масив, наповнити його 10 об'єктами Client
//
// let clients = [
//     new Client('mykola', 'mykolyshyn', 'myk', 123, ['tea', 'apple']),
//     new Client( 'petro', 'petrenko', 'pet', 234,['tea']),
//     new Client( 'ivan', 'ivanenko', 'iv', 345, ['tea', 'apple']),
//     new Client( 'vasyl', 'vasylenko', 'vas', 456, ['tea']),
//     new Client( 'andriy', 'andriyenko', 'and', 567, ['milk', 'potato']),
//     new Client( 'zoriana', 'zorin', 'zor', 678, ['milk', 'potato', 'pineapple']),
//     new Client( 'lesia', 'lesko', 'les', 789,['milk', 'potato', 'pineapple']),
//     new Client( 'oksana', 'oksan', 'oks', 890, ['coffee', 'cucumber']),
//     new Client( 'olena', 'olench', 'olen', 901, ['coffee', 'cucumber']),
//     new Client( 'vira', 'vira', 'vir', 112,['coffee', 'cucumber'])
// ];
//
// console.log(clients)
//
//
//
//
// // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// //
//
// let sortClients = clients.sort(function (a,b){
//     return a.order.length - b.order.length;
// });
// console.log(sortClients)
// //
// let sortClients1 = clients.sort((a, b) => a.order.length - b.order.length)
// console.log(sortClients1)



// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(model, producer, year, speed, engine) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.speed = speed;
    this.engine = engine;

    this.drive = function () {
        console.log(`їдемо зі швидкістю ${speed}`)
    };

    this.info = function () {
        console.log(`model: {model}`)
    }

}

let cars = [
    new Car('slavuta', 'zaz', 2003, 115, 1.2 ),
    new Car('grandscienic', 'renault', 2010, 150, 1.5 )
]

console.log(cars)
//
// // створити пустий масив, наповнити його 10 об'єктами new User(....)
// let users = [
//     new User('mykola', 'mykolyshyn', 'myk', 123),
//     new User( 'petro', 'petrenko', 'pet', 234),
//     new User( 'ivan', 'ivanenko', 'iv', 345),
//     new User( 'vasyl', 'vasylenko', 'vas', 456),
//     new User( 'andriy', 'andriyenko', 'and', 567),
//     new User( 'zoriana', 'zorin', 'zor', 678),
//     new User( 'lesia', 'lesko', 'les', 789),
//     new User( 'oksana', 'oksan', 'oks', 890),
//     new User( 'olena', 'olench', 'olen', 901),
//     new User( 'vira', 'vira', 'vir', 112)
// ]
// console.log('*****');
// console.log(users)



//
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
