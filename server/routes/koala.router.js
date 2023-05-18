const express = require('express');
const koalaRouter = express.Router();

// DB CONNECTION


// GET




























































































// POST
router.post('/', (req, res) => {
        let newKoala = req.body;
        console.log('req.body:', req.body);
    // parameterized query:
        let queryText = `
        INSERT INTO "Koala_Bears" ("name", "age", "gender", "ready for transfer", "notes")
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


// DELETE

module.exports = koalaRouter;