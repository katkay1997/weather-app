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
    ).then(({data}) => {
        return  {
            current:parseCurrentWeather(data),
            daily: parseDailyWeather(data),
            hourly: parseHourlyWeather(data),
        }
    }
    )
}

function parseCurrentWeather({current_weather, daily}) {
    
};