const express = require("express");
const helmet = require("helmet");

const web = express();


web.get('/')

web.listen(1000, () => {
    console.log("listening...")
})