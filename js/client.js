'use strict'
navigator.getUserMedia(audio: true, voideo:true, function(strem) {

})

if (!navigator.mediaDevices || !navigator.emdiaDevices.enumerateDevices){
	console.log('enumerateDevices is not support');
} else {
	navigator.emdiaDevices.enumerateDevices()
	.then(gotDevices)
	.catch(handleError);
}

function gotDevices (deviceInfos){
	deviceInfos.forEach(function(deviceInfo){
	console.log(deviceInfo);
}

function handelError (err){
	console.log(err.name + ":" +err.message);
}