//Elements can be of different types 
//arrays are dynamic- support insertion , deletion , replacement 
const arr = [ 'hello', 27 , false , null];
console.log(Array.isArray(arr));

const movies = ['Jab WE Met', '3 Idiots', 'Idli Kadhai', 'DHURANDHAR', 'Chhichhore'];

console.log(movies.length);

//indexing
console.log(movies[3]);
console.log(movies.indexOf('3 Idiots'));
console.log(movies.at(-2));

movies[2]= 'Taare Zameen Par';

console.log(movies);

//slicing
console.log(movies.slice(1, 4));
console.log(movies.slice(-3, 50));

//Adding and removing elements in arrays
movies.push('Dangal');// adds element to the end
movies.unshift('Bajrangi Bhaijaan');// adds element to the start
console.log(movies);

movies.pop();// removes element from the end
movies.shift();// removes element from the start
console.log(movies);

// Removing elements
//movies.splice(2, 2);// removes 2 elements from index 2
//movies.splice(2,2, 'Bahubali', 'KGF');// removes 2 elements from index 2 and adds 2 new elements(replacing)
movies.splice(2, 0, 'Bahubali', 'KGF');// adds 2 new elements at index 2 without removing any element(insertion)
console.log(movies);