
const express = require ("express")
const app = express()
const port = 3000
const fs = require("fs")
const http = require("http")
const jws = require("jsonwebtoken")
const getUser = require ("./getUser")
const getInterests = require("./GetInterest")
const getMatch = require("./GetMatch")


app.get("/User", isAuthorized, getUser )
app.get("/Interests",isAuthorized, getInterests )
app.get("/Matches", isAuthorized, getMatch )

app.get("/jwt", (req,res) => {
    let privateKey = fs.readFileSync("./private.pem", "utf8");
    let token = jwt.sign({"body": "stuff"}, privateKey, {algorithm: "HS256"});
    res.send(token);
})


function isAuthorized ( res, next ){
    if (typeof req.headers.authorization !== "undefined"){
        let token = req.headers.authorization.split(" ")[1];
        let privateKey  = fs.readFileSync("./private.pem", "utf8");

        jwt.verify(token, privateKey, {algorithm: "HS256"}, (err, decoded) =>{
            if (err){
                res.status(500).json({error : "Not authorized"})
            }

            console.log(decoded);

            return next();
        })
    } else {
        res.status(500).json({error : "Not authorized"})
    }
}


app.listen(port, 
    () => console.log(`Listening on port ${port} `));







