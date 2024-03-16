const express = require('express')
const bodyParser = require("body-parser")
const app = express()
const port = process.env.PORT || 5001

app.use(bodyParser.json())

app.get('/', (req, res) => {
    console.log("/")
    res.send('Hello World!')
})

app.post("/hook", (req, res) => {
    console.log("hook", req.body) // Call your action on the request here
    res.status(200).end() // Responding is important
})

app.get('/webhook', (req, res) => {
    console.log("webhook")
    res.status(200).send(`OK ${req.params.url}`)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
