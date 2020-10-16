
const { getUsers, getMatches, Match} = require("./script");

module.exports = {
    getMatches(req, res){
        const users = getUsers();   
        const userID = req.params.userID
        console.log (userID);
        for (i =0; i < users.length; i++) {
            if (users[i].matches === [""])
                return res.status(404).send("This user has 0 matches");
            if (users[i].userID == userID)  {
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
            if (users[i].userID == userID)  {
                for (j =0; j < users[i].match.length; j++) {
                    if (users[i].matches[j].user == matches)  {
                        users.splice(i,1)
                    return res.status(200).send("Match deleted!");
                }
            }
        }
    }
    
                  return res.status(404).send("User doesn´t exist!");
                
            },
    newMatch(req,res){
        const users = getUsers();
        const match3 = new Match ("Martin");
        users.push(match3)
        return res.status(201).send(match3)
    }
};


// curl -H "Authorization: jwt eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJib2R5Ijoic3R1ZmYiLCJpYXQiOjE2MDI3ODg3NzJ9.S9pXqz-mCvMtGC8MWc7ZjV6XghrvWvdUCy-Xm5eucWE" http://localhost:3001/users/1/matches
// curl -X "DELETE" -H "Authorization: jwt eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJib2R5Ijoic3R1ZmYiLCJpYXQiOjE2MDI3ODg3NzJ9.S9pXqz-mCvMtGC8MWc7ZjV6XghrvWvdUCy-Xm5eucWE" http://localhost:3001/users/1/matches/Oskar

// curl -X "POST" -H "Authorization: jwt eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJib2R5Ijoic3R1ZmYiLCJpYXQiOjE2MDI3ODg3NzJ9.S9pXqz-mCvMtGC8MWc7ZjV6XghrvWvdUCy-Xm5eucWE" http://localhost:3001/users/1/matches