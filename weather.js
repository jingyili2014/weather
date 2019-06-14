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
			alert("City cannot be empty");
		}
	});
});



$(document).ready(function() {
	$('#submitWeather').click(function() {
		var city = $("#city").val();

		$.ajax({
			url: "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric" +
			"&APPID=c10bb3bd22f90d636baa008b1529ee25",
			type: "GET",
			dataType: "jsonp",
			success: function(data){
				var widget = detail_1(data);
				$('#detail_1').html(widget);
				$('#city').val('');
			}
		});
	});
});

$(document).ready(function() {
	$('#submitWeather').click(function() {
		var city = $("#city").val();

		$.ajax({
			url: "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric" +
			"&APPID=c10bb3bd22f90d636baa008b1529ee25",
			type: "GET",
			dataType: "jsonp",
			success: function(data){
				var widget = detail_2(data);
				$('#detail_2').html(widget);
				$('#city').val('');
			}
		});
	});
});



$(document).ready(function() {
	$('#submitWeather').click(function() {
		var city = $("#city").val();

		$.ajax({
			url: "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric" +
			"&APPID=c10bb3bd22f90d636baa008b1529ee25",
			type: "GET",
			dataType: "jsonp",
			success: function(data){
				var widget = detail_3(data);
				$('#detail_3').html(widget);
				$('#city').val('');
			}
		});
	});
});


function show(data) {
	return "<h3 style='margin-top: 3rem; margin-bottom: 3rem;'>" + data.name + "</h3>" + 
	       "<h5 style='margin: 0;'>"+ data.weather[0].main +"</h5>" +
	       "<h1>"+ data.main.temp +" &deg;</h1>" + 
	       "<img style='width: 50px;' src='http://openweathermap.org/img/w/" + data.weather[0].icon + ".png'>";	   
}



function detail_1(data) {
	return "<p style='font-size: 0.8rem; margin-top: 2rem; margin-bottom:0;'>CLOUNDS</p>" + 
		   "<p>" + data.clouds.all + "%</p>" + 
		   "<p style='font-size: 0.8rem; margin-top: 2rem; margin-bottom:0;'>WIND</p>" + 
		   "<p>"+ data.wind.speed +" m/s</p>";

}

function detail_2(data) {
	return "<p style='font-size: 0.8rem; margin-top: 2rem; margin-bottom:0;'>MAX TEMP</p>" + 
	       "<p>"+ data.main.temp_max +"&deg;C</p>" +
	       "<p style='font-size: 0.8rem; margin-top: 2rem; margin-bottom:0;'>MIN TEMP</p>" +
		   "<p>"+ data.main.temp_min +"&deg;C</p>";

}

function detail_3(data) {
	return "<p style='font-size: 0.8rem; margin-top: 2rem; margin-bottom:0;'>HUMIDITY</p>" +
	       "<p>"+ data.main.humidity +"%</p>" +
	       "<p style='font-size: 0.8rem; margin-top: 2rem; margin-bottom:0;'>PRESSURE</p>" +
		   "<p>"+ data.main.pessure +" hPa</p>";
}