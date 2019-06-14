$(document).ready(function() {
	$('#submitWeather').click(function() {
		var city = $("#city").val();

		if(city != '') {
			$.ajax({
				url: "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric" +
				"&APPID=c10bb3bd22f90d636baa008b1529ee25",
				type: "GET",
				dataType: "jsonp",
				success: function(data){
					var widget = show(data);
					$('#show').html(widget);
					$('#city').val('');
				}
			});
		} else {
			$("#error").html('<div class="alert alert-danger" role="alert">City cannot be empty</div>');
		}
	});
});


function show(data) {
	return "<h5 style='margin-top: 3rem; margin-bottom: 3rem;'>Current Weather for " 
	       + data.name + ", " + data.sys.country + "</h5>" + 
	       "<img src='http://openweathermap.org/img/w/" + data.weather[0].icon + ".png'>" +
	       "<p><strong>Weather</strong>: "+ data.weather[0].main +"</p>" +
		   "<p><strong>Description</strong>: "+ data.weather[0].description +"</p>" + 
		   "<p><strong>Temperature</strong>: "+ data.main.temp +"&deg;C</p>" +
		   "<p><strong>Pressure</strong>: "+ data.main.pessure +" hPa</p>" +
		   "<p><strong>Humidity</strong>: "+ data.main.humidity +"%</p>" +
		   "<p><strong>Minimum temp</strong>: "+ data.main.temp_min +"&deg;C</p>" +
		   "<p><strong>Maximum temp</strong>: "+ data.main.temp_max +"&deg;C</p>" +
		   "<p><strong>Wind speed</strong>: "+ data.wind.speed +" m/s</p>" +
		   "<p><strong>Wind direction</strong>: "+ data.wind.deg +"&deg;C</p>";


}