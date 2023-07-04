import { API_KEY, WEATHER_API_URL } from '../config/config';

export interface WeatherData {
    country: string;
    city: string;
    temperature: number;
    description: string;
    icon: string;
}

export const fetchWeatherData = async (city: string): Promise<WeatherData> => {
    try {
        const response = await fetch(
            `${WEATHER_API_URL}weather?q=${city}&appid=${API_KEY}&units=metric`
        );

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Network response was not ok');
        }

        if (!data.main || !data.weather) {
            throw new Error('Unexpected response structure');
        }

        return {
            country: data.sys.country,
            city: data.name,
            temperature: data.main.temp,
            description: data.weather[0].description,
            icon: data.weather[0].icon,
        };
    } catch (error) {
        console.error('Error fetching weather data:', error);
        throw error;
    }
};
