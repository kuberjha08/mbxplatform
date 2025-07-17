import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    Box,
    Button,
    Menu,
    MenuItem
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import translations from '../global';
import {setLanguage} from "../store/actions/languageActions";

const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const { language } = useSelector(state => state.language);
    const dispatch = useDispatch();
    const langText = translations[language];

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (lang) => {
        setAnchorEl(null);
        if (lang) dispatch(setLanguage(lang));
    };

    return (
        <AppBar
            position="fixed"
            elevation={2}
            sx={{
                backdropFilter: 'blur(2px)',
                backgroundColor: 'rgba(36, 41, 52, 0.25)',
                WebkitBackdropFilter: 'blur(30px)', // for Safari
                boxShadow: 'none',
                p:1,
                ph:2
            }}
        >
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                {/* Logo Left */}
                <Box component={Link} to="/">
                    <img src="/logoHome.svg" alt="logo" height="40" />
                </Box>

                {/* Nav + Language */}
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                    <Button component={Link} to="/" color="inherit">{langText.landing}</Button>
                    <Button component={Link} to="/investments" color="inherit">{langText.investments}</Button>
                    <Button component={Link} to="/real-estate" color="inherit">{langText.realEstate}</Button>
                    <Button component={Link} to="/career" color="inherit">{langText.career}</Button>
                    <Button component={Link} to="/contact" color="inherit">{langText.contact}</Button>
                    <Button component={Link} to="/about" color="inherit">{langText.about}</Button>

                    {/* Language Button */}
                    <Button onClick={handleClick} color="inherit">
                        <img src="/language.svg" alt="lang" height="20" style={{ marginRight: 8 }} />
                        {langText.language}
                    </Button>
                    <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => handleClose()}>
                        <MenuItem onClick={() => handleClose('en')}>English</MenuItem>
                        <MenuItem onClick={() => handleClose('hi')}>हिंदी</MenuItem>
                    </Menu>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
