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
app.set('view engine', 'ejs');

app.use(helmet());
app.set('views', path.join(__dirname, 'views'));
console.log("Configuration set.")
    // Routing
app.get('/', function(req, res, next) {
    console.log('getting /')
    if (config.maintenanceSettings.maintenance === true) {
        console.log("loaded maint")
        res.render('maint', {

            title: config.maintenanceSettings.maintenanceTitle,
            text: config.maintenanceSettings.maintenanceText

        })
    } else {
        res.render('home', {

        });
    }

});
console.log("Routing set.")
app.listen(3000, () => {
    console.log("Listening on port 3000!")
});