// const coding=['js','ruby','java']

// const values=coding.forEach((item)=>{
//     console.log(item);
//     //  for each koi bhi value retrun nhi krta
    
// })
// console.log(values);

// soln



// const mynums=[1,2,3,4,5,6,7,8,9]
// // let newnums=mynums.filter((num)=>num>4)  
// let newnums=mynums.filter((num)=>{ return num>4})
// console.log(newnums);


const mynums=[1,2,3,4,5,6,7,8,9]
const newnums=[]
mynums.forEach((num)=>{
    if(num>4){
        newnums.push(num)
    }
})
console.log(newnums);
