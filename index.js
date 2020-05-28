const express = require('express');
const app = express();
const port = 3000;
const data = require('./data/pasta_data.json');

app.get('/api/pasta/all', function(req, res){
    res.json(data);
});

app.get('/api/pasta/:id',  function(req, res){
    const id = req.params.id;
    res.send(`Pasta with ID of ${id}`);
});

app.listen(port, () => console.log(`Pasta API listening at https://localhost:${port}`));