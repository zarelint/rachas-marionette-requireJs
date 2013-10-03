// directorio actual
var application_root = __dirname,
//Web framework
    express = require( 'express' ),
    _ = require('./components/underscore-amd/underscore'),
//Utilities for dealing with file paths
    path = require( 'path');
//load data rachas
getRachas2  = require('./assetsAMD/api/actual2');
getRachas1  = require('./assetsAMD/api/actual');

var rachas  =  getRachas1();
var rachas2  = getRachas2();

var lista  = [rachas, rachas2];

//Create server
var app = express();
// Configure server
app.configure( function() {
//parses request body and populates request.body
    app.use( express.bodyParser() );
//checks request.body for HTTP method overrides
    app.use( express.methodOverride() );
//perform route lookup based on URL and HTTP method
    app.use( app.router );
//Where to serve static content
    app.use( express.static( path.join( application_root, '.') ) );

//Show all errors in development
    app.use( express.errorHandler({ dumpExceptions: true, showStack: true }));
});

var port = 8080;
app.listen( port, function() {
    console.log( 'Express server listening on port %d in %s mode',
        port, app.settings.env );
});


// Routes
app.get( '/api', function( request, response ) {
    response.send( ' API is running' );
});

//Get lista de rachas de todas la ligas
app.get( '/DatosRachas', function( request, response ) {
    return response.send(JSON.stringify(lista));
});

//Get una racha por id
app.get( '/DatosRachas/:id', function( request, response ) {
   var _racha = _.findWhere(lista, {id: parseInt(request.params.id)});
   return response.send( JSON.stringify(_racha) );
});