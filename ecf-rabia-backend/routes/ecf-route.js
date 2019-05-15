const express = require('express');
const router = express.Router();


//Importation du module de connexion à la bd
const dbConnextion = require('../modules/db');

//Récupération du contenu de la table villes
router.get('/all', (req, res) => {
    const sql = "SELECT * FROM villes;";
    dbConnextion.query(sql, (err, rows) => {
        if (err) {
            res.json({ error: err });
        } else {
            res.json({ villes: rows });
        }
    });
});

//Récupération d'un enregistrement de la table villes par son id
router.get('/:id', (req, res) => {
    const sql = "SELECT * FROM villes WHERE id=?;";
    const id = req.params.id;
    dbConnextion.query(sql, id, (err, rows) => {
        if (err) {
            res.json({ error: err });
        } else {
            res.json({ villes: rows });
        }
    });
});

//Enregistrement d'une ville
router.post('/', (req, res) => {
    const sql = "INSERT INTO villes SET ?;";
    const insertData = {
        ville: req.body.ville,
        pays: req.body.pays,
        continent: req.body.continent,
        population: req.body.population
    };
    dbConnextion.query(
        sql,
        insertData,
        (err) => {
            if (err) {
                res.json({ error: err });
            } else {
                res.json({ insert: 'ok' });
            }
        });
});


//Suppression d'une ville
router.delete('/:id', (req, res) => {
    const sql = 'DELETE FROM villes WHERE id = ?;';
    const id = req.params.id;

    dbConnextion.query(sql, id, (err) => {
        if (err) {
            res.json({ error: err });
        } else {
            res.json({ delete: 'ok' });
        }
    });

});


//Modification d'une ville
router.put('/:id', (req, res) => {
    const updateData = [
        req.body.ville,
        req.body.pays,
        req.body.continent,
        req.body.population,
        req.params.id
    ];
    console.log(updateData);
    const sql = `UPDATE villes SET ville=?, pays=?, continent=?, population=? WHERE id=?;`;

    dbConnextion.query(sql, updateData, (err) => {
        if (err) {
            res.json({ error: err });
        } else {
            res.json({ update: 'ok' });
        }
    });

});
module.exports = router;