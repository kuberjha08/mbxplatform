import React from 'react';
import { Box, Typography } from '@mui/material';

const ChairmanMessage = () => {
    return (
        <Box sx={{
            // maxWidth: '800px',
            margin: '0 auto',
            padding: '40px',
            position: 'relative',
            fontFamily: "'Arial', sans-serif",
            backgroundColor: 'white',
            borderRadius: '8px',
            // boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            px: { xs: 2, md: 20 },
            my:10
        }}>


            {/* Header with different fonts and spacing */}
            <Box sx={{
                marginBottom: '30px',
                textAlign: 'left'
            }}>
                <Typography variant="h5" component="span" sx={{
                    // fontWeight: 'bold',
                    color: '#65748A',
                    display: 'block',
                    marginBottom: '8px',
                    fontFamily:'"Vazirmatn", sans-serif',
                    letterSpacing: '2px', // Increased letter spacing
                }}>
                    Message from the
                </Typography>
                <Typography variant="h4" component="span" sx={{
                    fontWeight: 'bold',
                    color: '#193050',
                    fontFamily: 'IBM Plex Serif, serif', // Second line font
                    display: 'block',
                    letterSpacing: '8px', // Increased letter spacing
                    textIndent: '5px', // Additional spacing adjustment
                    pb: 5
                    // marginLeft: '-4px' // Fine-tuning position
                }}>
                    Chairman
                </Typography>
            </Box>

            {/* Quote icon SVG as Box background image */}

            <Box
                component="img"
                src="Quotes.svg"
                alt={"Quote"}
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

            <Typography variant="body1" sx={{
                marginBottom: '30px',
                lineHeight: '1.8',
                fontSize: '18px',
                color: '#65748A',
                fontFamily: 'Vazirmatn, sans-serif',
                fontWeight: 200,
            }}>
                Our goal is to create <b>long-term value</b> for our shareholders by making <b>sustainable
                investments</b> in diverse asset classes while adhering to <b>Islamic principles</b>. We believe
                that our success is not only measured by financial gains but also by the positive
                impact we make on the communities we operate in. At MXB, we are committed to
                creating <b>a better future</b> for all stakeholders and contributing to the growth and
                development of our people, communities, and nation.
            </Typography>

            <Typography variant="body1" sx={{
                fontWeight: '500',
                marginTop: '40px',
                color: '#122239',
                fontFamily: 'Vazirmatn, sans-serif',
            }}>
                Mrs. Nade Mohammed Aloubaeel,
            </Typography>
            <Typography variant="body1" sx={{
                fontWeight: '300',
                marginTop: '10px',
                color: '#65748A',
                fontFamily: 'Vazirmatn, sans-serif',
            }}>
                Chairman, MXB Investment Company
            </Typography>
        </Box>
    );
};

export default ChairmanMessage;