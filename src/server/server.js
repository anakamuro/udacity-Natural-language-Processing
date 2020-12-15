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
