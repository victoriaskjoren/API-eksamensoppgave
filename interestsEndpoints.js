
const { getUsers, getInterests, Interests  } = require("./script");

module.exports = {
    getInterests(req, res){
        const users = getUsers();    
        const userID = req.params.userID
        for (i =0; i < users.length; i++) {
             //sjekker om man har riktig user
            if (users[i].userID == userID)  {
                //returnerer alle brukerens eksisterende interesser
                return res.status(200).send(users[i].interests);
            }
        }    
        return res.status(404).send("User doesn´t exist!")
    
    },
    deleteInterest(req, res){
        const users = getUsers(); 
        const interest =  req.params.interest  
        const userID = req.params.userID
        for (i =0; i < users.length; i++) {
            //sjekker om userID brukeren har skrevet inn er den samme som man vil slette en interesse fra
            if (users[i].userID == userID)  {
                for (j =0; j < users[i].interests.length; j++) {
                    /*sjekker om interest har skrevet inn er den interessen man faktisk vil slette, trenger
                    derfor en nøstet for-løkke*/
                    if (users[i].interests[j].name == interest)  {
                        //sletter interesse og returnerer response string
                        users[i].interests.splice(j,1)
                    return res.status(200).send("Interest deleted!");
                }
            }
            return res.status(404).send("User doesn´t exist!");
        }
    }
    
        return res.status(404).send("Incorrect input");
                
    },


    createInterest(req,res){
        const users = getUsers();
        const interests = getInterests();
        const userID = req.params.userID
        // oppretter en ny instans av Interests, også hardcoded
        const interest3 = new Interests ("Animals");
        //legger til den nye interessen i array
        interests.push(interest3)
        

        for (i =0; i < users.length; i++) {
            if (users[i].userID == userID)  {
                users[i].interests.push(interest3)
                //gir er user en ny interesse
                return res.status(201).send(users[i].interests)
            }
        }
    }
};


// curl -H "Authorization: jwt eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJib2R5Ijoic3R1ZmYiLCJpYXQiOjE2MDI3ODg3NzJ9.S9pXqz-mCvMtGC8MWc7ZjV6XghrvWvdUCy-Xm5eucWE" http://localhost:3001/users/1/interests
// curl -X "DELETE" -H "Authorization: jwt eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJib2R5Ijoic3R1ZmYiLCJpYXQiOjE2MDI3ODg3NzJ9.S9pXqz-mCvMtGC8MWc7ZjV6XghrvWvdUCy-Xm5eucWE" http://localhost:3001/users/1/interests/Nature

// curl -X "POST" -H "Authorization: jwt eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJib2R5Ijoic3R1ZmYiLCJpYXQiOjE2MDI3ODg3NzJ9.S9pXqz-mCvMtGC8MWc7ZjV6XghrvWvdUCy-Xm5eucWE" http://localhost:3001/users/1/interests