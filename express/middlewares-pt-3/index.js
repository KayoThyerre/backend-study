const express = require('express');
const app = express();

app.use(express.json());

app.post('/json', (req,res) => {
    console.log(req.body);
    res.send('json');
});

app.listen(3000, () => {
    console.log('Servidor iniciado na porta http://localhost:3000');
});