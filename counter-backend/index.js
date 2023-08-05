const express = require('express')
var cors = require('cors');
const app = express()

app.use(cors());

// const sqlite3 = require('sqlite3').verbose();

// let db = new sqlite3.Database('./db/counter.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {

//     if (err){
//         console.log(err.message);
//     }
//     else {
//         console.log('Connected');

//         db.run("CREATE TABLE IF NOT EXISTS counter (count INT)", insertInitVal);
//     }
// });

// function insertInitVal(){
//     db.run("INSERT INTO counter (count) SELECT 0 WHERE NOT EXIST ()")
// }

 let count = 0;

app.get('/counter', (req, res) => {
    res.json({ count })
});

app.post('/increment', (req, res) => {
    count++;
    res.json({ count });
});

app.post('/decrement', (req, res) => {
    if (count > 0 ){
        count--;
    }

    res.json({ count });
});

app.listen(5001, () => {
    console.log(`Example app listening on port ${5001}`)
  })

