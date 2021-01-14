
const express = require('express');
const bodyParser = require('body-parser');
const config = require('config');
const path = require('path');

//Port id
const PORT = config.get('port') || 5000;

//Database
const db = require('./db');
const Location = db.location;

// Express connection
const app = express();

app.use('api/auth', require('./routes/auth.routes'));

// Server start & DB connection
async function start () {
    try {
        await db.authenticate();
        console.log('Connection has been established successfully.');
        app.listen(PORT, console.log(`Server started on port ${PORT}`));
    } catch (error) {
        console.error('Unable to connect to the database:', error);
        process.exit(1);
    }

}


start();









// location route
app.use('/location', require('./routes/location'));



