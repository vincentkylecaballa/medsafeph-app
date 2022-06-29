const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'react_db'
});

app.post('/register', (req, res) => {

    const { fullname, emailaddress, password } = req.body;

    db.query('INSERT INTO users SET (fullname, emailaddress, password) VALUES (?,?,?)', [fullname, emailaddress, password],
        (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).send(err);
            } else {
                res.send(result);
            }
        }
    );
});

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});