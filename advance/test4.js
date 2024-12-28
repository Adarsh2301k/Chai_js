class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`Username :${this.username}`);       
    }
    createId(){
        return `234`
    }

}
const hitesh=new User("hitesh")
console.log(hitesh.createId());

class Teacher extends User{
    constructor(username,email){
        super(email)
        this.email=email
    }
}
const iphone=new Teacher("iphone","iphone@gmail.com")
iphone.logMe()


