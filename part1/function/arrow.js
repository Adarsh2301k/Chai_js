// const user={
//     username:"hitesh",
//     price:999,

//     welcome :function(){
//         console.log(`${this.username}`,"welcome to website");
//         console.log(this);
        
//     }
//  }
// user.welcome()
// user.username="sam"
// user.welcome()
// console.log(this);




const chai =()=>{
    let username="hitesh"
    console.log(this);   
}
chai()



const add=(num,num2)=>{
    return num+num2
}
console.log(add(3,4))

// or write this

const addtwo=(num,num2) =>(num+num2)
console.log(addtwo(5,7))


const add4=(num,num2) =>({user:"hitesh"})
console.log(add4(67,65))
