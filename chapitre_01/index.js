const express = require('express')
const app = express()


const port = 9000


var authors = [
    {
        name: "Lawrence Nowell",
        nationality: "UK",
        books: ["Beowulf"]
    },
    {
        name: "William Shakespeare",
        nationality: "UK",
        books: ["Hamlet", "Othello", "Romeo and Juliet", "MacBeth"]
    },
    {
        name: "Charles Dickens",
        nationality: "US",
        books: ["Oliver Twist", "A Christmas Carol"]
    },
    {
        name: "Oscar Wilde",
        nationality: "UK",
        books: ["The Picture of Dorian Gray", "The Importance of Being Earnest"]
    },
]

app.get('/',function (req , res){
    res.send('Author Api 1')
})

app.get('/:auteur',function (req ,res){
    var auteurIndex = req.params.auteur
  //  console.log('auteurIndex :', auteurIndex )
    if (auteurIndex  >= 1 && auteurIndex < authors.length ) {
    
        res.send(authors[auteurIndex-1].name)
        
    }else{
        res.send( "auteur non trouver")
    }
})
app.listen(port, () =>{
    console.log("server en ecoute au port :", port);
})