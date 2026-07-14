const marvelHeroes=["Thor","Ironmen","spiderman"]
const dcHeroes=["Batman","Superman","flash"]
// marvelHeroes.push(dcHeroes);
// console.log(marvelHeroes);
// const superHeroes=marvelHeroes.concat(dcHeroes);
// console.log(superHeroes);
// const all_Heroes=[...marvelHeroes,...dcHeroes]
// console.log(all_Heroes);
const anotherArray=[1,2,3,[4,5],[6,7,[8,9]]]
const real_anotherArray=anotherArray.flat(Infinity)
console.log(real_anotherArray);

console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));

