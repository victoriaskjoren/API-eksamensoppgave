class User {
    constructor (firstName, lastName, gender, birthDay){
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.birthDay = birthDay;
    }

    calculateAge() {
        var date_1 = new Date(this.birthDay);
        var diff_ms = Date.now() - date_1.getTime();
        var age_dt = new Date(diff_ms);
        return Math.abs(age_dt.getUTCFullYear() - 1970);
    }

    fullName() {
        return this.firstName + " " + this.lastName;
    }
}

class PaidUser extends User{
    constructor (firstName, lastName, gender, birthDay, cardName, cardNumber, ccv){
        super (firstName, lastName, gender, birthDay)
        this.cardName = cardName;
        this.cardNumber = cardNumber;
        this.ccv = ccv;
        }

        checkCardNumber() {
            if (PaidUser.cardNumber.length === int)
            return true;
            else
            return false;
        }

        checkCcv(){
            if (PaidUser.ccv.length === 3)
            return true;
            else
            return false;
        
    }
    
}
class FreeUser extends User{
    constructor (firstName, lastName, gender, birthDay){
        super(firstName, lastName, gender, birthDay);
        
    
    }

}
class Image{
    constructor(){

    }
}

class Interest {
    constructor (interests){
        this.interests = []
    }
}

class Match {
    constructor(matches){

        this.mathces = []
    }
}



const user1 = new User("Victoria", "Skjøren", [2000, 05, 12], "cardName", "cardNumber", "ccv")
const user2 = new User("Hayley, Sugden", "female", [20001, 11,27])



{/* <user> 

<paymentuser>

<creditcard> </creditcard>

 </paymentuser>

<freeuser> </freeuser>

<image> </image>

</user>
 */}

//  <interest> </interest>   

//   <match> </match>
