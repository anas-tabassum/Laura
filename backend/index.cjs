const express = require('express')

const app = express();
const port = 4000

app.get('/', (req, res)=>{
    res.send("Server is up and running")
})

app.listen(port, (req, res) => {
    console.log("Server is running on port " + port)
})