import React from 'react';
import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import translations from '../../global';

const svgLogos = [
    '/Bank_Albilad_logo.svg',
    '/gissah.svg',
    '/Jadwa_Investment_logo.svg',
    '/Seedra.svg',
    '/impact.svg',
];

const PartnersCarousel = () => {
    const { language } = useSelector(state => state.language);
    const langText = translations[language];

    return (
        <Box
            sx={{
                overflow: 'hidden',
                width: '90%',
                position: 'relative',
                backgroundColor: '#fff',
                py: 6,
                ml: '5%',
            }}
        >
            <Typography
                variant="h6"
                sx={{
                    textAlign: 'flex-start',
                    color: '#4E5D78',
                    fontWeight: 600,
                    letterSpacing: 1,
                    mb: 4,
                    fontSize: '1.2rem',
                    ml: 5,
                    fontFamily: 'Vazirmatn',
                }}
            >
                {langText.partners.title}
            </Typography>

            {/* Gradient overlays */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    height: '100%',
                    width: '100px',
                    zIndex: 2,
                    background: 'linear-gradient(to right, #fff, rgba(255,255,255,0))',
                }}
            />
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    height: '100%',
                    width: '100px',
                    zIndex: 2,
                    background: 'linear-gradient(to left, #fff, rgba(255,255,255,0))',
                }}
            />

            {/* Logo track */}
            <Box
                sx={{
                    display: 'flex',
                    width: 'fit-content',
                    animation: 'scroll 40s linear infinite',
                    '&:hover': {
                        animationPlayState: 'paused',
                    },
                    '@keyframes scroll': {
                        '0%': { transform: 'translateX(0)' },
                        '100%': { transform: 'translateX(-50%)' },
                    },
                }}
            >
                {[...svgLogos, ...svgLogos].map((src, i) => (
                    <Box
                        key={i}
                        component="img"
                        src={src}
                        alt={`logo-${i}`}
                        sx={{
                            height: { xs: 40, md: 60 },
                            width: 'auto',
                            mx: { xs: 2, md: 5 },
                            flexShrink: 0,
                        }}
                    />
                ))}
            </Box>
        </Box>
    );
};

export default PartnersCarousel;
