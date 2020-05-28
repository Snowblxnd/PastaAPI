const express = require('express')
const app = express()
const port = 3000

app.get('/api/pasta/all', (req, res) => res.send('All pasta data here'));

app.get('/api/pasta/:id',  function(req, res){
    const id = req.params.id;
    res.send(`Pasta with ID of ${id}`)

});

app.listen(port, () => console.log(`Pasta API listening at https://localhost:${port}`))