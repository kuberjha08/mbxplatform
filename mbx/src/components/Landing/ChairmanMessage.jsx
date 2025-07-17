import React from 'react';
import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import translations from '../../global';

const ChairmanMessage = () => {
    const { language } = useSelector((state) => state.language);
    const langText = translations[language];
    const msg = langText.chairmanMessage;

    return (
        <Box sx={{
            margin: '0 auto',
            padding: '40px',
            position: 'relative',
            fontFamily: "'Arial', sans-serif",
            backgroundColor: 'white',
            borderRadius: '8px',
            px: { xs: 2, md: 20 },
            my: 10
        }}>

            <Box sx={{ marginBottom: '30px', textAlign: 'left' }}>
                <Typography variant="h5" component="span" sx={{
                    color: '#65748A',
                    display: 'block',
                    marginBottom: '8px',
                    fontFamily: '"Vazirmatn", sans-serif',
                    letterSpacing: '2px',
                }}>
                    {msg.titleLine1}
                </Typography>
                <Typography variant="h4" component="span" sx={{
                    fontWeight: 'bold',
                    color: '#193050',
                    fontFamily: 'IBM Plex Serif, serif',
                    display: 'block',
                    letterSpacing: '8px',
                    textIndent: '5px',
                    pb: 5
                }}>
                    {msg.titleLine2}
                </Typography>
            </Box>

            <Box
                component="img"
                src="Quotes.svg"
                alt="Quote"
                sx={{
                    position: 'absolute',
                    top: '160px',
                    left: '90px',
                    width: '60px',
                    height: '60px',
                    opacity: 1,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center'
                }}
            />

            <Typography
                variant="body1"
                sx={{
                    marginBottom: '30px',
                    lineHeight: '1.8',
                    fontSize: '18px',
                    color: '#65748A',
                    fontFamily: 'Vazirmatn, sans-serif',
                    fontWeight: 200,
                }}
                dangerouslySetInnerHTML={{ __html: msg.quote }}
            />

            <Typography variant="body1" sx={{
                fontWeight: '500',
                marginTop: '40px',
                color: '#122239',
                fontFamily: 'Vazirmatn, sans-serif',
            }}>
                {msg.name}
            </Typography>
            <Typography variant="body1" sx={{
                fontWeight: '300',
                marginTop: '10px',
                color: '#65748A',
                fontFamily: 'Vazirmatn, sans-serif',
            }}>
                {msg.designation}
            </Typography>
        </Box>
    );
};

export default ChairmanMessage;
