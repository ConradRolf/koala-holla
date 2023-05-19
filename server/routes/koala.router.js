const express = require('express');
const router = express.Router();


// DB CONNECTION
const pool = require('../modules/pool');

// GET
router.get('/', (req, res) => {
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
router.post('/', (req, res) => {
        let newKoala = req.body;
        console.log('req.body:', req.body);
    // parameterized query:
        let queryText = `
        INSERT INTO "Koala_Bears" ("name", "age", "gender", "ready_for_transfer", "notes")
        VALUES ($1, $2, $3, $4, $5);
        `;
        
    // these values are substituted for $1, $2, $3, $4, $5
        let values = [newKoala.name, newKoala.age, newKoala.gender, newKoala.readyForTransfer, newKoala.notes];
    
    // pass queryText and array of values
        pool.query(queryText, values)
            .then(result => {
                res.sendStatus(201);
            })
            .catch(error => {
                console.log('Query:', queryText, 'Error:', error);
                res.sendStatus(500);
            })
    });

// PUT

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

module.exports = router;