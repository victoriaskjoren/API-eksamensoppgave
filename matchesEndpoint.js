
const { getUsers, getMatches, Match} = require("./script");

module.exports = {
    getMatches(req, res){
        const users = getUsers(); 
        const userID = req.params.userID
        for (i =0; i < users.length; i++) {
            //sjekker om man har riktig user
            if (users[i].userID == userID)  {
                //returnerer alle brukerens eksisterende mathcer
                return res.status(200).send(users[i].matches);
            }
        }
        return res.status(404).send("User doesn´t exist!")
    
    },
    deleteMatch(req, res){
        const users = getUsers(); 
        const match =  req.params.match
        const userID = req.params.userID
        for (i =0; i < users.length; i++) {
            //sjekker om userID brukeren har skrevet inn er den samme som man vil slette en matchfra
            if (users[i].userID == userID)  {
                for (j =0; j < users[i].matches.length; j++) {
                    /*sjekker om interest har skrevet inn er den match man faktisk vil slette, trenger
                    derfor en nøstet for-løkke*/
                    if (users[i].matches[j].user == match)  {
                        //sletter match og returnerer response string
                        users[i].matches.splice(j,1)
                    return res.status(200).send("Match deleted!");
                }
            }
            return res.status(404).send ("User doesn´t exist");
        }
    }
        return res.status(404).send("Interrest doesn´t exist!");
                
    },
    
    newMatch(req,res){
        const users = getUsers();
        const matches= getMatches();
        const userID = req.params.userID
        // oppretter en ny instans av Match, også hardcoded
        const match3 = new Match ("Martin");
         //legger til den nye matchen i array
        matches.push(match3)

        for (i =0; i < users.length; i++) {
            if (users[i].userID == userID)  {
                users[i].matches.push(match3)
                //pusher matcher til brukeren med riktig userID
                return res.status(201).send(users[i].matches)
            }
        }
    }
};


// curl -H "Authorization: jwt eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJib2R5Ijoic3R1ZmYiLCJpYXQiOjE2MDI3ODg3NzJ9.S9pXqz-mCvMtGC8MWc7ZjV6XghrvWvdUCy-Xm5eucWE" http://localhost:3001/users/1/matches
// curl -X "DELETE" -H "Authorization: jwt eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJib2R5Ijoic3R1ZmYiLCJpYXQiOjE2MDI3ODg3NzJ9.S9pXqz-mCvMtGC8MWc7ZjV6XghrvWvdUCy-Xm5eucWE" http://localhost:3001/users/1/matches/Oskar

// curl -X "POST" -H "Authorization: jwt eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJib2R5Ijoic3R1ZmYiLCJpYXQiOjE2MDI3ODg3NzJ9.S9pXqz-mCvMtGC8MWc7ZjV6XghrvWvdUCy-Xm5eucWE" http://localhost:3001/users/1/matches