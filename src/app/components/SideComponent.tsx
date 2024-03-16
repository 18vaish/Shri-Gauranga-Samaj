import React from 'react';
import { Grid, Stack, Typography, Link } from '@mui/material';

const topics = [
    'Parivāra Āṅgana',
    'Nāṭaka Mañca',
    'Gou Sevā',
    'Paśu Rakṣ',
    'Utsava Maṅḍalī',
    'Khela',
    'Yuvā Śakti',
    'Gurukula',
    'Śiśu Maṅgal',
    'Bāla Vikāsa',
    'Bālikā Praśikṣaṇa'
];

const SideComponent = () => {
    return (
        <div>
            <Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="column" spacing={-0.7} sx={{ pl: 2, mt: -2 }}>
                        <Typography variant="h6" sx={{ marginBottom: '10px', fontWeight: 'bold', fontFamily: 'Times New Roman' }}>
                    Topic
                        </Typography>
                        {topics.map((topic, index) => (
                            <Typography key={index}>
                                <Link href={`#${topic}`} sx={{ textDecoration: 'none', color: 'black',fontWeight: 'bold' }}>
                                    {'o '}
                                    {topic}
                                </Link>
                            </Typography>
                        ))}
                    </Stack>
                </Grid>
            </Grid>
        </div>
    );
};

export default SideComponent;
