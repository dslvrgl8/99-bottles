const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send(`Bottles of Beer on the wall.
        Take one down, pass it around. <a href=/${beers}> 
        ${beers-1} Bottles of Beer on the wall.`)
}),

//new number is id -1
app.get('/:id', (req, res) => {
    const beers = req.params.id
    if(beers >= 2) {
        res.send(`${beers} Bottles of Beer on the wall.
        Take one down, pass it around. <a href=/${beers}> 
        ${beers-1} Bottles of Beer on the wall.`) 

    } else if(req.params.id == 1) {

        res.send('No more beer. Sorry.')

    } else {

    }
}),



app.listen(4000, () => {
    console.log('Listening on port 4000')
})