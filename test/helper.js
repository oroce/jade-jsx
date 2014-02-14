var fs = require( "fs" );
var path = require( "path" );
var fixturesDir = path.join( __dirname, "fixtures" );

exports.getContent = function( file ){
  var fileName = path.join( fixturesDir, file );
  return fs.readFileSync( fileName  + ".jade" );
};
