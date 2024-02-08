// JavaScript Object Notation 

const post = {
    id: 1,
    title: 'Post One',
    body: 'This is the body',
};

// Covert to a JSON String

const str = JSON.stringify(post); // will turn an object into a JSON string, used with local storage that can store only strings 

//  Parse JSON, with parse you can get the id, title, or body console.log(obj.id)

const obj = JSON.parse(str);

const posts = [
    {
        id: 1,
        title: 'Post One',
        body: 'This is the body',
    },
    {
        id: 2,
        title: 'Post Two',
        body: 'This is the body',
    }
];

const str2 = JSON.stringify(posts);

console.log(posts);