"use client"
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
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
                    sx: { borderRadius: 2 }
                }}
            >
                <Box sx={{ p: 1 }}>
                    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                        <CloseIcon
                            onClick={handleClose}
                        />
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <DialogTitle variant='h6' sx={{ fontWeight: "bold",color:"black" }}>
                            🎁Congratuations🎉
                        </DialogTitle>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <DialogContent>
                            <DialogContentText variant='h6' sx={{ fontWeight: "bold", color:"black" }}>
                                You have successfully subscribed<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;
                                to our  newslatter
                            </DialogContentText>
                        </DialogContent>
                    </Box>
                </Box>
            </Dialog>
        </React.Fragment>
    );
}