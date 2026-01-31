async function fetchdata(city){

    // this will fetch latitude and longitude data
    let coordinateURL = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=36707a1941843e38a833f9ac337cc921`;
    let response = await fetch(coordinateURL);
    let data = await response.json();
    console.log(data);
    let latitude = data[0].lat;
    let longitude = data[0].lon;
    console.log(latitude, longitude);

    // this will fetch data of weather
    let weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=36707a1941843e38a833f9ac337cc921`;
    let weatherresponse = await fetch(weatherURL);
    let weatherdata = await weatherresponse.json();
    console.log(weatherdata);

    // // fetch hourly data
    // let hourlyURL = `https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=${latitude}&lon=${longitude}&appid=36707a1941843e38a833f9ac337cc921`;
    // let hourlyresponse = await fetch(hourlyURL);
    // let hourlydata = await hourlyresponse.json();
    // console.log(hourlydata);

    // fetch 5days/3hrs forecast data
    let fivedayURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=36707a1941843e38a833f9ac337cc921`;
    let fivereponse = await fetch(fivedayURL);
    let fivedata = await fivereponse.json();
    console.log(fivedata);

    // fetch air quailty
    let aqiURL = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${latitude}&lon=${longitude}&appid=36707a1941843e38a833f9ac337cc921`;
    let aqiresponse = await fetch(aqiURL);
    let aqidata = await aqiresponse.json();
    console.log(aqidata);
}

