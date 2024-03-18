import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

function VerificationPage() {
    return (
        <Box sx={{backgroundColor:'#FEFCEA', height:'100vh',width:'100%',display:'flex'}}>

            <Box sx={{ width: '100%', height: '5vh', backgroundColor: '#81311A', justifyContent: 'center', display: 'flex' }}>

                <Box sx={{ display: 'flex', width: '500px', height: '500px', justifyContent: 'center', marginTop: '10%' }}>
                    <Box
                        sx={{
                            backgroundColor: '#FEFCEA',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Typography variant="h5" sx={{ color: 'black', fontWeight: 'bold', mb: 2 }}> <b>Create New Password</b></Typography>
                        <Typography sx={{ mb: 10, }}>Your new password must be unique from those previously used.</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 2 }}>
                                <Box sx={{ width: '350px', mb: 1 }}>
                                    <TextField placeholder="New Password" variant="outlined" size="small"sx={{ width: '100%', border: "2px solid", borderRadius: 2 }} />
                                    
                                </Box>
                                <Box sx={{ width: '350px' }}>
                                    <TextField placeholder="Confirm Password"variant="outlined" size="small"sx={{ width: '100%', border: "2px solid", borderRadius: 2 }} />
                                </Box>
                            </Box>
                            <Button  sx={{ color: 'black', width: '350px', border: '2px solid', p: 1, borderRadius: 2,mt:10 ,'&:hover': { backgroundColor: '#81311A', border: '3px solid', color: 'white' } }}>Reset Password</Button>
                       
                       
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box >
    );
}

export default VerificationPage;
