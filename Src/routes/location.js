const  express = require('express');
const router = express.Router();
const db = require('../db/index');
const Location = require('../models/Location');



router.get('/', (req, res) =>
    Location.findAll()
        .then(location => {
            console.log(location);
            res.sendStatus(200);
        })
        .catch(err => console.log(err)));

module.exports = router;