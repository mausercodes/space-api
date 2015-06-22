var app = {};

app.spaceImg = function(query){
	$.ajax({
		url: "https://api.nasa.gov/planetary/apod",
		type: "GET",
		dataType: "json",
		data: {
			api_key: "3DBRzVODmAZYYzBrR62Db11nf0uIXI7PJhFKsFRA",
			date: query
		},
		success: function(data){
			console.log(data);
			app.displayImg(data);
			app.displayInfo(data);
		}
	});
};

app.displayImg = function(imageData){
	var image = $("<img>").attr("src", imageData.url);
	$(".space").append(image);
	console.log(imageData.url);
};

app.displayInfo = function(imageData){
	var info = $("<p>").text(imageData.explanation);
	$(".space").append(info);
	console.log(info);
};

app.events = function(){
	$(".randomImg").on("click", function(e){
		e.preventDefault();
		var day = Math.random() * (31-1) + 1;
		var month = Math.random() * (12-1) + 1;
		var year = Math.random() * (2015-2000) + 2000;
		var date = year.toFixed(0) + "-" + month.toFixed(0) + "-" + day.toFixed(0);
		app.spaceImg(date);
		$(".space").empty();
	});
};

app.init = function(){
	app.spaceImg();
	app.events();
};

$(function(){
	app.init();
});