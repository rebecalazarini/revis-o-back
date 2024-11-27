const mysql = require('mysql')

const con = mysql.createConnection({
    user:'root',
    host:'localhost',
    database:'cantina'
});

module.exports = con;

// {con}; ou con;
//  Só vai usar chave caso tenha mais de uma função pra isso 
//  a função CRUD