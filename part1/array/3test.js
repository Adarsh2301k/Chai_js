const marvel=["thor","ironman","siderman"]
const dc=["superman","flash","batman"]

// marvel.push(dc)
//  console.log(marvel);

// const all=marvel.concat(dc);
// console.log(all)

// const all_hero={...marvel,...dc}
// console.log(all_hero)

const arr2=[1,2,3,4,[5,6],7,[8,9,[10]]];
const real_arr2=arr2.flat(Infinity)
console.log(real_arr2)


console.log(Array.isArray("Hitesh"))
console.log(Array.from({name:"hitesh"}))  
// interesting case


let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));
