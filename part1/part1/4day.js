const id =Symbol("234")
const idAnother =Symbol('234')
console.log(id=== idAnother);

const myfun= function (){
    console.log("Hello world");
    
}

let user={
    email:"user@email.com",
    upi:"yser@ybl"
}
let user2=user
user2.email ="hitesh@gmail.com"
console.log(user.email);
console.log(user2.email);


const game =new String('hitesh')
console.log(game[0]); 
const url="https://adarsh.com"
console.log(url.replace('adarsh','yash'));
console.log(url.includes('sun'));
console.log(game.split(' '))

const min=20;
const max=40;

Math.random()


