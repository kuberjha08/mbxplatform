import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { useSelector } from 'react-redux';
import translations from '../../global';

const CardCarousel = () => {
    const carouselRef = useRef(null);
    const containerRef = useRef(null);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [isPaused, setIsPaused] = useState(false);
    const positionRef = useRef(0);

    const { language } = useSelector((state) => state.language);
    const langText = translations[language];
    const cards = langText.cards;

    useEffect(() => {
        const carousel = carouselRef.current;
        if (!carousel) return;

        const cardWidth = 300;
        const gap = 80;
        const spacing = 200;
        const totalWidth = (cardWidth + gap) * cards.length + spacing;
        let animationId;

        const animate = () => {
            if (!isPaused) {
                positionRef.current -= 1;
                if (positionRef.current <= -totalWidth) {
                    positionRef.current = 0;
                }
                carousel.style.transform = `translateX(${positionRef.current}px)`;
            }
            animationId = requestAnimationFrame(animate);
        };

        animationId = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationId);
    }, [isPaused, cards.length]);

    return (
        <Box sx={{
            width: '100%',
            overflow: 'hidden',
            py: 8,
            background: 'linear-gradient(135deg, #FFFFFF00 0%, #5484B1 300%)',
            position: 'relative'
        }}>
            <Box sx={{
                textAlign: 'left',
                mb: 6,
                color: 'common.white',
                pl: 20,
                pt: 10
            }}>
                <Typography variant="h4" sx={{
                    fontWeight: 'bold',
                    mb: 1,
                    color: '#193050',
                    fontFamily: 'IBM Plex Serif',
                }}>
                    {langText.whatSetsUsApart}
                </Typography>
                <Typography variant="subtitle1" sx={{
                    color: '#65748A',
                    fontFamily: 'Vazirmatn',
                    lineHeight: 1.6,
                    fontSize: '1.2rem',
                    fontWeight: 300,
                    pt: 0,
                    pb: 6
                }}>
                    {langText.whatSetsUsApartSubtext}
                </Typography>
            </Box>

            <Box ref={containerRef} sx={{
                width: '100%',
                overflow: 'hidden',
                position: 'relative',
                '&::before, &::after': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    width: '200px',
                    zIndex: 2,
                    pointerEvents: 'none'
                },
                '&::before': { left: 0 },
                '&::after': { right: 0 }
            }}>
                <CarouselContainer
                    ref={carouselRef}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    sx={{
                        paddingLeft: '200px',
                        paddingRight: '200px'
                    }}
                >
                    {[...cards, ...cards].map((card, index) => (
                        <Card
                            key={`${card.title}-${index}`}
                            onMouseEnter={() => { setHoveredIndex(index); setIsPaused(true); }}
                            onMouseLeave={() => { setHoveredIndex(null); setIsPaused(false); }}
                            $isHovered={hoveredIndex === index}
                        >
                            <CardImage
                                src={hoveredIndex === index ? card.hoverImage : card.normalImage}
                                alt={card.title}
                            />
                            {hoveredIndex === index && (
                                <CardContent>
                                    <Typography variant="h6" sx={{
                                        fontWeight: 'bold',
                                        mb: 1,
                                        color: 'common.white'
                                    }}>
                                        {card.title}
                                    </Typography>
                                    <Typography variant="body2" sx={{
                                        color: 'rgba(255, 255, 255, 0.9)'
                                    }}>
                                        {card.description}
                                    </Typography>
                                </CardContent>
                            )}
                        </Card>
                    ))}
                </CarouselContainer>
            </Box>
        </Box>
    );
};

const CarouselContainer = styled(Box)({
    display: 'flex',
    gap: '80px',
    willChange: 'transform',
    width: 'max-content',
});

const Card = styled(Box, {
    shouldForwardProp: (prop) => prop !== '$isHovered',
})(({ $isHovered }) => ({
    position: 'relative',
    width: '300px',
    height: '300px',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
    transform: $isHovered ? 'scale(1.05)' : 'scale(1)',
    boxShadow: $isHovered ? '0 8px 24px rgba(0,0,0,0.3)' : '0 4px 12px rgba(0,0,0,0.2)',
    flexShrink: 0,
    backgroundColor: 'white',
}));

const CardImage = styled('img')({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
});

const CardContent = styled(Box)({
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: '16px',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    color: '#ffffff',
});

export default CardCarousel;
