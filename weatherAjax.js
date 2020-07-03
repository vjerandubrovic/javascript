function getWeather(woeid){

    fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}`)
    .then((result)=>{
        // console.log(result)
        return result.json();
    })
    .then((data)=>{
        // console.log(data);
        const today = data.consolidated_weather[0];
        console.log(`Temperatura danas u ${data.title} je između ${today.min_temp}-${today.max_temp}`);
    })
    .catch((error)=>{
        console.log(error)
    });

}

getWeather(851128);
getWeather(44418);

async function getWeatherAW(woeid){
    try{
        const result = await fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}`);
        const data = await result.json();
        const tomorrow = data.consolidated_weather[1];
        console.log(`Temperatura sutra u ${data.title} je između ${tomorrow.min_temp}-${tomorrow.max_temp}`);
        return data;
    }catch(error){
        console.log(error);
    }
    
}

let zagreb;
getWeatherAW(851128).then(data=>{
    zagreb=data;
    console.log(zagreb);
});
getWeatherAW(44418);
