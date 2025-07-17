import React from 'react';
import { Box, Typography, Grid, Button, IconButton } from '@mui/material';

const images = [
    { src: 'AlOlyaUp.svg', title: 'Al Olaya' },
    { src: 'PlumeriaUp.svg', title: 'Plumeria' },
    { src: 'AlOlyaDown.svg', title: 'Triangle Center' },
    { src: 'PlumeriaDown.svg', title: 'Palm Residence' },
];
const CorneredImage = ({ src, title, width, height, top, left}) => (
    <Box sx={{ position: 'relative', mb: 2 }}>
        {/* Top-left */}
        {/*<Box sx={{*/}
        {/*    position: 'absolute', top: 0, left: 0,*/}
        {/*    width: 12, height: 12, backgroundColor: '#B4C7DC',*/}
        {/*}} />*/}

        {/* Bottom-right */}
        {/*<Box sx={{*/}
        {/*    position: 'absolute', bottom: 0, right: 0,*/}
        {/*    width: 12, height: 12, backgroundColor: '#B4C7DC',*/}
        {/*}} />*/}

        <Box
            component="img"
            src={src}
            alt={title}
            sx={{
                width,
                height,
                objectFit: 'cover',
                // borderRadius: 2,
                display: 'block',
            }}
        />
        <BlurSquareBox top={top} left={left} />


        <Typography
            sx={{
                mt: 1,
                color: '#4D8FC3',
                fontWeight: 600,
                fontSize: '0.95rem',
                textAlign: 'left',
            }}
        >
            {title}
        </Typography>
    </Box>
);
const BlurSquareBox = ({ size = 20, top, left, right, bottom }) => (
    <Box
        sx={{
            position: 'absolute',
            top,
            left,
            right,
            bottom,
            width: size,
            height: size,
            backgroundColor: '#4486B74D',
            backdropFilter: 'blur(10px)',
            zIndex: 2,
        }}
    />
);

const OurProjectsSection = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: 'stretch',
                // py: 10,
                pt:30,
                px: { xs: 2, md: 10 },
                background: 'linear-gradient(to right, #d5e2f0, #ffffff)',
            }}
        >
            {/* Left Column */}
            <Box sx={{ flex: 1, pr: { md: 8 }, mb: { xs: 6, md: 0 }, position: 'relative',}}>
                {/* Top Badge */}

                {/* Text */}
                <Typography
                    sx={{ fontWeight: 600, color: '#0F1B36', mb: 2, fontFamily: 'IBM Plex Serif', letterSpacing: 1, lineHeight: 1.2, fontSize: '2.3rem', pl: { xs: 0, md: 20}  }}
                >
                    Discover More <br /> About Our Projects
                </Typography>

                <Typography
                    sx={{
                        fontSize: '1.3rem',
                        color: '#4E5D78',
                        maxWidth: 400,
                        mb: 3,
                        lineHeight: 1.6,
                        fontFamily: 'Vazirmatn',
                        pl: { xs: 0, md: 20},
                        fontWeight: 300,
                    }}
                >
                    A forward-thinking developments that embody Saudi Vision 2030 — blending
                    sustainability, innovation, and architectural excellence.
                </Typography>

                <Button
                    endIcon={
                        <Box
                            sx={{
                                backgroundColor: '#4486B74D',
                                borderRadius: '50%',
                                width: 40,
                                height: 40,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                ml: 1,
                            }}
                        >
                            <Box
                                component="img"
                                src="ArrowUpRight.svg"
                                alt="arrow"
                                sx={{ width: 25, height: 25 }}
                            />
                        </Box>
                    }
                    sx={{
                        fontWeight: 600,
                        textTransform: 'none',
                        mb: 6,
                        pl: { xs: 0, md: 20 },
                        background: 'linear-gradient(to right, #E5E5E5, #4486B7)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        fontSize: '1.2rem',
                        fontFamily: 'Vazirmatn',
                    }}
                >
                    See more
                </Button>


                <br/>

                {/* Large Tower SVG */}
                <Box
                    component="img"
                    src="OmraniaPIFh.svg"
                    alt="Building"
                    sx={{
                        width: '100%',
                        maxWidth: 350,
                        mt: 1,
                    }}
                />
            </Box>

            {/* Right Column */}
            <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                <Box sx={{ position: 'relative', height: 600, width: '90%' }}>
                    {/* Al Olaya (Top Left) */}
                    <Box sx={{ position: 'absolute', top: 0, left: 0 }}>
                        <CorneredImage src="AlOlyaUp.svg" title="Al Olaya" width={250} height={300} top={-10} left={-10} />
                    </Box>

                    {/* Plumeria (Top Right) */}
                    <Box sx={{ position: 'absolute', top: 100, right: 0 }}>
                        <CorneredImage src="PlumeriaUp.svg" title="Plumeria" width={250} height={300} top={-10} left={210} />
                    </Box>

                    {/* Triangle Center (Bottom Left - below Al Olaya) */}
                    <Box sx={{ position: 'absolute', bottom: -22, left: 0 }}>
                        <CorneredImage src="AlOlyaDown.svg" title="" width={250} height={240} top={-10} left={240}/>
                    </Box>

                    {/* Palm Residence (Bottom Right - below Plumeria, offset slightly upward) */}
                    <Box sx={{ position: 'absolute', bottom: -22, right: 0 }}>
                        <CorneredImage src="PlumeriaDown.svg" title="" width={250} height={160} top={-10} left={-10}/>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default OurProjectsSection;
