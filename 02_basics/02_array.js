const marvel_heros=["thor","Ironman","Spiderman"];
const dc_heros=["superhero","flash","batman"];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);

// console.log(marvel_heros[3][1]);


//concat does not change org array it returns new array;
// const allHero=marvel_heros.concat(dc_heros);
// console.log(allHero);


// ...spread operator--
// const all_new_heros=[...marvel_heros, ...dc_heros];

// console.log(all_new_heros);

// const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]];


// const other_Arr=another_array.flat(Infinity); 
// console.log(other_Arr);



console.log(Array.isArray("Sakshi"));
console.log(Array.from("Sakshi"));
console.log(Array.from({name:"Sakshi"}));//interesting you have to mention what you have  to convert into array;

let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1,score2,score3));
