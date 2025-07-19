import React from 'react';
import { Box, Typography } from '@mui/material';

const Contact = () => (
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
                color: '#ef6c00',
                '&:hover': {
                    color: '#e65100',
                    transform: 'scale(1.05)',
                },
            }}
        >
            Welcome to Contact Page
        </Typography>
    </Box>
);

export default Contact;
