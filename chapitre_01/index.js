const express = require('express')
const app = express()


const port = 9000

app.get('/',function (req , res){
    res.send('Author Api')
})
app.listen(port, () =>{
    console.log("server en ecoute au port :", port);
})