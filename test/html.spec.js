
var render = require( ".." );
var getContent = require( "./helper" ).getContent;

describe( "Testing fixtures", function(){

  it( "html", function(){
    var content = getContent( "html" );
    var output = render( content, {
      foo: "bar"
    });
    console.log( "output", output );
  });

  it( "html with constant", function(){
    var content = getContent( "html-with-constant" );
    var output = render( content, {
      foo: "bar"
    });
    console.log( "output", output );
  });

});