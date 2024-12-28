const myarr=[1,2,3,4]
const myhero=["shakti","iron","nagraj"]

console.log(myarr[0]);
myhero.push("yashram");
myarr.pop();
console.log(myhero);
console.log(myarr);

myarr.unshift(9) 
// push 9 in the start

myarr.shift()
// pop element from start
console.log(myarr.includes(9));
console.log(myarr.indexOf(9));
console.log(myarr.indexOf(3));

const newarr=myarr.join()
// bind bhi karega aur string me bi convert kr diya
console.log(myarr)
console.log(typeof newarr)