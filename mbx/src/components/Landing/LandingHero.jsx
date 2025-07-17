import React from 'react';
import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import translations from '../../global';

const LandingHero = () => {
    const { language } = useSelector(state => state.language);
    const langText = translations[language];

    return (
        <Box
            sx={{
                height: '90vh',
                backgroundImage: `url('HeroSectionLanding.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                pl: { xs: 2, sm: 8, md: 12 },
                pt: { xs: 10, sm: 12, md: 10 },
            }}
        >
            <Box sx={{ color: '#000', maxWidth: 400, zIndex: 2 }}>
                <Typography
                    variant="h3"
                    sx={{
                        fontWeight: 700,
                        fontFamily: 'IBM Plex Serif',
                        color: '#193050',
                        mb: 1,
                        direction: 'ltr',

                    }}
                >
                    {langText.creatingTitle || 'CREATING'}
                </Typography>

                <Box
                    sx={{
                        display: 'inline-block',
                        px: 2,
                        py: 0.75,
                        mb: 1,
                        backdropFilter: 'blur(2px)',
                        backgroundColor: 'rgba(36, 41, 52, 0.25)',
                        maxWidth: 600,
                    }}
                >
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: 800,
                            fontFamily: 'Vazirmatn, sans-serif',
                            color: '#fff',
                            direction: 'ltr',
                        }}
                    >
                        {langText.valueResponsibility || 'VALUE RESPONSIBILITY'}
                    </Typography>
                </Box>

                <Box
                    sx={{
                        display: 'inline-block',
                        px: 2,
                        py: 1,
                        backdropFilter: 'blur(2px)',
                        backgroundColor: 'rgba(36, 41, 52, 0.25)',
                        maxWidth: 600,
                    }}
                >
                    <Typography
                        variant="h5"
                        sx={{
                            fontFamily: 'Vazirmatn, sans-serif',
                            color: '#fff',
                            fontWeight: 400,
                            direction: 'ltr',
                            lineHeight: 1.3,
                        }}
                    >
                        {langText.investingWith?.split(' ')[0] || 'INVESTING'}
                    </Typography>
                    <Typography
                        variant="h5"
                        sx={{
                            fontFamily: 'Vazirmatn, sans-serif',
                            color: '#fff',
                            fontWeight: 800,
                        }}
                    >
                        {langText.investingWith?.split(' ').slice(1).join(' ') || 'WITH INTEGRITY'}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default LandingHero;
