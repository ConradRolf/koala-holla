const express = require('express');
const koalaRouter = express.Router();
const pg = require('pg')


// DB CONNECTION


// GET
router.get('/', (req, re) => {
    let queryText = 'SELECT * FROM "Koala_Bears";';
    pool.query(queryText)
    .then(result => {
        res.send(result.rows);
    })
    .catch(error => {
        console,log('query:', queryText, 'Error', error);
        res.sendStatus(500);
    })
});

// POST


// PUT


// DELETE

module.exports = koalaRouter;