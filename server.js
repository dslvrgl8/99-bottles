const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send(`99 Bottles of Beer on the wall.
    Take one down, pass it around. <a href=/98> 
    98 Bottles of Beer on the wall.`)
})



app.listen(4000, () => {
    console.log('Listening on port 4000')
})