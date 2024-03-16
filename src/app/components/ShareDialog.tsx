import React from 'react';
import Dialog from '@mui/material/Dialog';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import { Box } from '@mui/material';

export default function ShareDialog() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <Dialog
                open={open}
                onClose={handleClose}
                PaperProps={{
                    sx: { borderRadius: 2, border: "1px solid" }
                }}
            >
                <Box sx={{ p: 1 }}>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <DialogTitle>Share via</DialogTitle>
                        <CloseIcon sx={{ position: 'absolute', right: 0, top: 0, cursor: 'pointer' }} onClick={handleClose} />
                    </Box>
                    <Box sx={{ padding: 1 }}>
                        <Box sx={{ padding: 1, gap: 2, justifyContent: "space-evenly", display: "flex" }}>
                            <FacebookRoundedIcon onClick={handleClose} />
                            <InstagramIcon onClick={handleClose} />
                            <TwitterIcon onClick={handleClose} />
                            <ShareRoundedIcon onClick={handleClose} />
                        </Box>
                        <Box sx={{ padding: 1, gap: 2, justifyContent: "space-evenly", display: "flex" }}>
                            <YouTubeIcon onClick={handleClose} />
                            <TelegramIcon onClick={handleClose} />
                            <LinkedInIcon onClick={handleClose} />
                            <WhatsAppIcon onClick={handleClose} />
                        </Box>
                    </Box>
                </Box>
            </Dialog>
        </React.Fragment>
    );
}
