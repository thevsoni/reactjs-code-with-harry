const main = require('./db');
const express = require('express')

main().then(() => console.log("connected")).catch(err => console.log(err));

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port} and site at http://localhost:${port}`)
})
