function getUser(req, res){

    return res.status(200).send("a")
}

module.exports = getUser




// hvordan få metodene i User til å bli brukt i child classes,hva skal det stå før .
// hvordan får jeg bruker informasjonen fra script.js inn i de ulike filene model?
// hvordan skal jeg sortere klassene slik at det gir mening, må først opprette en User,så skal de andre
// klassene væøre child av den men hvordan vet man da hvem som er paid og ikke og bilde, interest etc

// nå har jeg bare en private key, men burde det ikke bli opprettet en private key til hver user? og en spesiell til admin
