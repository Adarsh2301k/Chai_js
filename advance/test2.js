// let myName="hitesh     "
// console.log(myName.truelength)


let myHero=["thor","ironman"]
let heroPower={
    thor:"hammer",
    ironman:"electric",

    getSpider:function(){
        console.log(`Spidy power is ${this.ironman}`);
        
    }
}
Object.prototype.hitesh=function(){
    console.log('hitesh is present in all object');
    
}
// heroPower.hitesh()
myHero.hitesh()




// inheritance

const teacher={
    makeVideo:true
}
const support={
    isAvailable:false
}
const TAsupport={
    fulltime:true,
    makeAssign:'JS Assign'
    _proto_:TAsupport

}
