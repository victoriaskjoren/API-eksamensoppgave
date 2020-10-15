class User {

    interests = [];
    matches = [];

    constructor (firstName, lastName, gender, birthDay, userID){
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.birthDay = birthDay;
        this.userID = userID
    }

    calculateAge() {
        var date_1 = new Date(this.birthDay);
        var diff_ms = Date.now() - date_1.getTime();
        var age_dt = new Date(diff_ms);
        return Math.abs(age_dt.getUTCFullYear() - 1970);
    }

    checkAge(){
        if (this.calculateAge < 18)
            return "Not old enough"
    }

    fullName() {
        return this.firstName + " " + this.lastName;
    }
}

class PaidUser extends User {
    constructor (firstName, lastName, gender, birthDay, userID, cardName, cardNumber, ccv){
        super (firstName, lastName, gender, birthDay, userID)
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
    constructor (firstName, lastName, gender, birthDay, userID){
        super(firstName, lastName, gender, birthDay, userID);
        
    
    }

}
class Image{
    constructor(){

    }
}

class Interests {
    constructor (name){
        this.name = name;

    }
}

class Match {
    constructor(user){
        this.user = user;

    }
}

const interest1 = new Interests("Cars")
const interest2 = new Interests("Nature")

const match1 = new Match ("Jeppe")
const match2 = new Match ("Oskar")

const user1 = new PaidUser("Victoria", "Skjøren", "female", [2000, 05, 12], 1, "cardName", "cardNumber", "ccv");
const user2 = new FreeUser("Hayley", "Sugden", "female", [2001, 11,27], 2);

const users = [user1, user2];

user1.interests= [interest1, interest2];
user2.interests = [interest2];

user1.matches = [match2]
user2.matches = [match1]


module.exports = {
    getUsers() {
        return users;
    },
    FreeUser: FreeUser
}



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
