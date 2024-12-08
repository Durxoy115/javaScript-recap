const numbers = [11,22,33,44];
const student = {
    name: 'Durjoy',
    age: 26,
    movies: ['Movie1, Movie2']
}

const about = `My name is ${student.name}. I am ${student.age} years old. I like to watch ${student.movies[1]} and my fav number is ${numbers[0]}.`
console.log(about);

const newNumber = [...numbers];
numbers.push(99);
numbers.push(99);
numbers.push(99);
numbers.push(99);
console.log(newNumber);
console.log(numbers);