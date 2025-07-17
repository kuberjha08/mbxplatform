import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

const CardCarousel = () => {
    const carouselRef = useRef(null);
    const containerRef = useRef(null);
    const [hoveredCard, setHoveredCard] = useState(null);
    const [isPaused, setIsPaused] = useState(false);
    const positionRef = useRef(0); // Track position outside of animation

    // Card data
    const cards = [
        {
            id: 1,
            title: "Modern amenities",
            description: "Committed to building purposeful infrastructure.",
            normalImage: "Card1.svg",
            hoverImage: "Card1Hover.svg"
        },
        {
            id: 2,
            title: "Latest technology",
            description: "Innovative solutions for modern needs.",
            normalImage: "Card2.svg",
            hoverImage: "Card2Hover.svg"
        },
        {
            id: 3,
            title: "Sustainable development",
            description: "Environmentally conscious building practices.",
            normalImage: "Card3.svg",
            hoverImage: "Card3Hover.svg"
        },
        {
            id: 4,
            title: "Quality materials",
            description: "Only the best materials for lasting structures.",
            normalImage: "Card4.svg",
            hoverImage: "Card4Hover.svg"
        },
        {
            id: 5,
            title: "Expert team",
            description: "Skilled professionals delivering excellence.",
            normalImage: "Card5.svg",
            hoverImage: "Card5Hover.svg"
        }
    ];

    // Auto-scroll animation with proper spacing
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

        return () => {
            cancelAnimationFrame(animationId);
        };
    }, [isPaused]);

    const handleMouseEnter = (id) => {
        setHoveredCard(id);
        setIsPaused(true);
    };

    const handleMouseLeave = () => {
        setHoveredCard(null);
        setIsPaused(false);
        // Don't reset position here - it will continue from current position
    };

    return (
        <Box sx={{
            width: '100%',
            overflow: 'hidden',
            py: 8,
            background: 'linear-gradient(135deg, #FFFFFF00 0%, #5484B1 300%)', // Gradient background
            position: 'relative'
        }}>
            <Box sx={{
                textAlign: 'left',
                mb: 6,
                color: 'common.white', // White text for better contrast
                pl:20,
                pt:10
            }}>
                <Typography variant="h4" sx={{
                    fontWeight: 'bold',
                    mb: 1,
                    color: '#193050', // Inherit white color
                    fontFamily:'IBM Plex Serif',
                }}>
                    What Sets Us Apart
                </Typography>
                <Typography variant="subtitle1" sx={{
                    color: '#65748A',
                    fontFamily:'Vazirmatn',
                    lineHeight: 1.6,
                    fontSize: '1.2rem',
                    fontWeight: 300,
                    pt:0,
                    pb:6
                }}>
                    Committed to building purposeful infrastructure.
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
                '&::before': {
                    left: 0,
                    // background: 'linear-gradient(90deg, rgba(103, 126, 234, 1) 0%, rgba(103, 126, 234, 0) 100%)' // Matches gradient
                },
                '&::after': {
                    right: 0,
                    // background: 'linear-gradient(270deg, rgba(118, 75, 162, 1) 0%, rgba(118, 75, 162, 0) 100%)' // Matches gradient
                }
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
                            key={`${card.id}-${index}`}
                            onMouseEnter={() => handleMouseEnter(card.id)}
                            onMouseLeave={handleMouseLeave}
                            $isHovered={hoveredCard === card.id}
                        >
                            <CardImage
                                src={hoveredCard === card.id ? card.hoverImage : card.normalImage}
                                alt={card.title}
                            />
                            {hoveredCard === card.id && (
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

// Styled components
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
    backgroundColor: 'white', // Card background
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