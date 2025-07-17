import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import translations from '../../global'; // adjust path if needed

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

const CorneredImage = ({ src, title, width, height, top, left }) => (
    <Box sx={{ position: 'relative', mb: 2 }}>
        <Box
            component="img"
            src={src}
            alt={title}
            sx={{
                width,
                height,
                objectFit: 'cover',
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

const OurProjectsSection = ({ lang = 'en' }) => {
    const content = translations[lang].projects;

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: 'stretch',
                pt: 30,
                px: { xs: 2, md: 10 },
                background: 'linear-gradient(to right, #d5e2f0, #ffffff)',
            }}
        >
            {/* Left Column */}
            <Box sx={{ flex: 1, pr: { md: 8 }, mb: { xs: 6, md: 0 }, position: 'relative' }}>
                <Typography
                    sx={{
                        fontWeight: 600,
                        color: '#0F1B36',
                        mb: 2,
                        fontFamily: 'IBM Plex Serif',
                        letterSpacing: 1,
                        lineHeight: 1.2,
                        fontSize: '2.3rem',
                        pl: { xs: 0, md: 20 },
                        whiteSpace: 'pre-line',
                    }}
                >
                    {content.heading}
                </Typography>

                <Typography
                    sx={{
                        fontSize: '1.3rem',
                        color: '#4E5D78',
                        maxWidth: 400,
                        mb: 3,
                        lineHeight: 1.6,
                        fontFamily: 'Vazirmatn',
                        pl: { xs: 0, md: 20 },
                        fontWeight: 300,
                    }}
                >
                    {content.description}
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
                    {content.cta}
                </Button>

                <br />

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
            <Box
                sx={{
                    flex: 1,
                    display: { xs: 'none', md: 'flex' }, // hide on xs/sm, show on md and above
                    justifyContent: 'center',
                }}
            >
                <Box sx={{ position: 'relative', height: 600, width: '90%' }}>
                    <Box sx={{ position: 'absolute', top: 0, left: 0 }}>
                        <CorneredImage
                            src="AlOlyaUp.svg"
                            title={content.items.alOlaya}
                            width={250}
                            height={300}
                            top={-10}
                            left={-10}
                        />
                    </Box>

                    <Box sx={{ position: 'absolute', top: 100, right: 0 }}>
                        <CorneredImage
                            src="PlumeriaUp.svg"
                            title={content.items.plumeria}
                            width={250}
                            height={300}
                            top={-10}
                            left={210}
                        />
                    </Box>

                    <Box sx={{ position: 'absolute', bottom: -22, left: 0 }}>
                        <CorneredImage
                            src="AlOlyaDown.svg"
                            title={content.items.triangleCenter}
                            width={250}
                            height={240}
                            top={-10}
                            left={240}
                        />
                    </Box>

                    <Box sx={{ position: 'absolute', bottom: -22, right: 0 }}>
                        <CorneredImage
                            src="PlumeriaDown.svg"
                            title={content.items.palmResidence}
                            width={250}
                            height={160}
                            top={-10}
                            left={-10}
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default OurProjectsSection;
