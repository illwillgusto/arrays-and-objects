const books = [
    {
    title: 'Think and Grow Rich',
    author: 'Napolean Hill',
    status: {
        own: true,
        reading: false,
        read: false,
    },
},
{
    title: 'Big Money',
    author: 'Will Walton',
    status: {
        own: true,
        reading: false,
        read: false,
    },
},
{
    title: 'Road Ahead',
    author: 'Bill Gates',
    status: {
        own: true,
        reading: false,
        read: false,
    },
},
];

books[0].status.read = true;
books[1].status.read = true;
books[2].status.read = false;




const {title: firstBook} = books[0]; // destructed the first title property which was 'title'

console.log(firstBook);

const library = JSON.stringify(books);

console.log(library);