module.exports = function( string, to_replace, replacement ){
	return ( string || '' ).replace( to_replace, replacement );
};