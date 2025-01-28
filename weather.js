
import api_key from './weatherApiKey.js';

//hardcode atlanta's coordinates
const API_URL = 'https://api.openweathermap.org/data/2.5/weather?lat=33.75&lon=-84.38&appid=' + api_key + '&units=imperial'

export async function getTemperature() {
   try{
        console.log('Fetching weather data')
        const response = await fetch(API_URL)
        const responseJSON = await response.json()
        if (responseJSON.main.temp) {
            console.log(responseJSON.main.temp)
            return responseJSON.main.temp
        } else {
            console.log("No weather data was found.")
            return "unknown"
        }

   } catch (e) {
        console.error("There was an error when fetching weather data: " + e)
   }
}

