
var render = require( ".." );
var getContent = require( "./helper" ).getContent;

describe( "Testing fixtures", function(){

  it( "simple", function(){
    var content = getContent( "simple" );
    var output = render( content );
  });

});