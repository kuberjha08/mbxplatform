import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Typography, Button, Stack, Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import translations from '../global'; // adjust path as needed

const Footer = () => {
    const { language } = useSelector(state => state.language);
    const langText = translations[language]?.footer || translations.en.footer;

    const navigate = useNavigate();

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
            {/* Background Layers */}
            <Box sx={backgroundImageStyle} />
            <Box sx={gradientOverlayStyle} />
            <Box sx={rightStripStyle} />

            {/* Blurred Content */}
            <Box sx={blurContainerStyle}>
                <Box sx={topSectionStyle}>
                    {/* Logo */}
                    <Box>
                        <Box
                            component="img"
                            src="/logoHome.svg"
                            alt="Logo"
                            sx={{ width: 280, mb: 2 }}
                        />
                    </Box>

                    {/* Site Links */}
                    <Box sx={columnStyle}>
                        <Typography sx={headingStyle}>
                            {langText.siteLinks}
                        </Typography>
                        <Stack spacing={1}>
                            <Button onClick={() => navigate('/')} sx={buttonStyle}>{langText.home}</Button>
                            <Button onClick={() => navigate('/investments')} sx={buttonStyle}>{langText.investments}</Button>
                            <Button onClick={() => navigate('/real-estate')} sx={buttonStyle}>{langText.realEstate}</Button>
                            <Button onClick={() => navigate('/about')} sx={buttonStyle}>{langText.aboutUs}</Button>
                        </Stack>
                    </Box>

                    {/* Policy & Legal */}
                    <Box sx={columnStyle}>
                        <Typography sx={headingStyle}>
                            {langText.policyLegal}
                        </Typography>
                        <Stack spacing={1}>
                            <Button onClick={() => navigate('/privacy-policy')} sx={buttonStyle}>{langText.privacyPolicy}</Button>
                            <Button onClick={() => navigate('/terms')} sx={buttonStyle}>{langText.terms}</Button>
                        </Stack>
                    </Box>

                    {/* Get in Touch */}
                    <Box>
                        <Typography sx={headingStyle}>{langText.getInTouch}</Typography>
                        <Stack direction="row" spacing={2}>
                            <a href="https://www.linkedin.com/in/kuberjha/" target="_blank" rel="noopener noreferrer">
                                <Box component="img" src="/linkedin.svg" alt="LinkedIn" sx={iconStyle} />
                            </a>
                            <a href="https://wa.me/918708574843" target="_blank" rel="noopener noreferrer">
                                <Box component="img" src="/whatsapp.svg" alt="WhatsApp" sx={iconStyle} />
                            </a>
                            <a href="https://www.instagram.com/kuber_jha" target="_blank" rel="noopener noreferrer">
                                <Box component="img" src="/insta.svg" alt="Instagram" sx={iconStyle} />
                            </a>
                        </Stack>
                    </Box>
                </Box>

                {/* Divider & Copyright */}
                <Divider sx={{ backgroundColor: 'rgba(255,255,255,0.3)', mb: 1 }} />
                <Typography sx={{
                    color: '#ccc',
                    fontSize: '18px',
                    fontFamily: 'Arial, sans-serif',
                    textAlign: 'center'
                }}>
                    {langText.copyright}
                </Typography>
            </Box>
        </Box>
    );
};

export default Footer;

// Styles
const backgroundImageStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: 'url("/footerBackground.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    zIndex: 0,
};

const gradientOverlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(to right, rgba(255,255,255,0.1) 0%, #5484B1 100%)',
    zIndex: 1,
};

const rightStripStyle = {
    position: 'absolute',
    right: 0,
    top: 0,
    height: '100%',
    width: '10%',
    background: 'linear-gradient(to bottom, #193050, #5484B1)',
    zIndex: 2,
};

const blurContainerStyle = {
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
};

const topSectionStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    mb: 2,
};

const columnStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
};

const headingStyle = {
    fontWeight: 600,
    mb: 1,
    color: '#193050',
    fontSize: '20px',
};

const buttonStyle = {
    color: '#fff',
    textTransform: 'none',
    px: 0,
    minWidth: 'unset',
    justifyContent: 'flex-start',
    fontSize: '20px',
};

const iconStyle = {
    width: 27,
    height: 27,
    cursor: 'pointer',
};
