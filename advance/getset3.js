class User = {
    _email:"g@gmail.com",
    _password:"sdg",

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email=value
    }

}