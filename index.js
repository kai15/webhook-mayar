const express = require('express')
const app = express()
const port = process.env.PORT || 5001

app.get('/', (req, res) => {
    console.log("req", req)
    res.send('Hello World!')
})

app.post('/webhook', (req, res) => {
    console.log("req", req)
    res.status(200).send(`OK ${req.params.url}`)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
