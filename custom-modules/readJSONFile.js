//Require fileSystem libraru
const fs = require('fs')

//Promise to read a JSON file
const readJSONFile = target => {
	return new Promise( ( resolve, reject ) => {
		fs.readFile( target,'utf-8', (err, data) => {
			if ( err ) return reject ( err )
			//The resolve will send data to the .then() called after the execution of readJSONFile
			resolve( JSON.parse(data) )
		} )
	} )
}

module.exports = readJSONFile