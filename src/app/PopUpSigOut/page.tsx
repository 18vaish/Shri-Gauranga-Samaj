"use client"
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { Box } from '@mui/material';

export default function AlertDialog() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <Button variant="outlined" onClick={handleClickOpen}>
                Open alert dialog
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                PaperProps={{
                    sx: { borderRadius: 2, border:"1px solid black"}
                }}
            >
                <Box sx={{ p: 1}}>
                    <Box sx={{ display: "flex", alignItems: "center", height:150}}>
                        <DialogTitle variant='h6' sx={{ display:"flex",fontWeight: "bold",color:"black" }}>
                        You’ve successfully signed out.
                        </DialogTitle>
                    </Box>
                </Box>
            </Dialog>
        </React.Fragment>
    );
}