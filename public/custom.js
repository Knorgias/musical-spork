//Select the document and when it's ready, trigger the callback
$( document ).ready( function() {
	console.log('Dom has loaded')
	$("img").fadeIn(1500)
	$("audio").trigger("play");
})