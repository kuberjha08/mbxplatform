import React from 'react';
import { Box, Typography, Button, Stack, Divider } from '@mui/material';

const Footer = () => {
    return (
        <Box
            sx={{
                position: 'relative',
                width: '100%',
                height: '400px',
                mt: 20,
                overflow: 'hidden',
            }}
        >
            {/* Background Image */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: 'url("/footerBackground.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    zIndex: 0,
                }}
            />

            {/* Gradient Overlay */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(to right, rgba(255,255,255,0.1) 0%, #5484B1 100%)',
                    zIndex: 1,
                }}
            />

            {/* Gradient Strip on Right */}
            <Box
                sx={{
                    position: 'absolute',
                    right: 0,
                    top: 0,
                    height: '100%',
                    width: '10%',
                    background: 'linear-gradient(to bottom, #193050, #5484B1)',
                    zIndex: 2,
                }}
            />

            {/* Blurred Content Container */}
            <Box
                sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: '15.65%',
                    width: '70%',
                    backgroundColor: 'rgba(255, 255, 255, 0)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    padding: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    color: '#fff',
                    zIndex: 3,
                }}
            >
                {/* Top Section - Main Links */}
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        mb: 2,
                    }}
                >
                    {/* Left - Logo */}
                    <Box>
                        <Box
                            component="img"
                            src="/logoHome.svg"
                            alt="Logo"
                            sx={{ width: 280, mb: 2 }}
                        />
                    </Box>

                    {/* Site Links */}
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                        }}
                    >
                        <Typography sx={{ fontWeight: 600, mb: 1, color: '#193050', fontSize: '20px' }}>
                            Site Links
                        </Typography>

                        <Stack spacing={1} sx={{ alignItems: 'flex-start' }}>
                            <Button
                                variant="text"
                                sx={{
                                    color: '#fff',
                                    textTransform: 'none',
                                    px: 0,
                                    minWidth: 'unset',       // prevent full width
                                    justifyContent: 'flex-start', // align text to left
                                    fontSize: '20px'

                                }}
                            >
                                Home
                            </Button>
                            <Button
                                variant="text"
                                sx={{
                                    color: '#fff',
                                    textTransform: 'none',
                                    px: 0,
                                    minWidth: 'unset',
                                    justifyContent: 'flex-start',
                                    fontSize: '20px'
                                }}
                            >
                                Investments
                            </Button>
                            <Button
                                variant="text"
                                sx={{
                                    color: '#fff',
                                    textTransform: 'none',
                                    px: 0,
                                    minWidth: 'unset',
                                    justifyContent: 'flex-start',
                                    fontSize: '20px'
                                }}
                            >
                                Real Estate
                            </Button>
                            <Button
                                variant="text"
                                sx={{
                                    color: '#fff',
                                    textTransform: 'none',
                                    px: 0,
                                    minWidth: 'unset',
                                    justifyContent: 'flex-start',
                                    fontSize: '20px'
                                }}
                            >
                                About Us
                            </Button>
                        </Stack>
                    </Box>


                    {/* Policy & Legal */}
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <Typography sx={{ fontWeight: 600, mb: 1, color:'#193050',fontSize: '20px'}}>Policy & Legal</Typography>
                        <Stack spacing={1} sx={{ alignItems: 'flex-start' }}>
                            <Button variant="text" sx={{ color: '#fff', textTransform: 'none', px: 0, fontSize: '20px'}}>Privacy Policy</Button>
                            <Button variant="text" sx={{ color: '#fff', textTransform: 'none', px: 0, fontSize: '20px' }}>Terms & Conditions</Button>
                        </Stack>
                    </Box>

                    {/* Get in Touch - Social Icons */}
                    <Box>
                        <Typography sx={{ fontWeight: 600, mb: 1, color: '#193050',fontSize: '20px' }}>Get in Touch</Typography>
                        <Stack direction="row" spacing={2}>
                            <a
                                href="https://www.linkedin.com/in/kuberjha/" // Replace with actual link
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Box
                                    component="img"
                                    src="/linkedin.svg"
                                    alt="LinkedIn"
                                    sx={{ width: 24, height: 24, cursor: 'pointer' }}
                                />
                            </a>

                            <a
                                href="https://wa.me/918708574843" // Replace with actual WhatsApp number
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Box
                                    component="img"
                                    src="/whatsapp.svg"
                                    alt="WhatsApp"
                                    sx={{ width: 24, height: 24, cursor: 'pointer' }}
                                />
                            </a>

                            <a
                                href="https://www.instagram.com/kuber_jha" // Replace with actual Insta link
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Box
                                    component="img"
                                    src="/insta.svg"
                                    alt="Instagram"
                                    sx={{ width: 24, height: 24, cursor: 'pointer' }}
                                />
                            </a>
                        </Stack>
                    </Box>

                </Box>

                {/* Divider and Copyright */}
                <Divider sx={{ backgroundColor: 'rgba(255,255,255,0.3)', mb: 1 }} />
                <Typography sx={{ color: '#ccc', fontSize: '18px', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
                    Copyright © 2025 MXB | All Rights Reserved
                </Typography>
            </Box>
        </Box>
    );
};

export default Footer;
