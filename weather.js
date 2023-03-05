import axios from "axios";
// https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m

export function getWeather(lat, lon,timezone) {
    return axios.get("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m", {
    params: {
        latitude: lat,
        longitude: lon,
        timezone,

    }
     }
    )
    .then(({data}) => {
        // return data // 36:09
        return  {
            current:parseCurrentWeather(data),
            //daily: parseDailyWeather(data),
            hourly: parseHourlyWeather(data),
        }
    }
    ) 
}

function parseCurrentWeather({current_weather, daily}) {
    const current_weather ={
        temperature: currentTemp,
         windspeed: windSpeed
    }    

    const daily = {
        temperature_2m_max: [maxTemp],
        temperature_2m_min: [minTemp],
        apparent_temperature_max: [maxTemp],
        temperature_2m_max:[maxTemp],
        precipitation_sum: [precip],


    }

    return {
       currentTemp:Math.round(currentTemp),
        highTemp: Math.round(maxTemp),
        lowTemp: Math.round(minTemp),
        highFeelsLike: Math.round(maxFeelsLike),
        lowFeelsLike: Math.round(minFeelsLike),
        windSpeed:Math.round(precip * 100) / 100,
        precip: Math.round(precip * 100) / 100,
        iconCode: ,
    }
};

function parseDailyWeather({ daily }) {
    return daily.time.map(time, index) => {
        return {
            timestamp: time * 1000,
            iconCode:daily.weathercode[index], 
            maxTemp: Math.round(daily.temperature_2m_max[index]),
        }
    }
};

function parseHourlyWeather({hourly, current_weather}) {
    return hourly.time.map((time, index)) => {
        return {
            timestamp: time * 1000, 
        }
    }
};