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
console.log('Your API key is ${process.env.API_KEY}')

const dotenv = require('dotenv');
dotenv.config();

module.exports = textapi

var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const app = express()
const bodyParser = require('body-parser');
app.use(bodyParser.json());




app.use(express.static('dist'))
console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/js/views/index.html'))
})
// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8080!')
});

app.post('/article', (req, res) => {
  textapi.sentiment({ url: req.body.url }, (error, result) => {
        if(error) {
          console.log('Error during Aylien request')
          res.send();
          return;
        }

        console.log('Got Aylien result')
        
        res.send(result);
      })
})

module.exports = app;
