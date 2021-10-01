const express = require('express');

const app = express()


app.get('/', (req, res) => {
    res.send(`Server Working. This is homepage`)
})

console.log(`Heroku Port number is ${process.env.PORT}`)

const prt =  process.env.PORT || 3000;


app.listen(prt, () => console.log(`Server started at PORT ${prt}`))