// Object literals are data structures that hold key/value pairs 
let x;


const person = {
    name: 'Will',
    age: 30,
    isAdmin: true,
    address: {
        street: 'kedzie',
        city: 'EP',
        state: 'IL',
    },
    hobbies: ['art', 'sports'],
};

x = person.name; // to access a specific property(key) from an object we use dot syntax 
x = person.address.street;
x = person.hobbies[0];

person.name = 'JG';
person['isAdmin'] = false;

delete person.age;

person.hasChildren = true;

person.greet = function () {
    console.log(`Hello, my name is ${this.name}`);
};

person.greet();

const person2 = {
    'firstName': 'Will',
    'lastName': 'Walton',
};

x = person2['firstName'];

console.log(x);

