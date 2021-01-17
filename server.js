const express = require("express")

const app = express()

const PORT = 8000 || process.env.PORT

app.get("/",(req,res,next)=>{
    res.send("Hello Question Answer Api - Updated")
})

app.listen(PORT,() => {
    console.log(`App started on ${PORT}`)
})