import axios from "axios";
// https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m

export function getWeather(lat, lon,timezone) {
    axios.get("https://api.open-meteo.com/v1/forecast")
}