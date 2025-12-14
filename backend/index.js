const express = require('express')

const app = express();
const port = 4000 || process.env.PORT
const cors = require('cors')

app.use(cors())

app.get('/', (req, res)=> {
    res.send("Server is up and running :)")
})

app.get('/login', (req, res) => {
    res.json({
        'success' : true,
        "message" : "Logged in successfully!"
    })
})

app.post('/register', (req, response) => {

})

app.listen(port, (req, res) => {
    console.log("Server is running on port " + port)
})