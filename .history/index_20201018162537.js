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
pp.get('/', function(req, res, next) {
    res.render('home', {
        showTitle: true,

        // Override `foo` helper only for this rendering.
        helpers: {
            foo: function() { return 'foo.'; }
        }
    });
});

app.listen(3000);