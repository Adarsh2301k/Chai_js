function myName(){
    console.log("a");
    console.log("d");
    console.log("a");
    console.log("r");
    console.log("s");
    console.log("h");
}
// myName()


//  function addnumber(num1,num2){
//     console.log(num1+num2);
//  }

 

//  function addnumber(num1,num2){
//     let res=num1+num2
//     return res
   
//  }
 
//  const res=addnumber(3,8)
//  console.log(res)



 function calculatePrice(...num1){
    return num1
 }

 console.log(calculatePrice(200,400,500))
 
 const yash={
    username:"hitesh",
    price:199
 }
 function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);

 }
//  handleobject(yash);

 handleobject({
    username:"Adarsh",
    price:1
 })