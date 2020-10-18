var express = require('express');
const helmet = require('helmet');

var exphbs = require('express-handlebars');

var app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use(helmet())
app.get('/', function(req, res) {
    res.render('home');
});

app.listen(3000);