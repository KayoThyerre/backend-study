const { error } = require('console');
const fs = require('fs');

fs.readFile('meu-arquivo.txt', 'utf-8', (err, data) => {
    if(err) throw err;
    console.log(data);
});

const users = [
    { name: 'Ricardo', age: 30 },
    { name: 'Maria', age: 45 },
 ];
 
 fs.writeFile('users.txt', JSON.stringify(users), {
    encoding: 'utf-8', 
    flag: 'a'
 }, (err) => {
    if (err) throw err;
    console.log('escrito com sucesso');
 });