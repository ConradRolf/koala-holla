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

























































































































































































































































































router.delete('/:id', (req, res) => {
    let koalaToDelete = req.params.id;
    let queryText = 'DELETE FROM "Koala_Bears" WHERE "id"=$1';
    pool.query(queryText, [koalaToDelete])
    .then(result => {
        console.log('In router side of delete. Koala to delete:', result.rows);
        res.sendStatus(200);
    })
    .catch((error) => {
        console.log('Error making delete:', error);
        res.sendStatus(500);
    })
})