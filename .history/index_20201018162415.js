// Requirements
const express = require('express');
const helmet = require('helmet');
const config = require('config')
const exphbs = require('express-handlebars');


// Run Express
var app = express();



// Application config.
app.enable('view cache');
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use(helmet());

// Routing
app.get('/', function(req, res) {
    res.render('home');
});

app.listen(3000);