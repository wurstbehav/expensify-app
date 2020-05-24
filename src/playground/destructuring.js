const person = {
    name: 'Sushan',
    age: 21,
    location: {
        city: 'Chandrapur',
        temp: 35
    }
}

const { name: firstName = 'Anonymous', age } = person
console.log(`${firstName} is ${age}.`);

const { city, temp: temperature } = person.location
if (city && temperature) {
    console.log(`Its ${temperature} in ${city}.`);
}

const book = {
    title: 'Ego is the enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
}

const { name: publisherName = 'Self Published' } = book.publisher

console.log(publisherName);
