import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { ICON_URL } from '../config/config';
import { WeatherData } from '../services/weatherService';

interface WeatherProps extends WeatherData {}

const WeatherCard: React.FC<WeatherProps> = ({
    country,
    city,
    temperature,
    description,
    icon,
}) => {
    const iconUrl = `${ICON_URL}${icon}.png`;

    return (
        <Card variant='outlined' sx={{ maxWidth: 350, width: '100%' }}>
            <CardContent>
                <Typography variant='h5'>
                    {city}, {country}
                </Typography>
                <Box display='flex' alignItems='center'>
                    <img src={iconUrl} alt={description} />
                    <Typography variant='body2' fontSize={24}>
                        {Number(temperature.toFixed(0))}°C
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
};

export default WeatherCard;
