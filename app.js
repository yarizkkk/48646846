
const express = require('express')
const app = express()
const port = 3000

app.use(express.static('buzzed-html-template')) // untuk menjadikan folder public menjadi full access

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})