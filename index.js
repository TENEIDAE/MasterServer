// Requirements
const express = require('express');
const helmet = require('helmet');
const config = require('./config')
const exphbs = require('express-handlebars');
const path = require('path');
console.log("Required all packages.")
    // Run Express
var app = express();
console.log('\x1b[36m[✓]Application Started.\x1b[0m');



// Application config.
app.enable('view cache');
app.set('view engine', 'ejs');

app.use(helmet());
app.set('views', path.join(__dirname, 'views'));
console.log("Configuration set.")
    // Routing
app.get('/', function(req, res, next) {
    if (config.maintenanceSettings.maintenance === true) {

        res.render('maint', {

            title: config.maintenanceSettings.maintenanceTitle,
            text: config.maintenanceSettings.maintenanceText
        })
        console.log(`----------------------\n[✓] Rendered Maintenance.\nConnection Details:\nIp Address: '${req.connection.remoteAddress}'\nFamily Type: '${req.connection.remoteFamily}'`)

    } else {
        res.render('home', {
            warningEnabled: config.warningSettings.warningEnabled,
            warningText: config.warningSettings.warningText,
            warningTitle: config.warningSettings.warningTitle,
            warningType: config.warningSettings.warningType
        });
        const forwarded = req.headers['x-forwarded-for']
        const ip = forwarded ? forwarded.split(/, /)[0] : req.connection.remoteAddress
        console.log(`----------------------\n\x1b[32m[✓] Rendered Homepage.\x1b[0m\nConnection Details:\nIp Address: \x1b[47m\x1b[30m'${ip}'\x1b[0m\n\nFamily Type: \x1b[47m\x1b[30m'${req.connection.remoteFamily}'\x1b[0m\n----------------------`)

    }

});
console.log("Routing set.")
app.listen(3000, () => {
    console.log("Listening on port 3000!")
});