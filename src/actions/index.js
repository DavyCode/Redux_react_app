import axios from 'axios'

const API_KEY = '82aba45329a8c1c7716a6803b4e42fb3'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&units=metric`

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
    const url =`${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    console.log('request', request)
    
    return {
        type: FETCH_WEATHER,
        payload: request
    };  
}