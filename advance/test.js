function createUser(username,score){
    this.username=username
    this.score=score

}
createUser.prototype.increament=function(){
    this.score++
}
createUser.prototype.printMe=function(){
    console.log(`score is ${this.score}`)
}

const chai=new createUser("chai",25)
const tea=createUser("tea",240)

chai.printMe()