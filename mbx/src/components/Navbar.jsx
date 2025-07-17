import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    Box,
    Button,
    Menu,
    MenuItem,
    IconButton,
    useMediaQuery,
    useTheme
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import translations from '../global';
import {setLanguage} from "../store/actions/languageActions";

const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [mobileMenuAnchorEl, setMobileMenuAnchorEl] = useState(null);
    const { language } = useSelector(state => state.language);
    const dispatch = useDispatch();
    const langText = translations[language];

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md')); // Adjust breakpoint as needed

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (lang) => {
        setAnchorEl(null);
        if (lang) dispatch(setLanguage(lang));
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMenuAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMenuAnchorEl(null);
    };

    const navLinks = [
        { path: "/", text: langText.landing },
        { path: "/investments", text: langText.investments },
        { path: "/real-estate", text: langText.realEstate },
        { path: "/career", text: langText.career },
        { path: "/contact", text: langText.contact },
        { path: "/about", text: langText.about }
    ];

    return (
        <AppBar
            position="fixed"
            elevation={2}
            sx={{
                backdropFilter: 'blur(2px)',
                backgroundColor: 'rgba(36, 41, 52, 0.25)',
                WebkitBackdropFilter: 'blur(30px)', // for Safari
                boxShadow: 'none',
                p: 1,
                ph: 2
            }}
        >
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                {/* Logo Left */}
                <Box component={Link} to="/">
                    <img src="/logoHome.svg" alt="logo" height="40" />
                </Box>

                {/* Nav + Language */}
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                    {!isMobile ? (
                        <>
                            {navLinks.map((link) => (
                                <Button
                                    key={link.path}
                                    component={Link}
                                    to={link.path}
                                    color="inherit"
                                >
                                    {link.text}
                                </Button>
                            ))}

                            <Button onClick={handleClick} color="inherit">
                                <img src="/language.svg" alt="lang" height="20" style={{ marginRight: 8 }} />
                                {language.toUpperCase()}
                            </Button>

                            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => handleClose()}>
                                <MenuItem onClick={() => handleClose('en')}>EN</MenuItem>
                                <MenuItem onClick={() => handleClose('ar')}>AR</MenuItem>
                            </Menu>
                        </>
                    ) : (
                        <>
                            <Button onClick={handleClick} color="inherit">
                                <img src="/language.svg" alt="lang" height="20" style={{ marginRight: 8 }} />
                                {language.toUpperCase()}
                            </Button>

                            <IconButton
                                edge="end"
                                color="inherit"
                                aria-label="menu"
                                onClick={handleMobileMenuOpen}
                                sx={{ p: 0 }} // Optional: adjust padding as needed
                            >
                                <img
                                    src="Hamburger.svg" // Path to your SVG file
                                    alt="menu"
                                    height="24" // Adjust size as needed
                                    width="24"  // Adjust size as needed
                                />
                            </IconButton>

                            <Menu
                                anchorEl={mobileMenuAnchorEl}
                                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                                keepMounted
                                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                                open={Boolean(mobileMenuAnchorEl)}
                                onClose={handleMobileMenuClose}
                            >
                                {navLinks.map((link) => (
                                    <MenuItem
                                        key={link.path}
                                        component={Link}
                                        to={link.path}
                                        onClick={handleMobileMenuClose}
                                    >
                                        {link.text}
                                    </MenuItem>
                                ))}
                            </Menu>
                        </>
                    )}
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;