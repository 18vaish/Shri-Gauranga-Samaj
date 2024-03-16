import React from 'react';
import Carousel from 'react-material-ui-carousel';
import ShareIcon from '@mui/icons-material/Share';
import { useRouter } from 'next/navigation';
import { Grid, Box, Typography, Card, CardMedia, CardContent, IconButton } from '@mui/material'; // Import IconButton from MUI

const CardSlider = () => {
    const router = useRouter();
    const handleCardClick = () => {
        router.push('/ArticleDetails');
    };
    const handleShareClick = (event: { stopPropagation: () => void; }) => {

        // Add your share logic here
        event.stopPropagation();
        // Navigate to the share page when the share icon is clicked
        window.location.href = "Share";
    };
    const booklets = [
        { name: 'RadhaKrishna are one soul', image: '/krishna.jpg', information: 'The nature of the KC is such that it can help us to understand ...' },
        { name: 'RadhaKrishna are one soul', image: '/krishna.jpg', information: 'The nature of the KC is such that it can help us to understand ...' },
       
        { name: 'RadhaKrishna are one soul', image: '/krishna.jpg', information: 'The nature of the KC is such that it can help us to understand ...' },

        { name: 'RadhaKrishna are one soul', image: '/krishna.jpg', information: 'The nature of the KC is such that it can help us to understand ...' },

        { name: 'RadhaKrishna are one soul', image: '/krishna.jpg', information: 'The nature of the KC is such that it can help us to understand ...' },

        { name: 'RadhaKrishna are one soul', image: '/krishna.jpg', information: 'The nature of the KC is such that it can help us to understand ...' },
        
        { name: 'RadhaKrishna are one soul', image: '/krishna.jpg', information: 'The nature of the KC is such that it can help us to understand ...' },
        
        { name: 'RadhaKrishna are one soul', image: '/krishna.jpg', information: 'The nature of the KC is such that it can help us to understand ...' },
        
        { name: 'RadhaKrishna are one soul', image: '/krishna.jpg', information: 'The nature of the KC is such that it can help us to understand ...' },
        // Add other booklet objects here
    ];
    return (
        <Grid item xs={12} sx={{ padding: 2 }}>
            <Box sx={{ height: 400, width: '100%', backgroundColor: '#FFF0F0' }}>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Typography variant="h6" sx={{ color: 'black', paddingTop: '50px', fontWeight: "bold" }}>You may also like</Typography>
                </Box>
                <Carousel
                    autoPlay={false}
                    indicators={false}
                    animation="slide"
                    navButtonsAlwaysVisible={true}
                    swipe
                >
                    {[...Array(Math.ceil(booklets.length / 3))].map((_, index) => (
                        <Box key={index} sx={{ display: 'flex', justifyContent: 'center', paddingTop: '20px', gap: 5, mb: 5 }}>
                            {booklets.slice(index * 3, (index + 1) * 3).map((booklet, i) => (
                                <Card key={i} onClick={handleCardClick} sx={{
                                    maxWidth: 230,
                                    width: '100%',
                                    maxHeight: 244,
                                    borderRadius: 2,
                                    backgroundColor: '#FCDFA0',
                                    transition: 'transform 0.3s',
                                    '&:hover': {
                                        transform: 'scale(1.03)', // Increase size on hover
                                    },
                                }}>
                                    <CardMedia
                                        component="img"
                                        loading="lazy"
                                        height={100}
                                        image={booklet.image}
                                        alt={booklet.name}
                                    />
                                    <CardContent>
                                        <Typography fontSize="large" fontWeight="bold" gutterBottom sx={{ mt: -2, color: 'black' }}>
                                            {booklet.name}
                                        </Typography>
                                        <Typography variant="body2" color="black" sx={{ fontSize: '0.8rem' }}>
                                            {booklet.information}
                                        </Typography>
                                    </CardContent>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: -5 }}>
                                        <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.6rem' }}>
                                            {new Date().toLocaleDateString()} {/* Dynamic date */}
                                        </Typography>
                                        <IconButton aria-label="share" onClick={handleShareClick}>
                                            <ShareIcon sx={{ color: '#562000' }} />
                                        </IconButton>
                                    </div>
                                </Card>
                            ))}
                        </Box>
                    ))}
                </Carousel>
            </Box>
        </Grid>
    );
};

export default CardSlider;
