let express = require('express');
let app = express();
require('dotenv').config();
console.log("Hello World");
  app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
  });
  
  app.use("/public", express.static(__dirname + "/public"));

  app.get("/json", (req, res) => {

        var jsonResponse = {"message": "Hello json"};

        if (process.env.MESSAGE_STYLE==='uppercase') {
            jsonResponse.message = jsonResponse.message.toUpperCase();
        }
        res.json(jsonResponse);
        
  });

  






























 module.exports = app;
