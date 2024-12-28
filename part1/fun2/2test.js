// const mynums=[1,2,3,4,5,6,7,8,9]

// const newnums=mynums.map((num)=>num+10)
// console.log(newnums);



// const newnums =mynums.map((num)=>num*20)
//                         .map((num)=>num+2)
//                         .filter((num)=>num>=40)
// console.log(newnums);




const mynums=[1,2,3,4]
const mytotal=mynums.reduce(function(acc,currval){
    console.log(`acc :${acc} ans currval :${currval}`);
    
    return acc+currval
},0)
console.log(mytotal);



// const mynums=[1,2,3,4]
// const total=mynums.reduce((acc,currval)=>acc+currval,0)
// console.log(total);



