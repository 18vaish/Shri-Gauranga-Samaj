"use client"
import React from 'react';
import { Box, Button, Typography, useMediaQuery } from '@mui/material';
import { useRouter } from 'next/navigation';
import BookCard from '../components/BookCard';
import FilterBar from '../components/FilterBar';
import ImageSlider from '../components/ImageSlider';
import RESVisitedArticle from '../components/TopicTwo';
import TopicTwo from '../components/TopicTwo';

const BookHomePage = () => {
    const router = useRouter();
    const matches = useMediaQuery('(min-width:600px)');

    const handleClickBookletCardsPage = () => {
        router.push('/BookletCardsPage');
    };

    return (
        <Box sx={{ backgroundColor: "#FEFCEA" }}>
            <Typography variant='h6' p={2} fontSize="small">
                <b> Home /</b> Articles
            </Typography>
          
            <FilterBar />
            <Box display="flex" justifyContent="center" gap={5} flexWrap="wrap" >
                <Box display="flex" flexDirection="column">
                    <Section title="Featured" />
                    <Section title="Popular" />
                    <Section title="Recent" />
                    <Box display="flex" alignItems="center" justifyContent="center" mt={matches ? 5 : 5}>
                        <Button variant="outlined" onClick={handleClickBookletCardsPage} sx={{
                            border: "1px solid black",
                            color: "white",
                            backgroundColor: "#81311A",
                            p: 1, mb: 2,
                            borderRadius: 3,
                            width: "110px",
                            fontWeight: "bold",
                            '&:hover': {
                                backgroundColor: "#81311A",
                                border: "2px solid black"
                            }
                        }}>
                            Load More
                        </Button>
                    </Box>
                </Box>
                <Box display="flex" flexDirection="column" gap={10} mt={matches ? 5 : 0}>
                    <TopicTwo />
                    <RESVisitedArticle />
                </Box>
            </Box>
           
        </Box>
    );
};

const Section = ({ title }: { title: string }) => (
    <Box>
        <Typography variant="h6" sx={{ fontWeight: "bold", justifyContent:'flex-start' ,ml:2}}>
            {title}
        </Typography>
        <Box display="flex" justifyContent="center" gap={5} flexWrap="wrap" m={2}>
            <BookCard />
            <BookCard />
            <BookCard />
        </Box>
    </Box>
);


export default BookHomePage;
