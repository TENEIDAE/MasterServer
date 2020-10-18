// Requirements
const express = require('express');
const helmet = require('helmet');
const config = require('./config')
const exphbs = require('express-handlebars');



// Run Express
var app = express();



// Application config.
app.enable('view cache');
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use(helmet());

// Routing
app.get('/', function(req, res, next) {
    if (config.maintenanceSettings.maintenance === true) {
        console.log("loaded maint")
        res.render('maint', {
            helpers: {
                title: config.maintenanceSettings.maintenanceTitle,
                text: config.maintenanceSettings.maintenanceText
            }
        })
    } else {
        res.render('home', {

            // Override `foo` helper only for this rendering.
            helpers: {


            }
        });
    }

});

app.listen(3000);