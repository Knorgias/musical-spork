//Require the main express library
const express = require('express')

//Require fileSystem libraru
const fs = require('fs')

//Generate a router object from the express library
const router = express.Router()

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

//A router for the 1st txt file
router.get('/file1', (req, res) => {
	//Read from a file
	readTxtFile(__dirname + '/../files/dog-breeds.txt')
	//then return the data to the browser
	.then( function( data ){
		res.send(data)
	})
})

//A router for the 2nd txt file
router.get('/file2', (req, res) => {
	//Read from a file
	readTxtFile(__dirname + '/../files/cat-breeds.txt')
	//then return the data to the browser
	.then( function( data ){
		res.send(data)
	})
})


//Export the router so the require()
//in the main app knows what to touch
module.exports = router