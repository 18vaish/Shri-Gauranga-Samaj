"use client"
import React from 'react';
import Grid from '@mui/material/Grid';
import { AppBar, Box, Button, TextField, Toolbar, Typography } from '@mui/material';
import  { useRouter } from 'next/navigation';



function HomePage() {
    const router = useRouter();
const handleclickPassword=() => {
    router.push('/EnterNewPassword')
}
  return (
    <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh', backgroundColor: '#FEFCEA', padding: 0, margin: 0 }}>
      <Grid item>
        <AppBar position="fixed" sx={{ height: '20px' }}>
          <Toolbar sx={{ backgroundColor: '#81311A', height: '10px' }}>
          
          </Toolbar>
        </AppBar>
        <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '60vh' }}>
          <Grid item>
            <Box sx={{ }}>
              <Typography variant="h5" sx={{ color: 'black', fontWeight: 'bold', mb: 2, textAlign: 'center' }}> <b>Code Verification</b></Typography>
              <Typography sx={{ mb: 5, mr: 1 }}>Enter the verification code we just sent to your email address</Typography>
              <Typography sx={{ textAlign: 'center', color: 'green', mt: 10 }}>This email was sent successfully</Typography>
            </Box>
          </Grid>
          <Grid container justifyContent="center" alignItems="center" spacing={1}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1 }}>
              <TextField variant="outlined" sx={{ width: { xs: '55px', md: '55px' }, height: { xs: '55px', md: '55px' }, mr: 1, border: "3px solid", borderRadius: 2 }} />
              <TextField variant="outlined" sx={{ width: { xs: '55px', md: '55px' }, height: { xs: '55px', md: '55px' }, ml: 1, mr: 1, border: "3px solid", borderRadius: 2 }} />
              <TextField variant="outlined" sx={{ width: { xs: '55px', md: '55px' }, height: { xs: '55px', md: '55px' }, ml: 1, mr: 1, border: "3px solid", borderRadius: 2 }} />
              <TextField variant="outlined" sx={{ width: { xs: '55px', md: '55px' }, height: { xs: '55px', md: '55px' }, ml: 1, border: "3px solid", borderRadius: 2 }} />
              <TextField variant="outlined" sx={{ width: { xs: '55px', md: '55px' }, height: { xs: '55px', md: '55px' }, ml: 1, border: "3px solid", borderRadius: 2 }} />
            </Box>
            <Grid item xs={12}>
              <Typography sx={{ textAlign: 'center', mb: 5 }}>The email will be resent in 0:58</Typography>
              <Button   onClick={handleclickPassword} sx={{ display: 'block', margin: '0 auto', color: 'black', width: { xs: '300px', md: '400px' }, border: '3px solid', p: 1, borderRadius: 3, '&:hover': { backgroundColor: '#81311A', border: '3px solid', color: 'white' } }}>Send Code</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default HomePage;
