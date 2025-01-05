require("dotenv").config()
const express = require("express")
const cors = require("cors")
const mongoose=require('mongoose')
const connectDB=require("./config/dbConn")
const corsOptions = require("./config/corsOptions")

const app = express()
const PORT = process.env.PORT || 4567

connectDB()
app.use(cors(corsOptions))

app.use(express.json())
app.use(express.static("public"))
app.use(cors(corsOptions))

app.use('/users',require("./routes/user"))
app.use('/posts',require("./routes/posts"))
app.use('/todos',require("./routes/todos"))


app.get("/", (req, res)=>{
    res.send("This is home page")
    console.log("llll");
})

mongoose.connection.once('open',()=>{
    console.log('Connected to MongoDB')
    app.listen(PORT, ()=>{console.log(`Server run on ${PORT}`)})
   
})
mongoose.connection.on('error', err => {
    console.log(err)
    })