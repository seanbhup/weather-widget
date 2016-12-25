$(document).ready(function(){

	// var zip = 30305;//$("#zip-code").val();
	

	$("#weather-form").submit(function(){
		// Stop the form from submitting (default action)
		event.preventDefault();
		//Get whatever the user typed out of the input and store it in symbol
		var zip = $("#zip-code").val();
		var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?units=imperial&zip="+zip+",us&appid="+apiKey;
		// var carbonUrl = "http://api.openweathermap.org/pollution/v1/co/"+lat+","+lon+"/"+dateTime+".json?appid="+apiKey;
		// console.log(weatherUrl);
		$.getJSON(weatherUrl, function(weatherData){
		console.log(weatherData);
		var tempMax = weatherData.main.temp_max;
		var tempMin = weatherData.main.temp_min;
		var currTemp = weatherData.main.temp;
		var currHumid = weatherData.main.humidity;
		var name = weatherData.name;
		var icon = weatherData.weather[0].icon;
		var iconUrl = "http://openweathermap.org/img/w/"+icon+".png";
		$("#current-temp").html(currTemp + "&deg;F");
		$("#current-humidity").html(currHumid + "% Humidity");
		$("#location").html(name);
		$("#temp-max").html(tempMax);
		$("#temp-min").html(tempMin);
		// $("#current-temp").html("<img src=" +iconUrl+ "> The temperature in " + name + " is currently " + currTemp + "&deg;" + " Fahrenheit");
		// $.getJSON(carbonUrl, function(carbonData){
		// console.log(carbonData);
		// var dateTime = weatherData.dt;
		// var lat = weatherData.coord.lat;
		// var lon = weatherData.coord.lon;
		// });
		// $("#carbon-monox").html("hi")
		// var canvas = $("#weather-canvas");
		// var context = canvas[0].getContext("2d");
		// // Set up the outer circle
		// var currentPercent = 0;
		// function animate(current){
		// 	// Draw the inner circle
		// 	context.fillStyle = "#706563";
		// 	context.beginPath();
		// 	context.arc(200, 75, 65, Math.PI * 0, Math.PI * 2);
		// 	context.closePath();
		// 	context.fill();

		// 	// Draw the outer line
		// 	context.lineWidth = 7; //make a thick outer line
		// 	context.strokeStyle = "#9DC7C8";
		// 	context.beginPath();
		// 	context.arc(200, 75, 69, (Math.PI * 1.5), (Math.PI * 2 * current) + (Math.PI * 1.5));
		// 	context.stroke();
		// 	currentPercent++; //increment currPercent
		// 	if(currentPercent < currTemp){
		// 		requestAnimationFrame(function(){
		// 			animate(currentPercent / 100);
		// 		})
		// 	}
		// 	// context.closePath();
		// 	// context.fill();

		// }
		// animate();
	});

	


		


	});

});

// console.log(apiKey);