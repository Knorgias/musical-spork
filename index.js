//Require the main express library
const express = require('express')

//Create our app from the library
const app = express()

//import our textfiles router
const textfiles = require( __dirname + '/routes/textfiles' )
const jsonfiles = require( __dirname + '/routes/jsonfiles' )


//Mount the routes of the files module on the /potato path
//In other words, run the sub-app called user under 'user'
//We now have /textfiles/file1 and /textfiles/file2
app.use('/potato', textfiles)
app.use('/tomato', jsonfiles)


//Using express.static to generate a default html page
app.use('/', express.static('public'))
//Simple local server
app.listen(3000, callback => {
	console.log('Server running at port 3000!')
})