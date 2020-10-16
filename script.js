class User {

    interests = [];
    matches = [];
    images = [];
    

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

class PaymentUser extends User {
    creditCard= [];
    constructor (firstName, lastName, gender, birthDay, userID){
        super (firstName, lastName, gender, birthDay, userID)
       
        }
        checkCardNumber() {
            if (this.cardNumber.length != int)
            return res.status(401).send("Cardnumber must be x digits");
        }
        checkCcv(){
            if (this.ccv.length === 3)
            return res.status(401).send("Ccv must be 3 digits");
    }
    
}
class FreeUser extends User{
    constructor (firstName, lastName, gender, birthDay, userID){
        super(firstName, lastName, gender, birthDay, userID);
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
class Images{
    constructor(url){
         this.url = url;
    }
}
class CreditCard{
    constructor(cardName, cardNumber, ccv){
        this.cardName = cardName;
        this.cardNumber = cardNumber;
        this.ccv = ccv;
    }
}
const interest1 = new Interests("Cars");
const interest2 = new Interests("Nature");
const interests = [interest1, interest2];

const match1 = new Match ("Jeppe");
const match2 = new Match ("Oskar");
const matches = [match1, match2];

const image1= new Images ("src = url1");
const image2 = new Images("src = url2");
const images = [image1, image2];

const user1 = new PaymentUser("Victoria", "Skjøren", "female", [2000, 05, 12], 1);
const user2 = new FreeUser("Hayley", "Sugden", "female", [2001, 11,27], 2);
const users = [user1, user2];



user1.interests= [interest1, interest2];
user2.interests = [interest2];

user1.matches = [match2];
user2.matches = [match1, match2];

user1.images = [image1];
user2.images = [image2];


module.exports = {
    getUsers() {
        return users;
    },
    getInterests(){
        return interests;
    },

    getMatches(){
        return matches;
    },
    getImage(){
        return images;

    },

    FreeUser: FreeUser,
    PaymentUser: PaymentUser,
    CreditCard: CreditCard,
    Images: Images,
    Interests: Interests,
    Match: Match
}