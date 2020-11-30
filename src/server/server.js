var AYLIENTextAPI = require('aylien_textapi');

function inputValidateRequest(req, res, next) {
    if(!req.body.text ) {
        return res.status(400).json({
           message: 'Invalid input'
        })
    } 
    return next();
}

function registerPostHandler(req, res, next) {
    var textapi = new aylien({
        application_id: "c678286a",
        application_key: "66fba852bf4ea333e60b6f9cf99e83f8"
    });
    textapi.sentiment({
      'url': req.body.text
    }, function(error, response) {
        res.send(response)
    }); 
 
}

exports.inputValidateRequest = inputValidateRequest;
exports.registerPostHandler = registerPostHandler;
