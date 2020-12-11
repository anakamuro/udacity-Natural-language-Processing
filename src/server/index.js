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
    res.sendFile(path.resolve('src/client/views/index.html'))
})
// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
});

app.post('/article', async (req, res, next) =>{
  try {
    var data = textapi.sentiment({
      //'text': 'John is a very good football player!'
      'url': req.body.text
    }, function(error, response) {
      if (error === null) {
        console.log(response);
        res.send(response);
      }
    });
    //res.send(mockAPIResponse)
  } catch(error) {
    // Passes errors into the handler
    return next(error)
  }
  //res.send(returnVal);
})