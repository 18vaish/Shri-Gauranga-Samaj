"use client"
import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { Stepper, Step, StepLabel, Typography } from '@mui/material';
import router, { useRouter } from 'next/navigation';


const MultiForm: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = ['Tell us about you!', 'Let’s personalize it for you!', 'Final step!'];
  const router = useRouter();

  const handleNextStep = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };
  const handleclicklogin = () => {
    router.push('/CreateAccount')
}

  const handlePrevStep = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };
  const renderForm = (step: number) => {
    switch (step) {
      case 0:
        return (
          <>
          <Grid item style={{ width: '90%', display: 'flex', justifyContent: 'center' }}>
          <Paper style={{ width: '90%', height: '150px', backgroundColor: '#81311A', borderRadius: '10px', display: 'flex', flexDirection: 'column', paddingBottom: '12px' }}>
                  <Typography variant="body1" style={{ marginBottom: '20px', textAlign: 'left', paddingTop: '10px',color:'white', fontWeight:'bold' ,paddingLeft:'12px' }}>What is your Age?</Typography>
                
                  <Grid container direction="row" spacing={1} style={{ width: '100%', justifyContent: 'flex-start', paddingLeft: '15px' }}>
                    <Grid item>
                      <Button color="primary" style={{ backgroundColor: '#EFEFEF', borderRadius: '20px', height: '90%', width: '50%',  padding: '5px',color:'black' }}>15-30</Button>
                    </Grid>

                    <Grid item>
                      <Button color="secondary" style={{ backgroundColor: '#EFEFEF', borderRadius: '20px', height: '90%', width: '50%',  padding: '5px',color:'black'}}>15-30</Button>
                    </Grid>
                    <Grid item>
                      <Button color="secondary" style={{ backgroundColor: '#EFEFEF', borderRadius: '20px', height: '90%', width: '50%',  padding: '5px',color:'black' }}>15-30</Button>
                    </Grid>
                  </Grid>
                  <Grid container direction="row" spacing={1} style={{ width: '100%', justifyContent: 'flex-start', padding: '15px' }}>
                    <Grid item>
                      <Button color="primary" style={{ backgroundColor: '#EFEFEF', borderRadius: '20px', height: '90%', width: '50%',  padding: '5px',color:'black' }}>15-30</Button>
                    </Grid>

                    <Grid item>
                      <Button color="secondary" style={{ backgroundColor: '#EFEFEF', borderRadius: '20px', height: '90%', width: '50%',  padding: '5px',color:'black' }}>15-30</Button>
                    </Grid>
                    <Grid item>
                      <Button color="secondary" style={{ backgroundColor: '#EFEFEF', borderRadius: '20px', height: '90%', width: '50%',  padding: '5px',color:'black' }}>15-30</Button>
                    </Grid>
                  </Grid>



                </Paper>
                
              </Grid>
              <Grid item style={{ width: '90%', display: 'flex', justifyContent: 'center' }}>
                <Paper style={{ width: '90%', height: '150px', backgroundColor: '#81311A', borderRadius: '10px', display: 'flex', flexDirection: 'column', paddingBottom: '12px' }}>
                  <Typography variant="body1" style={{ marginBottom: '20px', textAlign: 'left', paddingTop: '10px',color:'white', fontWeight:'bold' ,paddingLeft:'12px' }}>What is your Language?</Typography>
                  <Grid container direction="row" spacing={1} style={{ width: '100%', justifyContent: 'flex-start', paddingLeft: '15px' }}>
                    <Grid item>
                      <Button color="primary" style={{ backgroundColor: '#EFEFEF', borderRadius: '20px', height: '90%', width: '50%',  padding: '5px',color:'black' }}>15-30</Button>
                    </Grid>

                    <Grid item>
                      <Button color="secondary" style={{ backgroundColor: '#EFEFEF', borderRadius: '20px', height: '90%', width: '50%',  padding: '5px',color:'black'}}>15-30</Button>
                    </Grid>
                    <Grid item>
                      <Button color="secondary" style={{ backgroundColor: '#EFEFEF', borderRadius: '20px', height: '90%', width: '50%',  padding: '5px',color:'black' }}>15-30</Button>
                    </Grid>
                  </Grid>
                  <Grid container direction="row" spacing={1} style={{ width: '100%', justifyContent: 'flex-start', padding: '15px' }}>
                    <Grid item>
                      <Button color="primary" style={{ backgroundColor: '#EFEFEF', borderRadius: '20px', height: '90%', width: '50%',  padding: '5px',color:'black' }}>15-30</Button>
                    </Grid>

                    <Grid item>
                      <Button color="secondary" style={{ backgroundColor: '#EFEFEF', borderRadius: '20px', height: '90%', width: '50%',  padding: '5px',color:'black' }}>15-30</Button>
                    </Grid>
                    <Grid item>
                      <Button color="secondary" style={{ backgroundColor: '#EFEFEF', borderRadius: '20px', height: '90%', width: '50%',  padding: '5px',color:'black' }}>15-30</Button>
                    </Grid>
                  </Grid>



                </Paper>
                
              </Grid>
              <Grid item style={{ width: '90%', display: 'flex', justifyContent: 'center' }}>
              <Paper style={{ width: '90%', height: '150px', backgroundColor: '#81311A', borderRadius: '10px', display: 'flex', flexDirection: 'column', paddingBottom: '12px' }}>
                  <Typography variant="body1" style={{ marginBottom: '20px', textAlign: 'left', paddingTop: '10px',color:'white', fontWeight:'bold' ,paddingLeft:'12px' }}>What is your College Name?</Typography>
                  <Grid container direction="row" spacing={1} style={{ width: '100%', justifyContent: 'flex-start', paddingLeft: '15px' }}>
                    <Grid item>
                      <Button color="primary" style={{ backgroundColor: '#EFEFEF', borderRadius: '20px', height: '90%', width: '50%',  padding: '5px',color:'black' }}>15-30</Button>
                    </Grid>

                    <Grid item>
                      <Button color="secondary" style={{ backgroundColor: '#EFEFEF', borderRadius: '20px', height: '90%', width: '50%',  padding: '5px',color:'black'}}>15-30</Button>
                    </Grid>
                    <Grid item>
                      <Button color="secondary" style={{ backgroundColor: '#EFEFEF', borderRadius: '20px', height: '90%', width: '50%',  padding: '5px',color:'black' }}>15-30</Button>
                    </Grid>
                  </Grid>
                  <Grid container direction="row" spacing={1} style={{ width: '100%', justifyContent: 'flex-start', padding: '15px' }}>
                    <Grid item>
                      <Button color="primary" style={{ backgroundColor: '#EFEFEF', borderRadius: '20px', height: '90%', width: '50%',  padding: '5px',color:'black' }}>15-30</Button>
                    </Grid>

                    <Grid item>
                      <Button color="secondary" style={{ backgroundColor: '#EFEFEF', borderRadius: '20px', height: '90%', width: '50%',  padding: '5px',color:'black' }}>15-30</Button>
                    </Grid>
                    <Grid item>
                      <Button color="secondary" style={{ backgroundColor: '#EFEFEF', borderRadius: '20px', height: '90%', width: '50%',  padding: '5px',color:'black' }}>15-30</Button>
                    </Grid>
                  </Grid>



                </Paper>
                
              </Grid>
          </>
        );
      case 1:
        return (
          <>
             <Grid item style={{ width: '90%', display: 'flex', justifyContent: 'center' }}>
             <Paper style={{ width: '90%', height: '150px', backgroundColor: '#81311A', borderRadius: '10px', display: 'flex', flexDirection: 'column', paddingBottom: '12px' }}>
                  <Typography variant="body1" style={{ marginBottom: '20px', textAlign: 'left', paddingTop: '10px',color:'white', fontWeight:'bold' ,paddingLeft:'12px' }}>What is your Food?</Typography>
                  <Grid container direction="row" spacing={1} style={{ width: '100%', justifyContent: 'flex-start', paddingLeft: '15px' }}>
                    <Grid item>
                      <Button color="primary" style={{ backgroundColor: '#EFEFEF', borderRadius: '20px', height: '90%', width: '50%',  padding: '5px',color:'black' }}>15-30</Button>
                    </Grid>

                    <Grid item>
                      <Button color="secondary" style={{ backgroundColor: '#EFEFEF', borderRadius: '20px', height: '90%', width: '50%',  padding: '5px',color:'black'}}>15-30</Button>
                    </Grid>
                    <Grid item>
                      <Button color="secondary" style={{ backgroundColor: '#EFEFEF', borderRadius: '20px', height: '90%', width: '50%',  padding: '5px',color:'black' }}>15-30</Button>
                    </Grid>
                  </Grid>
                  <Grid container direction="row" spacing={1} style={{ width: '100%', justifyContent: 'flex-start', padding: '15px' }}>
                    <Grid item>
                      <Button color="primary" style={{ backgroundColor: '#EFEFEF', borderRadius: '20px', height: '90%', width: '50%',  padding: '5px',color:'black' }}>15-30</Button>
                    </Grid>

                    <Grid item>
                      <Button color="secondary" style={{ backgroundColor: '#EFEFEF', borderRadius: '20px', height: '90%', width: '50%',  padding: '5px',color:'black' }}>15-30</Button>
                    </Grid>
                    <Grid item>
                      <Button color="secondary" style={{ backgroundColor: '#EFEFEF', borderRadius: '20px', height: '90%', width: '50%',  padding: '5px',color:'black' }}>15-30</Button>
                    </Grid>
                  </Grid>



                </Paper>
                
              </Grid>
              <Grid item style={{ width: '90%', display: 'flex', justifyContent: 'center' }}>
              <Paper style={{ width: '90%', height: '150px', backgroundColor: '#81311A', borderRadius: '10px', display: 'flex', flexDirection: 'column', paddingBottom: '12px' }}>
                  <Typography variant="body1" style={{ marginBottom: '20px', textAlign: 'left', paddingTop: '10px',color:'white', fontWeight:'bold' ,paddingLeft:'12px' }}>What is your Faviourate color?</Typography>
                  <Grid container direction="row" spacing={1} style={{ width: '100%', justifyContent: 'flex-start', paddingLeft: '15px' }}>
                    <Grid item>
                      <Button color="primary" style={{ backgroundColor: '#EFEFEF', borderRadius: '20px', height: '90%', width: '50%',  padding: '5px',color:'black' }}>15-30</Button>
                    </Grid>

                    <Grid item>
                      <Button color="secondary" style={{ backgroundColor: '#EFEFEF', borderRadius: '20px', height: '90%', width: '50%',  padding: '5px',color:'black'}}>15-30</Button>
                    </Grid>
                    <Grid item>
                      <Button color="secondary" style={{ backgroundColor: '#EFEFEF', borderRadius: '20px', height: '90%', width: '50%',  padding: '5px',color:'black' }}>15-30</Button>
                    </Grid>
                  </Grid>
                  <Grid container direction="row" spacing={1} style={{ width: '100%', justifyContent: 'flex-start', padding: '15px' }}>
                    <Grid item>
                      <Button color="primary" style={{ backgroundColor: '#EFEFEF', borderRadius: '20px', height: '90%', width: '50%',  padding: '5px',color:'black' }}>15-30</Button>
                    </Grid>

                    <Grid item>
                      <Button color="secondary" style={{ backgroundColor: '#EFEFEF', borderRadius: '20px', height: '90%', width: '50%',  padding: '5px',color:'black' }}>15-30</Button>
                    </Grid>
                    <Grid item>
                      <Button color="secondary" style={{ backgroundColor: '#EFEFEF', borderRadius: '20px', height: '90%', width: '50%',  padding: '5px',color:'black' }}>15-30</Button>
                    </Grid>
                  </Grid>



                </Paper>
                
              </Grid>
              <Grid item style={{ width: '90%', display: 'flex', justifyContent: 'center' }}>
              <Paper style={{ width: '90%', height: '150px', backgroundColor: '#81311A', borderRadius: '10px', display: 'flex', flexDirection: 'column', paddingBottom: '12px' }}>
                  <Typography variant="body1" style={{ marginBottom: '20px', textAlign: 'left', paddingTop: '10px',color:'white', fontWeight:'bold' ,paddingLeft:'12px' }}>What is your Weight?</Typography>
                                  <Grid container direction="row" spacing={1} style={{ width: '100%', justifyContent: 'flex-start', paddingLeft: '15px' }}>
                    <Grid item>
                      <Button color="primary" style={{ backgroundColor: '#EFEFEF', borderRadius: '20px', height: '90%', width: '50%',  padding: '5px',color:'black' }}>15-30</Button>
                    </Grid>

                    <Grid item>
                      <Button color="secondary" style={{ backgroundColor: '#EFEFEF', borderRadius: '20px', height: '90%', width: '50%',  padding: '5px',color:'black'}}>15-30</Button>
                    </Grid>
                    <Grid item>
                      <Button color="secondary" style={{ backgroundColor: '#EFEFEF', borderRadius: '20px', height: '90%', width: '50%',  padding: '5px',color:'black' }}>15-30</Button>
                    </Grid>
                  </Grid>
                  <Grid container direction="row" spacing={1} style={{ width: '100%', justifyContent: 'flex-start', padding: '15px' }}>
                    <Grid item>
                      <Button color="primary" style={{ backgroundColor: '#EFEFEF', borderRadius: '20px', height: '90%', width: '50%',  padding: '5px',color:'black' }}>15-30</Button>
                    </Grid>

                    <Grid item>
                      <Button color="secondary" style={{ backgroundColor: '#EFEFEF', borderRadius: '20px', height: '90%', width: '50%',  padding: '5px',color:'black' }}>15-30</Button>
                    </Grid>
                    <Grid item>
                      <Button color="secondary" style={{ backgroundColor: '#EFEFEF', borderRadius: '20px', height: '90%', width: '50%',  padding: '5px',color:'black' }}>15-30</Button>
                    </Grid>
                  </Grid>



                </Paper>
                
              </Grid>
          </>
        );
      case 2:
        return (
          <>
             <Grid item style={{ width: '90%', display: 'flex', justifyContent: 'center' }}>
             <Paper style={{ width: '90%', height: '150px', backgroundColor: '#81311A', borderRadius: '10px', display: 'flex', flexDirection: 'column', paddingBottom: '12px' }}>
                  <Typography variant="body1" style={{ marginBottom: '20px', textAlign: 'left', paddingTop: '10px',color:'white', fontWeight:'bold' ,paddingLeft:'12px' }}>What is your Age?</Typography>
                
                  <Grid container direction="row" spacing={1} style={{ width: '100%', justifyContent: 'flex-start', paddingLeft: '15px' }}>
                    <Grid item>
                      <Button color="primary" style={{ backgroundColor: '#EFEFEF', borderRadius: '20px', height: '90%', width: '50%',  padding: '5px',color:'black' }}>15-30</Button>
                    </Grid>

                    <Grid item>
                      <Button color="secondary" style={{ backgroundColor: '#EFEFEF', borderRadius: '20px', height: '90%', width: '50%',  padding: '5px',color:'black'}}>15-30</Button>
                    </Grid>
                    <Grid item>
                      <Button color="secondary" style={{ backgroundColor: '#EFEFEF', borderRadius: '20px', height: '90%', width: '50%',  padding: '5px',color:'black' }}>15-30</Button>
                    </Grid>
                  </Grid>
                  <Grid container direction="row" spacing={1} style={{ width: '100%', justifyContent: 'flex-start', padding: '15px' }}>
                    <Grid item>
                      <Button color="primary" style={{ backgroundColor: '#EFEFEF', borderRadius: '20px', height: '90%', width: '50%',  padding: '5px',color:'black' }}>15-30</Button>
                    </Grid>

                    <Grid item>
                      <Button color="secondary" style={{ backgroundColor: '#EFEFEF', borderRadius: '20px', height: '90%', width: '50%',  padding: '5px',color:'black' }}>15-30</Button>
                    </Grid>
                    <Grid item>
                      <Button color="secondary" style={{ backgroundColor: '#EFEFEF', borderRadius: '20px', height: '90%', width: '50%',  padding: '5px',color:'black' }}>15-30</Button>
                    </Grid>
                  </Grid>



                </Paper>
                
              </Grid>
              <Grid item style={{ width: '90%', display: 'flex', justifyContent: 'center' }}>
              <Paper style={{ width: '90%', height: '150px', backgroundColor: '#81311A', borderRadius: '10px', display: 'flex', flexDirection: 'column', paddingBottom: '12px' }}>
                  <Typography variant="body1" style={{ marginBottom: '20px', textAlign: 'left', paddingTop: '10px',color:'white', fontWeight:'bold' ,paddingLeft:'12px' }}>What is your Height?</Typography>
                  <Grid container direction="row" spacing={1} style={{ width: '100%', justifyContent: 'flex-start', paddingLeft: '15px' }}>
                    <Grid item>
                      <Button color="primary" style={{ backgroundColor: '#EFEFEF', borderRadius: '20px', height: '90%', width: '50%',  padding: '5px',color:'black' }}>15-30</Button>
                    </Grid>

                    <Grid item>
                      <Button color="secondary" style={{ backgroundColor: '#EFEFEF', borderRadius: '20px', height: '90%', width: '50%',  padding: '5px',color:'black'}}>15-30</Button>
                    </Grid>
                    <Grid item>
                      <Button color="secondary" style={{ backgroundColor: '#EFEFEF', borderRadius: '20px', height: '90%', width: '50%',  padding: '5px',color:'black' }}>15-30</Button>
                    </Grid>
                  </Grid>
                  <Grid container direction="row" spacing={1} style={{ width: '100%', justifyContent: 'flex-start', padding: '15px' }}>
                    <Grid item>
                      <Button color="primary" style={{ backgroundColor: '#EFEFEF', borderRadius: '20px', height: '90%', width: '50%',  padding: '5px',color:'black' }}>15-30</Button>
                    </Grid>

                    <Grid item>
                      <Button color="secondary" style={{ backgroundColor: '#EFEFEF', borderRadius: '20px', height: '90%', width: '50%',  padding: '5px',color:'black' }}>15-30</Button>
                    </Grid>
                    <Grid item>
                      <Button color="secondary" style={{ backgroundColor: '#EFEFEF', borderRadius: '20px', height: '90%', width: '50%',  padding: '5px',color:'black' }}>15-30</Button>
                    </Grid>
                  </Grid>



                </Paper>
                
              </Grid>
              <Grid item style={{ width: '90%', display: 'flex', justifyContent: 'center' }}>
              <Paper style={{ width: '90%', height: '150px', backgroundColor: '#81311A', borderRadius: '10px', display: 'flex', flexDirection: 'column', paddingBottom: '12px' }}>
                  <Typography variant="body1" style={{ marginBottom: '20px', textAlign: 'left', paddingTop: '10px',color:'white', fontWeight:'bold' ,paddingLeft:'12px' }}>What is your Name?</Typography>
                
                  <Grid container direction="row" spacing={1} style={{ width: '100%', justifyContent: 'flex-start', paddingLeft: '15px' }}>
                    <Grid item>
                      <Button color="primary" style={{ backgroundColor: '#EFEFEF', borderRadius: '20px', height: '90%', width: '50%',  padding: '5px',color:'black' }}>15-30</Button>
                    </Grid>

                    <Grid item>
                      <Button color="secondary" style={{ backgroundColor: '#EFEFEF', borderRadius: '20px', height: '90%', width: '50%',  padding: '5px',color:'black'}}>15-30</Button>
                    </Grid>
                    <Grid item>
                      <Button color="secondary" style={{ backgroundColor: '#EFEFEF', borderRadius: '20px', height: '90%', width: '50%',  padding: '5px',color:'black' }}>15-30</Button>
                    </Grid>
                  </Grid>
                  <Grid container direction="row" spacing={1} style={{ width: '100%', justifyContent: 'flex-start', padding: '15px' }}>
                    <Grid item>
                      <Button color="primary" style={{ backgroundColor: '#EFEFEF', borderRadius: '20px', height: '90%', width: '50%',  padding: '5px',color:'black' }}>15-30</Button>
                    </Grid>

                    <Grid item>
                      <Button color="secondary" style={{ backgroundColor: '#EFEFEF', borderRadius: '20px', height: '90%', width: '50%',  padding: '5px',color:'black' }}>15-30</Button>
                    </Grid>
                    <Grid item>
                      <Button color="secondary" style={{ backgroundColor: '#EFEFEF', borderRadius: '20px', height: '90%', width: '50%',  padding: '5px',color:'black' }}>15-30</Button>
                    </Grid>
                  </Grid>



                </Paper>
                
              </Grid>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div style={{ width: '100%', height: '100vh', backgroundColor: '#FFFEF2' }}>
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ height: '100%' }}
    >
      <Grid item xs={11} sm={8} md={6}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Paper style={{ width: '100%', height: '85vh', backgroundColor: '#FCDFA0', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column',marginBottom:'10px',paddingTop:'20px' }}>
          {/* Content goes here */}
          <Grid container direction="column" justifyContent='center' alignItems='center' spacing={2}>
            {/* Call renderForm function to render form elements based on activeStep */}
            {renderForm(activeStep)}
          </Grid>
          {/* Buttons */}
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '90%', marginTop: '10px' }}>
          <Button
  sx={{ backgroundColor: "FCDFA0", color: 'black' }}
  onClick={() => {
    if (activeStep === 0) {
      handleclicklogin(); // Redirect to login if on the first step
    } else {
      handlePrevStep(); // Otherwise, proceed to the next step
    }
  }}
>
  Skip
</Button>

            

            <Button 
  sx={{
    backgroundColor: '#515151',
    color: 'white',
    borderRadius: '12px',
    '&:hover': {
      backgroundColor: 'black' 
    }
  }} 
  onClick={() => {
    if (activeStep === steps.length - 1) {
      // Last step reached, display congratulatory message
      alert("Congratulations, you're registered!");
      // You can replace the alert with any other UI component or action you want
    } else {
      handleNextStep();
    }
  }}
>
  {activeStep === steps.length - 1 ? 'Finish' : 'Continue'}
</Button>

          </div>
        </Paper>
      </Grid>
    </Grid>
  </div>
);
};



export default MultiForm;
