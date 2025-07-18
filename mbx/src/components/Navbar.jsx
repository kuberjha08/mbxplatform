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
import { setLanguage } from "../store/actions/languageActions";

const Navbar = () => {
    const [mobileMenuAnchorEl, setMobileMenuAnchorEl] = useState(null);
    const [aboutAnchorEl, setAboutAnchorEl] = useState(null); // for About dropdown

    const { language } = useSelector(state => state.language);
    const dispatch = useDispatch();
    const langText = translations[language];

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const handleLanguageToggle = () => {
        dispatch(setLanguage(language === 'en' ? 'ar' : 'en'));
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMenuAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMenuAnchorEl(null);
    };

    const handleAboutOpen = (event) => {
        setAboutAnchorEl(event.currentTarget);
    };

    const handleAboutClose = () => {
        setAboutAnchorEl(null);
    };

    const navLinks = [
        { path: "/investments", text: langText.investments },
        { path: "/real-estate", text: langText.realEstate },
        { path: "/career", text: langText.career }
        // 'About' handled separately
    ];

    return (
        <AppBar
            position="fixed"
            elevation={2}
            sx={{
                backdropFilter: 'blur(2px)',
                backgroundColor: 'rgba(36, 41, 52, 0.25)',
                WebkitBackdropFilter: 'blur(30px)',
                boxShadow: 'none',
                p: 1
            }}
        >
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                {/* Logo */}
                <Box component={Link} to="/">
                    <img src="/logoHome.svg" alt="logo" height="40" />
                </Box>

                {/* Desktop Menu */}
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                    {!isMobile ? (
                        <>
                            {navLinks.map((link) => (
                                <Button
                                    key={link.path}
                                    component={Link}
                                    to={link.path}
                                    color="inherit"
                                    sx={{ textTransform: 'none',fontSize:'20px' }} // no uppercase
                                >
                                    {link.text}
                                </Button>
                            ))}

                            {/* About with Dropdown */}
                            <Button
                                color="inherit"
                                sx={{ textTransform: 'none', display: 'flex', alignItems: 'center',fontSize:'20px' }}
                                onClick={handleAboutOpen}
                            >
                                {langText.about}
                                <img
                                    src={aboutAnchorEl ? "Caret_Up_SM.svg" : "Caret_Down_SM.svg"}
                                    alt="arrow"
                                    height="16"
                                    style={{ marginLeft: 6 }}
                                />
                            </Button>
                            <Menu
                                anchorEl={aboutAnchorEl}
                                open={Boolean(aboutAnchorEl)}
                                onClose={handleAboutClose}
                            >
                                <MenuItem
                                    component={Link}
                                    to="/about"
                                    onClick={handleAboutClose}
                                >
                                    {langText.about}
                                </MenuItem>
                                <MenuItem
                                    component={Link}
                                    to="/contact"
                                    onClick={handleAboutClose}
                                >
                                    {langText.contact}
                                </MenuItem>
                            </Menu>


                            {/* Language Toggle */}
                            <Button
                                onClick={handleLanguageToggle}
                                color="inherit"
                                sx={{ textTransform: 'none', ml:16,fontSize:'20px' }}
                            >
                                <img src="/language.svg" alt="lang" height="20" style={{ marginRight: 8 }} />
                                {language === 'en' ? 'AR' : 'EN'}
                            </Button>
                        </>
                    ) : (
                        <>
                            <Button
                                onClick={handleLanguageToggle}
                                color="inherit"
                                sx={{ textTransform: 'none' }}
                            >
                                <img src="/language.svg" alt="lang" height="20" style={{ marginRight: 8 }} />
                                {language === 'en' ? 'ar' : 'en'}
                            </Button>

                            <IconButton
                                edge="end"
                                color="inherit"
                                onClick={handleMobileMenuOpen}
                                sx={{ p: 0 }}
                            >
                                <img src="Hamburger.svg" alt="menu" height="24" width="24" />
                            </IconButton>

                            <Menu
                                anchorEl={mobileMenuAnchorEl}
                                open={Boolean(mobileMenuAnchorEl)}
                                onClose={handleMobileMenuClose}
                                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                                keepMounted
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
                                <MenuItem
                                    component={Link}
                                    to="/about"
                                    onClick={handleMobileMenuClose}
                                >
                                    {langText.about}
                                </MenuItem>
                                <MenuItem
                                    component={Link}
                                    to="/contact"
                                    onClick={handleMobileMenuClose}
                                >
                                    {langText.contact}
                                </MenuItem>
                            </Menu>
                        </>
                    )}
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
