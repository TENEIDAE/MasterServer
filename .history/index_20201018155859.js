const express = require("express");
const helmet = require("helmet");

const web = express();


web.get('/')

web.listen(1000, () => {
        console.log("listening...")
    })
    //! Hello! This is a comment!
    // ? Maybe this is better
    //* or this?!
    // TODO Make something useful.
    // Or none!