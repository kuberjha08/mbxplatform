import React from 'react';
import { Box, Typography } from '@mui/material';

const Investments = () => (
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
                color: '#558b2f',
                '&:hover': {
                    color: '#33691e',
                    transform: 'translateY(-3px)',
                },
            }}
        >
            Welcome to Investments Page
        </Typography>
    </Box>
);

export default Investments;
