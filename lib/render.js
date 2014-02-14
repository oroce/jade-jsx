var jade = require( "jade" );
var compiler = require( "./compiler" );
module.exports = function( content, options ){
  options || ( options = {} );
  options.compiler = compiler;
  return jade.render( content, options );
};