const express = require('express')
const app = express()
const port = 1300

app.get('/', (req, res) => {
    console.log("req", req)
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
