import React from 'react';
import { Box, Typography } from '@mui/material';

const RealEstate = () => (
    <Box
        sx={{
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#fff',
        }}
    >
        <Typography
            variant="h3"
            sx={{
                fontWeight: 600,
                color: '#6a1b9a',
                '&:hover': {
                    color: '#4a148c',
                    letterSpacing: '1.2px',
                },
            }}
        >
            Welcome to Real Estate Page
        </Typography>
    </Box>
);

export default RealEstate;
