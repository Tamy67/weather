import React, { ChangeEvent, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';

interface SearchBarProps {
    onSearch: (city: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [city, setCity] = useState<string>('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        onSearch(city);
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setCity(value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '1rem',
                }}
            >
                <TextField
                    label='Search city'
                    variant='outlined'
                    size='small'
                    value={city}
                    onChange={handleChange}
                />
                <Button
                    type='submit'
                    variant='contained'
                    color='primary'
                    sx={{ textTransform: 'none' }}
                >
                    Search
                </Button>
            </Box>
        </form>
    );
};

export default SearchBar;
