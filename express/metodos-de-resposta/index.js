const express = require('express');
const app = express();

const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
    { id: 3, name: 'Bob Smith' }
];

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users.find(u => u.id == id);

    return res.json(user);
});

app.listen(3000, () => {
    console.log('Server listening on port http://localhost:3000');
});