// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

function getRandom (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandom (1, 100));

// - Змінти попередню функцію, щоб діапазон можна було визначити через аргументи.

const someNumber = randomNum ([1, 2, 100, 34, 45, 556, 33])

function randomNum (array) {
    return () => array[Math.floor(Math.random() * array.length)]
}

console.log(someNumber())

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

let someNumbers1 = [1, 2, 100, 34, 45, 556, 33];
let numbers = someNumbers1.sort( (a, b) => {
    return a - b;
} );

console.log(numbers);




// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, за лишивши тільки парні числа
let pairedNums = someNumbers1.filter(function (number) {
    return number %2==0;
})

console.log(pairedNums);

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на срінгові.

let map = someNumbers1.map( function (number) {
    return number.toString()
})
console.log(map);



// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
class User {
    constructor(id, name, surname, email, phone) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
    }
}

// створити пустий масив, наповнити його 10 об'єктами new User(....)
let users = [
    anna = new User (2, 'Anna', 'Lobach', 'some@email.ua', '0501538245'),
    vika = new User (5, 'Vika', 'Ivanova', 'some@email.ua', '0501538245'),
    anton = new User (10, 'Anton', 'Kogut', 'some@email.ua', '0501538245'),
    alla = new User (14, 'Alla', 'Lopatina', 'some@email.ua', '0501538245'),
    kira = new User (8, 'Kira', 'Morozova', 'some@email.ua', '0501538245'),
    nik = new User (15, 'Nik', 'Poloz', 'some@email.ua', '0501538245'),
    vova = new User (22, 'Vova', 'Lobach', 'some@email.ua', '0501538245'),
    gleb = new User (17, 'Gleb', 'Yankov', 'some@email.ua', '0501538245'),
    zhenya = new User (19, 'Zhenya', 'Oglu', 'some@email.ua', '0501538245'),
    lina = new User (30, 'Lina', 'Bach', 'some@email.ua', '0501538245')
];

console.log(users);

// Взяти масив цей  User[] та: Відфільтрувати , залишивши тільки об'єкти з парними id (filter) та Відсортувати його по id. по зростанню (sort)

let filter = users.filter(function (user) {
    return user.id %2==0;
});
console.log(filter);

let sort = users.sort(function (user1, user2){
    return user1.id - user2.id;
});

console.log(sort);

