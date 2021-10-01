const express = require('express');

const app = express()


app.get('/', (req, res) => {
    res.send(`Server Working. This is homepage`)
})

const PORT = 3000

app.listen(PORT, () => console.log(`Server started at PORT ${PORT}`))