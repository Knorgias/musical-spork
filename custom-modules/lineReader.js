const dogLineReader = require('readline').createInterface({
  input: require('fs').createReadStream(__dirname + '/files/dog-breeds')
});

dogLineReader.on('line', function (line) {
  console.log('Line from file:', line);
});

const catLineReader = require('readline').createInterface({
  input: require('fs').createReadStream(__dirname + '/files/cat-breeds')
});

catLineReader.on('line', function (line) {
  console.log('Line from file:', line);
});

module.exports = {
	dogLineReader: dogLineReader,
	catLineReader: catLineReader
}