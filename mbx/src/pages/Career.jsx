import React from 'react';
import { Box, Typography } from '@mui/material';

const Career = () => (
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
                color: '#00695c',
                '&:hover': {
                    color: '#004d40',
                    letterSpacing: '1.5px',
                },
            }}
        >
            Welcome to Career Page
        </Typography>
    </Box>
);

export default Career;
