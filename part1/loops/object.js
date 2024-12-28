// const obj={
//     js:'javscript',
//     cpp:'c++',
//     rd:'ruby'

// }
// for (const key in obj) {
//    console.log(`${key} shortcut for ${obj[key]}`);
   
// }


const program=["js","cpp","py","java"]
// for (const num in program) {
//     console.log(program[num]);
    
// }


program.forEach(function(val){
    console.log(val);;
    
})

// program.forEach((item)=>{
//     console.log(item);
    
// })


function printMe(item){
    console.log(item);
    
}
program.forEach(printMe)
