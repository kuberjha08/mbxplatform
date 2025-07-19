import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import {useSelector} from "react-redux";
import translations from "../../global";

const statsData = [
    {
        image: 'Stat1.png',
        number: '+25',
        unit: '',
    },
    {
        image: 'Stat2.png',
        number: '+50K',
        unit: 'sqm',
    },
    {
        image: 'Stat3.png',
        number: '+3M',
        unit: 'sqm',
    },
    {
        image: 'Stat4.png',
        number: '8',
        unit: '',
    },
];

const StatsSection = () => {
    const { language } = useSelector(state => state.language);
    const langText = translations[language];
    const stats = langText.statsSection;

    return (
        <Box sx={{ backgroundColor: '#fff', py: 10, px: { xs: 2, md: 10 }, borderTop: '1px solid #E5E5E5' }}>
            <Typography
                sx={{
                    fontWeight: 700,
                    textAlign: 'flex-start',
                    mb: 2,
                    letterSpacing: 1,
                    color: '#0F1B36',
                    ml: '5%',
                    fontFamily: '"IBM Plex Serif", sans-serif',
                    fontSize: '1.6rem',
                    lineHeight: 1.2,
                }}
            >
                {stats.heading}
            </Typography>

            <Typography
                sx={{
                    color: '#4E5D78',
                    textAlign: 'left',
                    mb: 6,
                    maxWidth: 750,
                    fontSize: '1.4rem',
                    ml: '5%',
                    fontweight: 100,
                    fontFamily: '"IBM Plex Serif", sans-serif',
                }}
            >
                {stats.description}
            </Typography>

            <Grid container spacing={4} justifyContent="center">
                {statsData.map((item, index) => (
                    <Grid key={index} item xs={12} sm={6} md={3}>
                        <Box sx={{ textAlign: 'flex-start', pl: 0 }}>
                            <Box
                                sx={{
                                    height: 240,
                                    width: 240,
                                    backgroundImage: `url(${item.image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    display: 'flex',
                                    alignItems: 'flex-end',
                                    justifyContent: 'flex-start',
                                    pb: 3,
                                    pl: 3,
                                }}
                            >
                                <Typography
                                    variant="body1"
                                    sx={{
                                        color: 'white',
                                        fontWeight: 200,
                                        textAlign: 'left',
                                        fontSize: '1.8rem',
                                        whiteSpace: 'pre-line',
                                        fontfamily: 'Vazirmatn, sans-serif',
                                    }}
                                >
                                    {stats.cards[index].split('\n').map((line, idx) => (
                                        <React.Fragment key={idx}>
                                            {line}
                                            <br />
                                        </React.Fragment>
                                    ))}
                                </Typography>
                            </Box>

                            <Box sx={{ position: 'relative', mt: 0, textAlign: 'left' }}>
                                <Typography
                                    sx={{
                                        fontWeight: 700,
                                        color: '#4D8FC3',
                                        fontSize: '100px',
                                    }}
                                >
                                    {item.number}
                                </Typography>

                                {item.unit && (
                                    <Typography
                                        sx={{
                                            fontSize: '1rem',
                                            fontWeight: 400,
                                            color: '#4E5D78',
                                            position: 'absolute',
                                            bottom: 1,
                                            right: item.number === '+3M' ? 70 : 20,
                                        }}
                                    >
                                        {item.unit}
                                    </Typography>
                                )}
                            </Box>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default StatsSection;
