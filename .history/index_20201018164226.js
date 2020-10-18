// Requirements
const express = require('express');
const helmet = require('helmet');
const config = require('./config')
const exphbs = require('express-handlebars');
const path = require('path');
console.log("Required all packages.")
    // Run Express
var app = express();
console.log("App created.")


// Application config.
app.enable('view cache');
app.engine('handlebars', exphbs());

app.use(helmet());
app.set('views', path.join(__dirname, 'views'));
console.log("Configuration set.")
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
console.log("Routing set.")
app.listen(3000, () => {
    console.log("Listening on port 3000!")
});