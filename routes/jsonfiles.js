//Require the main express library
const express = require('express')

//Require fileSystem libraru
const fs = require('fs')

//Generate a router object from the express library
const router = express.Router()

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

//A router for the 1st JSON file
router.get('/file1', (req, res) => {
	//Read the json file with a promise
	readJSONFile(__dirname + '/../files/glossary.json')
	//then send back the parsed data to the browser
	.then( function( parsedData ){
	  res.send(parsedData)
	});
	
})

//A router for the 2nd JSON file
router.get('/file2', (req, res) => {
	//Read a json file with a promise
	readJSONFile(__dirname + '/../files/menu.json')
	//then send back the parsed data to the browser
	.then( function( parsedData ){
	  res.send(parsedData)
	});
})

//Export the router so the require()
//in the main app knows what to touch
module.exports = router