const fs = require('fs');
const path = require('path');const express = require('express');
const app = express();
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// parse incoming string or array data
app.use(express.urlencoded({ extended: true })); // Extended true means that there can be nested JSON data
// parse incoming JSON data
app.use(express.json());
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Middleware that allows css and javascript to accompany the html files
app.use(express.static('public'));

const { animals } = require('./data/animals.json');
const PORT = process.env.PORT || 3001;


app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});

// Ended on 11.3.1