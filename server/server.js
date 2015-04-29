var Hapi = require('hapi'),
    Routes = require('./routes'),
    //Db = require('./config/db'),
    Config = require('./config/config');
    
    
var app = {};
app.config = Config;

var server = Hapi.createServer(Config.server.listenHost, process.env.PORT || Config.server.listenPort, {cors: true});

server.route(Routes.endpoints);

server.start(function () {
  console.log('Server started ', server.info.uri);
});