const express = require("express")
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

const students =["abdou", "saff", "thioro"]

const port = 8001

app.get("/" , (req, res) =>{
    const newList=students
   console.log("students :", students)
   res.send(newList)

 
})


app.post("/student" , (req , res )=>{
    const newSrudent = req.body 
    students.push(newSrudent.name)
    console.log(" newSrudent :",newSrudent);
    res.json({
        message: "post student ok",
        newSrudent

    })
})

app.listen(port, () =>{
    console.log("server  en ecoute au port :", port);
})