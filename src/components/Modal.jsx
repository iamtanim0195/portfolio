"use client"
import { Box, Button, Modal as MuiModal, Typography } from '@mui/material';
import { useState } from 'react';

const Modal = ({ title, liveUrl, description, githuburl, techStack }) => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        maxWidth: '90%',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button className='text-red-600' onClick={handleOpen}>Details</Button>
            <MuiModal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Title: {title}
                    </Typography>
                    <div>
                        <p> <span className='text-xl'>Live URL:</span> {liveUrl}</p>
                        <p> <span className='text-xl'>Github URL:</span>{githuburl}</p>
                        <p> {description}</p>
                        <p className='text-xl'>Tech Stack:</p>
                        <ul>
                            {techStack.map((tech, index) => (
                                <li key={index}>{tech}</li>
                            ))}
                        </ul>
                    </div>
                </Box>
            </MuiModal>
        </div>
    );
}

export default Modal;
