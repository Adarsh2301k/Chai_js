// object literals


// Object.create          aise bhi bna skte ho
const user={
    name:"Hitesh",
    "fullname":"hitesh lallu",
    Age:"18",Location:"Jaipur"
    ,Email:"hitesh@gmail.com",isLoggedin:false
}
console.log(user.Email)
console.log(user["Email"])
console.log(user["fullname"])
user.Email="hitestlallu@gmail.com"
console.log(user["Email"])
// freeze  to not change after defining

user.greeting=function(){
    console.log("Hello JSuser")
}
user.greeting2=function(){
    console.log(`Hello JSuser,${this.name}`)
}
console.log(user.greeting());
console.log(user.greeting2());