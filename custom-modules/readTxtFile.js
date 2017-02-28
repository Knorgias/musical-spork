//Require fileSystem libraru
const fs = require('fs')

//Promise to read a txt file
const readTxtFile = target => {
	return new Promise( ( resolve, reject ) => {
		fs.readFile( target,'utf-8', (err, data) => {
			if ( err ) return reject ( err )
			//The resolve will send data to the .then() called after the execution of readJSONFile
			resolve( data )
		} )
	} )
}

module.exports = readTxtFile;