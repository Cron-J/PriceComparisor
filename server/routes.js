// Load modules

var Product      = require('./controller/user'),
    Static    = require('./static');

// API Server Endpoints
exports.endpoints = [

    { method: 'GET',  path: '/{somethingss*}', config: Static.get },
    { method: 'GET', path: '/priceComaprisonV1/{product}', config: Product.priceComaprisonV1},
    { method: 'GET', path: '/priceComaprisonV2/{category}/{product}', config: Product.priceComaprisonV2}
];