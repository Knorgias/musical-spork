//Require the main express library
const express = require('express')

//Require fileSystem libraru
const fs = require('fs')

//Generate a router object from the express library
const router = express.Router()

//Import the readTxtFile custom module
const readTxtFile = require( __dirname + '/../custom-modules/readTxtFile')

//Import the lineReader custom module
const lineReader = require(__dirname + '/../custom-modules/lineReader')

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