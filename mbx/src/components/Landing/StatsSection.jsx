import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

const statsData = [
    {
        title: 'Investing in\nequities and\nfunds.',
        image: 'Stat1.png',
        number: '+25',
        unit: '',
    },
    {
        title: 'Area of\nreal estate\nprojects.',
        image: 'Stat2.png',
        number: '+50K',
        unit: 'sqm',
    },
    {
        title: 'Area of\ninfrastructure\nprojects.',
        image: 'Stat3.png',
        number: '+3M',
        unit: 'sqm',
    },
    {
        title: 'Real estate &\ninfrastructure\nprojects.',
        image: 'Stat4.png',
        number: '8',
        unit: '',
    },
];

const StatsSection = () => {
    return (
        <Box sx={{ backgroundColor: '#fff', py: 10, px: { xs: 2, md: 10 },borderTop:'1px solid #E5E5E5' }}>
            {/* Heading */}
            <Typography
                sx={{
                    fontWeight: 700,
                    textAlign: 'flex-start',
                    mb: 2,
                    letterSpacing: 1,
                    color: '#0F1B36',
                    ml:'5%',
                    fontFamily:'"IBM Plex Serif", sans-serif',
                    fontSize: '2rem',
                    lineHeight: 1.2,
                }}
            >
                MXB Impact By Numbers
            </Typography>

            {/* Subtext */}
            <Typography
                sx={{
                    color: '#4E5D78',
                    textAlign: 'left',
                    mb: 6,
                    maxWidth: 750,
                    // mx: 'auto',
                    fontSize: '1.4rem',
                    ml:'5%',
                    fontweight: 100,
                    fontFamily:'"IBM Plex Serif", sans-serif',
                }}
            >
                We believe in results you can measure — a reflection of our commitment to smart, sustainable investing across diverse markets.
            </Typography>

            {/* Cards */}
            <Grid container spacing={4} justifyContent="center">
                {statsData.map((item, index) => (
                    <Grid key={index} item xs={12} sm={6} md={3}>
                        <Box sx={{ textAlign: 'center' }}>
                            {/* Image Box with Overlay Text */}
                            <Box
                                sx={{
                                    height: 240,
                                    width:240,
                                    backgroundImage: `url(${item.image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    borderRadius: 2,
                                    display: 'flex',
                                    alignItems: 'flex-end',
                                    justifyContent: 'flex-start',
                                    pb:3,
                                    pl:3,
                                }}
                            >
                                <Typography
                                    variant="body1"
                                    sx={{
                                        color: 'white',
                                        fontWeight: 200,
                                        textAlign: 'left',
                                        fontSize: '1.8rem',
                                        whiteSpace: 'pre-line', // (optional)
                                        fontfamily: 'Vazirmatn, sans-serif',
                                    }}
                                >
                                    {item.title.split('\n').map((line, idx) => (
                                        <React.Fragment key={idx}>
                                            {line}
                                            <br />
                                        </React.Fragment>
                                    ))}
                                </Typography>
                            </Box>

                            {/* Number */}
                            <Typography
                                variant="h4"
                                sx={{
                                    fontWeight: 700,
                                    color: '#4D8FC3',
                                    mt: 4,
                                    fontSize: '3rem',
                                }}
                            >
                                {item.number}
                                {<br/>}
                                {item.unit && (
                                    <Typography
                                        // component="span"
                                        sx={{
                                            fontSize: '1rem',
                                            fontWeight: 400,
                                            color: '#4E5D78',
                                            ml: 8,
                                            alignItems: 'flex-end',
                                        }}
                                    >
                                        {item.unit}
                                    </Typography>
                                )}
                            </Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default StatsSection;
