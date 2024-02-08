// other ways to create an object 
let x;

 const todo = new Object();

 todo.id = 1 
 todo.name = 'Get Milk';
 todo.completed = true;

 x = todo;

//  Nesting 

const person = {
    address: {
        coords: {
            lat: 42.9384,
            lng: -71.3232,
        },
    },
};

x = person.address.coords.lng;

// Spread Operator 

const obj1 = {a: 1, b: 2};
const obj2 = {c: 3, d: 4};

const obj3 = {...obj1, ...obj2} // Spread operator (...)
const obj4 = Object.assign({}, obj1, obj2); // any object that is assigned after {} will be passed through the empty {}

const todos = [
    { id: 1, name: 'Buy Milk'},
    { id: 2, name: 'Pickup kids'},
    { id: 3, name: 'Take garbage out'},
]; // Objects in an Array 

x = todos[1].name;

x = Object.keys(todo); // this takes the keys(properties) from the todo object and put them in an Array 

// get the length of an object 

x = Object.keys(todo).length; // can't just use the length method, it won't work, you will have ot use the keys method chained with the length method

// Array with all the values

x = Object.values(todo); // this gave us the values of the keys(properties)

x = Object.entries(todo); // Arrays with key/value pairs 

x = todo.hasOwnProperty('name'); // this give the Boolean if the property passed through is true of false

 console.log(x);