import React from 'react';
import { Box, Typography } from '@mui/material';

const About = () => (
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
                color: '#1e3a8a',
                '&:hover': {
                    color: '#0d47a1',
                    letterSpacing: '2px',
                },
            }}
        >
            Welcome to About Page
        </Typography>
    </Box>
);

export default About;
