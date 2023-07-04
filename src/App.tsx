import React from 'react';
import WeatherCard from './components/WeatherCard';
import SearchBar from './components/SearchBar';
import { fetchWeatherData, WeatherData } from './services/weatherService';
import { Box, Typography } from '@mui/material';

const App = () => {
    const [weatherData, setWeatherData] = React.useState<WeatherData>();
    const [error, setError] = React.useState<string>('');

    const handleSearch = async (city: string) => {
        try {
            const data = await fetchWeatherData(city);
            setWeatherData(data);
            setError('');
        } catch (error) {
            setError('Invalid city name. Please try again.');
        }
    };
    return (
        <Box
            component='div'
            sx={{
                mt: 10,
                display: 'flex',
                flexDirection: 'column',
                rowGap: '4rem',
                alignItems: 'center',
            }}
        >
            <SearchBar onSearch={handleSearch} />
            {error ? (
                <Typography variant='body1' color='red'>
                    {error}
                </Typography>
            ) : (
                weatherData && (
                    <WeatherCard
                        country={weatherData.country}
                        city={weatherData.city}
                        temperature={weatherData.temperature}
                        description={weatherData.description}
                        icon={weatherData.icon}
                    />
                )
            )}
        </Box>
    );
};

export default App;
