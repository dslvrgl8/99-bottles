const express = require('express')
const app = express()

app.get('/', (req, res) => {
   let beers = 99
    res.send(` 99 Bottles of Beer on the wall.
        Take one down, pass it around. <a href=/${beers}> 
        ${beers-1} Bottles of Beer on the wall.`)
}),

//new number is id -1
app.get('/:id', (req, res) => {
    let beers = req.params.id
    if(beers >= 2) {
        res.send(`${beers} Bottles of Beer on the wall.
        Take one down, pass it around. <a href=/${beers-1}> 
        ${beers-1} Bottles of Beer on the wall.`);

    } else if(beers == 1) {

        res.send(`This last bottle is for me, No more beer. Sorry. <a href=/${beers-1}> 
        ${beers-1} Bottles of nothing on the wall.`)

    } else {
        res.send("We're out")
    }
}),



app.listen(4000, () => {
    console.log('Listening on port 4000')
})