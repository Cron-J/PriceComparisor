var Joi = require('joi'),
    fs = require('fs'),
    Request = require('request');

exports.priceComaprisonV1 = {
  handler: function (request, reply) {
    //Request('http://api.pricecheckindia.com/feed/product/' + request.params.category + '/' + request.params.product + '.json?user=kiranman&key=LALWDMKWIXEDLHAW', function (error, response, body) {
    Request('http://api.dataweave.in/v1/price_intelligence/findProduct/?api_key=b20a79e582ee4953ceccf41ac28aa08d&product=' + request.params.product, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        return reply(body);
      }
    })
  } 
};

exports.priceComaprisonV2 = {
  handler: function (request, reply) {
    Request('http://api.pricecheckindia.com/feed/product/' + request.params.category + '/' + request.params.product + '.json?user=kiranman&key=LALWDMKWIXEDLHAW', function (error, response, body) {
      if (!error && response.statusCode == 200) {
        return reply(body);
      }
    })
  } 
};