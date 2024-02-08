// Destructing 

const todo = {
    id: 1,
    title: 'Take out trash',
    user: {
        name: 'Will'
    },
};

const {
    id: todoID, 
    title,
    user: { name },
} = todo;

// {} destructing Object

// [] destructing Arrays 

const numbers = [23, 67, 33, 49];

const [first, second, ...rest] = numbers // (...) in this case is the rest method 


console.log(first, second, rest);