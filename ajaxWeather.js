
function getWeather(woeid){

    fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}`)
    .then((result)=>{
        // console.log(result)
        return result.json();
    })
    .then((data)=>{
        // console.log(data);
        const today = data.consolidated_weather[0];
        console.log(`temperatura u ${data.title} je između ${today.min_temp}-${today.max_temp}`);
    })
    .catch((error)=>{
        console.log(error)
    });

}

getWeather(851128);
getWeather(44418);