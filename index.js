class Formatter {
	//add static methods here
	static capitalize(string) {
		// capitalizes the first letter of the string
		return string.charAt(0).toUpperCase() + string.slice(1)
	}
	
	static sanitize(string) {
		// removes any non alpha-numeric characters except dash and single quotes
		return string.replace( /[^A-Za-z0-9 '-]+/g, "" );
	}
	
	static titleize( sentence ) {
		let exceptions = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]
		let newSentence = [];
		let newArray = sentence.split( " " )
		for ( let i = 0; i < newArray.length; i++ ) {
			if ( i == 0 ) {
				newSentence.push( this.capitalize( newArray[ i ] ) )
			} else {
				if ( exceptions.includes( newArray[ i ] ) ) { 
					newSentence.push( newArray[ i ] )
				} else {
					newSentence.push( this.capitalize( newArray[ i ] ) )
				}
			}
			
		}
		return newSentence.join( " " );
	}
}