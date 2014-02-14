
var render = require( ".." );
var getContent = require( "./helper" ).getContent;

describe( "Testing fixtures", function(){

  it( "simple attrs", function(){
    var content = getContent( "simple-attribute" );
    var output = render( content );
    console.log( "output", output );
  });

  it( "simple attrs with single quotation", function(){
    var content = getContent( "simple-attribute-single-quote" );
    var output = render( content );
    console.log( "output", output );
  });

  it( "attrs expression", function(){
    var content = getContent( "attribute-expression" );
    var output = render( content, {
      foo: true
    });
    console.log( "output", output );
  });

});