const { getUsers, FreeUser, PaymentUser } = require("./script");

module.exports = {
    getUsers(req, res){
        const users = getUsers();    
        return res.status(200).send(users)
    },
    deleteUser(req,res){
        const users = getUsers();
        //req.params.userID er verdien som er skrevet ved /:userID : gjør at den må være unik
        const userID = req.params.userID
        // itererer gjennom listen med brukere
        //sjekker om userID brukeren har skrevet inn er den samme som man vil slette
        for (i =0; i < users.length; i++) {
            if (users[i].userID == userID)  {
                //sletter user fra users
                users.splice(i,1)
                //response om alt kjører fint 
                return res.status(200).send("User deleted!")
            }
        }
        
        return res.status(404).send("User doesn´t exist!")

    },
    createUser(req,res){
        const users = getUsers();
        // Oppretter en ny bruker, også hardcoded
        const user3 = new FreeUser ("Kristoffer", "Lundquist", "Male", [2000, 05, 26], 3);
        users.push(user3)
        // returnerer response som sender instansen user3
        return res.status(201).send(user3)
    },

    getImage(req,res){
        const users = getUsers();
        const userID = req.params.userID
        // itererer gjennom listen med brukere
        for (i =0; i < users.length; i++) {
            if (users[i].userID == userID)  {
                //returnerer response 
                return res.status(200).send(users[i].images);
            }
        }
        return res.status(404).send("Incorrect input")
    },
     
    getCreditCardInfo(req,res){
        const users = getUsers();
        const userID = req.params.userID
        
            for (i = 0; i < users.length; i++){
                if (users[i].userID == userID){
                    return res.status(200).send(users[i].creditCard);
                }
        }
            // dersom userID ikke stemmer vil den respondere med en string
            return res.status(404).send("User is not a premium user, or user doesn´t exist");
}

};


//curl -H "Authorization: Authorization: jwt eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJib2R5Ijoic3R1ZmYiLCJpYXQiOjE2MDQ5MzMwMjd9.KmzHWWpeaCrtPiifvKqZ42bVarVv9DSxETTaK-ZXD_Y" http://localhost:3001/users

// curl -H "Authorization: jwt eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJib2R5Ijoic3R1ZmYiLCJpYXQiOjE2MDI3ODg3NzJ9.S9pXqz-mCvMtGC8MWc7ZjV6XghrvWvdUCy-Xm5eucWE" http://localhost:3001/users
// curl -X "DELETE" -H "Authorization: jwt eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJib2R5Ijoic3R1ZmYiLCJpYXQiOjE2MDI3ODg3NzJ9.S9pXqz-mCvMtGC8MWc7ZjV6XghrvWvdUCy-Xm5eucWE" http://localhost:3001/users/1

// curl -X "POST" -H "Authorization: jwt eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJib2R5Ijoic3R1ZmYiLCJpYXQiOjE2MDI3ODg3NzJ9.S9pXqz-mCvMtGC8MWc7ZjV6XghrvWvdUCy-Xm5eucWE" http://localhost:3001/users

// curl -H "Authorization: jwt eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJib2R5Ijoic3R1ZmYiLCJpYXQiOjE2MDI3ODg3NzJ9.S9pXqz-mCvMtGC8MWc7ZjV6XghrvWvdUCy-Xm5eucWE" http://localhost:3001/users/1/images

// curl -H "Authorization: jwt eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJib2R5Ijoic3R1ZmYiLCJpYXQiOjE2MDI3ODg3NzJ9.S9pXqz-mCvMtGC8MWc7ZjV6XghrvWvdUCy-Xm5eucWE" http://localhost:3001/users/1/creditcard