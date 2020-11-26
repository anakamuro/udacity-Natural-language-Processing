const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
var AYLIENTextAPI = require('aylien_textapi');
var textapi = new AYLIENTextAPI({
  application_id: "c678286a",
  application_key: "66fba852bf4ea333e60b6f9cf99e83f8"
});

textapi.sentiment({
    'text': 'John is a very good football player!'
  }, function(error, response) {
    if (error === null) {
      console.log(response);
    }
  });

  app.use(cors())
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({extended: false}));
  app.use(express.static('dist'))

  app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
  })

  app.listen(PORT, function(){
    console.log(`Listening on port ${PORT}`)
  })