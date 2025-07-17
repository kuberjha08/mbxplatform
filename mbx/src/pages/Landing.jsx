import React from 'react';
import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import translations from '../global';
import PartnersCarousel from "../components/Landing/PartnersCarousel";
import LandingHero from "../components/Landing/LandingHero";
import StatsSection from "../components/Landing/StatsSection";
import OurProjectsSection from "../components/Landing/OurProjectsSection";
import CardCarousel from "../components/Landing/CardCarousal";
import ChairmanMessage from "../components/Landing/ChairmanMessage";
import Footer from "../components/Footer";

const Landing = () => {
    const { language } = useSelector(state => state.language);
    const langText = translations[language];

    return (
        <>
            <LandingHero />
            <PartnersCarousel />
            <StatsSection/>
            <OurProjectsSection/>
            <CardCarousel/>
            <ChairmanMessage/>
            <Footer/>
        </>
    );
};

export default Landing;
