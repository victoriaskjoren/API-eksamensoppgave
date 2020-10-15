const { getUsers, matches  } = require("./script");

module.exports = {
    getMatches(req, res){
        const users = getUsers();    
        const userID = req.params.userID
        console.log (userID);
        for (i =0; i < users.length; i++) {
            if (users[i].userID == userID)  {
                return res.status(200).send(users[i].matches);
            }
        }

    
        return res.status(404).send("Match doesn´t exist!")
    
    },
    deleteMatch(req, res){
        const users = getUsers(); 
        const interest =  req.params.interest  
        const userID = req.params.userID
        for (i =0; i < users.length; i++) {
            if (users[i].userID == userID)  {
                for (j =0; j < users[i].interests.length; j++) {
                    if (users[i].interests[j].name == interests)  {
                        users.splice(i,1)
                    return res.status(200).send("Interest deleted!");
                }
            }
        }
    }
    
                  return res.status(404).send("User doesn´t exist!");
                
            },
    newMatch(req,res){
        const users = getUsers();
        const interest3 = new Interest ("Animals");
        users.push(interest3)
        return res.status(201).send(interest3)
    }
};


// curl -H "Authorization: jwt eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJib2R5Ijoic3R1ZmYiLCJpYXQiOjE2MDI3ODg3NzJ9.S9pXqz-mCvMtGC8MWc7ZjV6XghrvWvdUCy-Xm5eucWE" http://localhost:3000/users/1/matches
// curl -X "DELETE" -H "Authorization: jwt eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJib2R5Ijoic3R1ZmYiLCJpYXQiOjE2MDI3ODg3NzJ9.S9pXqz-mCvMtGC8MWc7ZjV6XghrvWvdUCy-Xm5eucWE" http://localhost:3000/users/1/matches/Jeppe

// curl -X "POST" -H "Authorization: jwt eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJib2R5Ijoic3R1ZmYiLCJpYXQiOjE2MDI3ODg3NzJ9.S9pXqz-mCvMtGC8MWc7ZjV6XghrvWvdUCy-Xm5eucWE" http://localhost:3000/users/1/matches