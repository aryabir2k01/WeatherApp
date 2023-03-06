const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'dbe1322cbamsh668acee3aead5fcp1db933jsn36e59cc0712c',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};


const getWeather = (city)=>{
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
	.then((response) => {
        
		cityName.innerHTML = city
		console.log(response)
		cloud_pct.innerHTML = response.cloud_pct
		feels_like.innerHTML = response.feels_like
		humidity.innerHTML = response.humidity
		humidity2.innerHTML = response.humidity
		max_temp.innerHTML = response.max_temp
		min_temp.innerHTML = response.min_temp
		sunrise.innerHTML = response.sunrise
		sunset.innerHTML = response.sunset
		temp.innerHTML = response.temp
		temp2.innerHTML = response.temp
		wind_degrees.innerHTML = response.wind_degrees
		wind_degrees2.innerHTML = response.wind_degrees
		wind_speed = response.wind_speed



		console.log(response)
	})
	.catch(err => console.error(err));
}

submit.addEventListener("click",(e)=>{
	  e.preventDefault()
      getWeather(city.value)
})

getWeather("Bhubaneswar")





// for Banglore
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bangalore', options)
.then(response => response.json())
.then((response) => {
	
	console.log(response)
	cloud_pctB.innerHTML = response.cloud_pct
	feels_likeB.innerHTML = response.feels_like
	humidityB.innerHTML = response.humidity
	max_tempB.innerHTML = response.max_temp
	min_tempB.innerHTML = response.min_temp
	sunriseB.innerHTML = response.sunrise
	sunsetB.innerHTML = response.sunset
	tempB.innerHTML = response.temp
	wind_degreesB.innerHTML = response.wind_degrees
	wind_speedB = response.wind_speed



	console.log(response)
})
.catch(err => console.error(err));

// for Hybd
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Hyderabad', options)
.then(response => response.json())
.then((response) => {
	
	console.log(response)
	cloud_pctH.innerHTML = response.cloud_pct
	feels_likeH.innerHTML = response.feels_like
	humidityH.innerHTML = response.humidity
	max_tempH.innerHTML = response.max_temp
	min_tempH.innerHTML = response.min_temp
	sunriseH.innerHTML = response.sunrise
	sunsetH.innerHTML = response.sunset
	tempH.innerHTML = response.temp
	wind_degreesH.innerHTML = response.wind_degrees
	wind_speedH = response.wind_speed



	console.log(response)
})
.catch(err => console.error(err));

// for Chennai
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Chennai', options)
.then(response => response.json())
.then((response) => {
	
	console.log(response)
	cloud_pctC.innerHTML = response.cloud_pct
	feels_likeC.innerHTML = response.feels_like
	humidityC.innerHTML = response.humidity
	max_tempC.innerHTML = response.max_temp
	min_tempC.innerHTML = response.min_temp
	sunriseC.innerHTML = response.sunrise
	sunsetC.innerHTML = response.sunset
	tempC.innerHTML = response.temp
	wind_degreesC.innerHTML = response.wind_degrees
	wind_speedC = response.wind_speed



	console.log(response)
})
.catch(err => console.error(err));



// for Pune
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Pune', options)
.then(response => response.json())
.then((response) => {
	
	console.log(response)
	cloud_pctP.innerHTML = response.cloud_pct
	feels_likeP.innerHTML = response.feels_like
	humidityP.innerHTML = response.humidity
	max_tempP.innerHTML = response.max_temp
	min_tempP.innerHTML = response.min_temp
	sunriseP.innerHTML = response.sunrise
	sunsetP.innerHTML = response.sunset
	tempP.innerHTML = response.temp
	wind_degreesP.innerHTML = response.wind_degrees
	wind_speedP = response.wind_speed



	console.log(response)
})
.catch(err => console.error(err));



// for Kolkata
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata', options)
.then(response => response.json())
.then((response) => {
	
	console.log(response)
	cloud_pctK.innerHTML = response.cloud_pct
	feels_likeK.innerHTML = response.feels_like
	humidityK.innerHTML = response.humidity
	max_tempK.innerHTML = response.max_temp
	min_tempK.innerHTML = response.min_temp
	sunriseK.innerHTML = response.sunrise
	sunsetK.innerHTML = response.sunset
	tempK.innerHTML = response.temp
	wind_degreesK.innerHTML = response.wind_degrees
	wind_speedK = response.wind_speed



	console.log(response)
})
.catch(err => console.error(err));




// for Delhi
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi', options)
.then(response => response.json())
.then((response) => {
	
	console.log(response)
	cloud_pctD.innerHTML = response.cloud_pct
	feels_likeD.innerHTML = response.feels_like
	humidityD.innerHTML = response.humidity
	max_tempD.innerHTML = response.max_temp
	min_tempD.innerHTML = response.min_temp
	sunriseD.innerHTML = response.sunrise
	sunsetD.innerHTML = response.sunset
	tempD.innerHTML = response.temp
	wind_degreesD.innerHTML = response.wind_degrees
	wind_speedD = response.wind_speed



	console.log(response)
})
.catch(err => console.error(err));