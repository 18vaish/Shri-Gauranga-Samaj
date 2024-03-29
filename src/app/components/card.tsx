import React from 'react';
import { Card, CardContent, CardMedia, Typography, IconButton } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';

const MediaCard = () => {
    const isMobile = typeof window !== 'undefined' && window.matchMedia('(max-width:600px)').matches;

    const handleCardClick = () => {
        // Navigate to the desired page when the card is clicked
        window.location.href = "/ArticleDetails";
    };

    const handleShareClick = (event: { stopPropagation: () => void; }) => {
        // Prevent the card click event from propagating when the share icon is clicked
        event.stopPropagation();
        // Navigate to the share page when the share icon is clicked
        window.location.href = "Share";
    };

    return (
        <div onClick={handleCardClick} style={{ cursor: 'pointer' }}>
            <Card
                sx={{
                    maxWidth: 230,
                    width: isMobile ? '100%' : 'auto',
                    maxHeight: 244,
                    borderRadius: 2,
                    backgroundColor: '#FCDFA0',
                    transition: 'transform 0.3s',
                    '&:hover': {
                        transform: 'scale(1.03)', // Increase size on hover
                    },
                }}
            >
                <CardMedia
                    component="img"
                    height="80"
                    image="Krishnaa.jpg" // Consider making this dynamic
                    alt="RadhaKrishna are one soul"
                    sx={{ borderRadius: 2 }}
                />
                <CardContent>
                    <Typography fontSize="large" fontWeight="bold" gutterBottom sx={{ mt: '-0.5em',  color: 'black' }}>
                        RadhaKrishna are one soul
                    </Typography>
                    <Typography variant="body2" color="black" sx={{ fontSize: '0.8rem' }}>
                        The nature of the KC is such that it can help us to understand...
                    </Typography>
                </CardContent>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '-1em' }}>
                    <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.6rem' ,ml:1}}>
                        {new Date().toLocaleDateString()} 
                    </Typography>
                    <IconButton aria-label="share" onClick={handleShareClick}>
                        <ShareIcon sx={{ color: '#562000' }} />
                    </IconButton>
                </div>
            </Card>
        </div>
    );
};

export default MediaCard;
