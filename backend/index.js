const express = require('express')

const app = express();
const port = 4000 || process.env.PORT
const cors = require('cors')

// Middlewares
app.use(cors())
app.use(express.json())

app.get('/', (req, res)=> {
    res.send("Server is up and running :)")
})

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if(username === "laura@gmail.com" && password === "12345678"){
        res.json({
            'success' : true,
            "message" : "Logged in successfully!"
        })
    } else{
        res.status(401).json({
            'success' : false,
            "message" : "Invalid username or password"
        })
    }
})

app.post('/register', (req, response) => {

})

app.listen(port, (req, res) => {
    console.log("Server is running on port " + port)
})