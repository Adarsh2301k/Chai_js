// const timeuser=new Object()
//   or upper vla singleton  aur niche vla nonsingleton
const user={}
user.id="123"
user.name="Sam"
user.isLoggedin=false
console.log(user);

const regularUser={
    email:"user@gmail.com",
    fullname:{
        userfullname:{
            first:"hitesh",
            last:"lallu"
        }
    }

}
console.log(regularUser.fullname.userfullname.first)


// const obj1 ={1:"a",2:"b"}
// const obj2 ={3:"a",4:"b"}
// const obj4={obj1,obj2}
// const obj3=Object.assign(obj1,obj2)
// console.log(obj3)
// console.log(obj4)
