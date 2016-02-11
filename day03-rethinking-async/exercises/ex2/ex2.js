function fakeAjax(url,cb) {
	var fake_responses = {
		"file1": "The first text",
		"file2": "The middle text",
		"file3": "The last text"
	};
	var randomDelay = (Math.round(Math.random() * 1E4) % 8000) + 1000;

	console.log("Requesting: " + url);

	setTimeout(function(){
		cb(fake_responses[url]);
	},randomDelay);
}

function output(text) {
	console.log(text);
}

// **************************************

function getFile(file) {
	var resp;

	fakeAjax(file, function(text){
		if (!resp) resp = text;
		else resp(text);
	});

	return function thunk(cb){
		if (resp) cb(resp);
		else resp = cb;
	};
}

var thunk1 = getFile("file1");
var thunk2 = getFile("file2");
var thunk3 = getFile("file3");


thunk1(function ready1(text1){
	output(text1);
	thunk2(function ready2(text2) {
		output(text2);
		thunk3(function ready3(text3) {
			output(text3);
			console.log("Complete!");
		});
	});
});
