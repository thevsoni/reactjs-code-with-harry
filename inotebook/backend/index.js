const main = require('./db');
const express = require('express')

//connect to mongodb
main().then(() => console.log("connected")).catch(err => console.log(err));


const app = express()
const port = 5000

// app.use(express.urlencoded());; // need to read about this
app.use(express.json());

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })


//Available routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));


app.listen(port, () => {
    console.log(`Example app listening on port ${port} and site at http://localhost:${port}`)
})
