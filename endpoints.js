
const express = require ("express")
const app = express()
const port = 3001
const fs = require("fs")
const http = require("http")
const jwt = require("jsonwebtoken")
const {getUsers, deleteUser, createUser} = require ("./usersEndpoints")
const {getInterests, deleteInterest, createInterest} = require("./interestsEndpoints")
const {getMatches, deleteMatch, newMatch} = require("./matchesEndpoint")


app.get("/users", isAuthorized, getUsers )
app.delete("/users/:userID", isAuthorized, deleteUser )
app.post("/users", isAuthorized, createUser )

app.get("/users/:userID/interests", isAuthorized, getInterests )
app.delete("/users/:userID/interests/:interest", isAuthorized, deleteInterest )
app.post("/users/:userID/interests", isAuthorized, createInterest )

app.get("/users/:userID/matches", isAuthorized, getMatches )
app.delete("/users/:userID/matches/;match", isAuthorized, deleteMatch )
app.post("/users/userID/matches", isAuthorized, newMatch )



app.get("/jwt", (req,res) => {
    let privateKey = fs.readFileSync("./private.pem", "utf8");
    let token = jwt.sign({"body": "stuff"}, privateKey, {algorithm: "HS256"});
    res.send(token);
})


function isAuthorized ( req, res, next ){
    if (typeof req.headers.authorization !== "undefined"){
        let token = req.headers.authorization.split(" ")[1];
        let privateKey  = fs.readFileSync("./private.pem", "utf8");

        jwt.verify(token, privateKey, {algorithm: "HS256"}, (err, decoded) =>{
            if (err){
                res.status(401).json({error : "Not authorized"})
            }

            console.log(decoded);

            next();
        })
    } else {
        return res.status(401).json({error : "Not authorized"})
    }
}


app.listen(port, 
    () => console.log(`Listening on port ${port} `));







