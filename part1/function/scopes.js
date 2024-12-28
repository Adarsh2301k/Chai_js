let a=10
const b=34
var c=40


// var global hai
// let scope me rahega (block scope)

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username="hitesh"
    function two(){
        const website="youtube"
        console.log(username);
        
    }
    // console.log(website);
    two();
}
one()