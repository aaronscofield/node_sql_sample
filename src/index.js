require('dotenv').config({path: "../.env"});

const express = require('express');
const mysql = require('mysql2');
const app = express();

const username = process.env.USERNAME;
const password = process.env.PASSWORD;
const db_name = process.env.DATABASE_NAME;

const db = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: username,
    password: password,
    database: db_name
});

db.connect();

app.get('/users', (req, res) => {
    const sql = 'SELECT * FROM users';

    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

app.listen(3000, () => console.log('Server is running'));