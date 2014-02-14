var util = require( "util" );
var jade = require( "jade" );
var Compiler = jade.Compiler;
var isConstant = require( "constantinople" );
function JSX(node, options) {
  Compiler.call(this, node, options);
}

util.inherits( JSX, Compiler );

JSX.prototype.visitTag = function(node){
  //console.log( "visitTag", util.inspect( node, {depth:2}) );
  var parent = Compiler.prototype.visitTag;
  /*switch (node.name) {
    case 'form':
      if ("'post'" == node.getAttribute('method')) {
        var tok = new nodes.Tag('input');
        tok.setAttribute('type', '"hidden"');
        tok.setAttribute('name', '"csrf"');
        tok.setAttribute('value', 'csrf');
        node.block.unshift(tok);
      }
  }*/
  return parent.call(this, node);
};
JSX.prototype.jsxAttrs = function( attrs ){
  return attrs.map(function( attr ){

    if( isConstant( attr.val ) ){
      return attr;
    }
    attr.escaped = false;
    attr.val = util.format( "'{%s}'", attr.val );
    return attr;
  });
}
JSX.prototype.visitAttributes = function( attrs, attributeBlocks ){
  //console.log( "attrs", util.inspect( attrs, {depth:2}), util.inspect( attributeBlocks, {depth:2}) );
  if( attrs.length ){
    attrs = this.jsxAttrs( attrs );
  }
  return Compiler.prototype.visitAttributes.call( this, attrs, attributeBlocks );
};

JSX.prototype.bufferExpression = function(src){
  return Compiler.prototype.bufferExpression.apply( this, arguments );
}
module.exports = JSX;
