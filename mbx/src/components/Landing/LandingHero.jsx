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
                height: '100vh',
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
                    // variant="h3"
                    sx={{
                        fontWeight: 700,
                        fontFamily: 'IBM Plex Serif',
                        color: '#193050',
                        // mb: 2,
                        direction: 'ltr',
                        letterSpacing: '0.5rem',
                        fontSize:'2.9rem'
                    }}
                >
                    {langText.creatingTitle || 'CREATING'}
                </Typography>

                <Box
                    sx={{
                        display: 'inline-block',
                        px: 2,
                        py: 0.5,
                        mb: 1,
                        backdropFilter: 'blur(2px)',
                        backgroundColor: 'rgba(36, 41, 52, 0.25)',
                        maxWidth: 600,
                    }}
                >
                    <Typography
                        sx={{
                            fontWeight: 800,
                            fontFamily: 'Vazirmatn, sans-serif',
                            color: '#fff',
                            direction: 'ltr',
                            fontSize:'1.3rem',
                            letterSpacing: '0.1rem',
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
                    <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                        {/* Left Column: INVESTING + WITH */}
                        <Box sx={{ mr: 2 }}>
                            <Typography
                                variant="h6"
                                sx={{
                                    fontFamily: 'Vazirmatn, sans-serif',
                                    color: '#fff',
                                    fontWeight: 600,
                                    direction: 'ltr',
                                    fontSize: '1.3rem',
                                }}
                            >
                                {langText.investingWith || "INVESTING"}
                            </Typography>
                            <Typography
                                variant="h6"
                                sx={{
                                    fontFamily: 'Vazirmatn, sans-serif',
                                    color: '#fff',
                                    fontWeight: 600,
                                    direction: 'ltr',
                                    fontSize: '1.3rem',
                                    mt:1
                                }}
                            >
                                {langText.with || "WITH"}
                            </Typography>
                        </Box>

                        {/* Right Column: INTEGRITY aligned to INVESTING */}
                        <Typography
                            variant="h4"
                            sx={{
                                fontFamily: 'Vazirmatn, sans-serif',
                                color: '#fff',
                                fontWeight: 800,
                                direction: 'ltr',
                                lineHeight: 1.3,
                                mt: 4, // top aligned
                                ml:-7
                            }}
                        >
                            {langText.integrity || "INTEGRITY"}
                        </Typography>
                    </Box>
                </Box>


            </Box>
        </Box>
    );
};

export default LandingHero;
