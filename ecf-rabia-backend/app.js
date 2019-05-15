//Import des modules
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

//Importation des fichiers de routage
const ecfRoutes = require('./routes/ecf-route');

//Création de l'application express
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/ville', ecfRoutes);



app.get('/', (req, res) => {
    res.send('hello');
});

app.listen(3000);

