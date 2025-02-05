import React, { useState } from "react";
import { Modal, Box, Button, Typography, Backdrop } from "@mui/material";
import { motion } from "framer-motion";
import { MdWarning } from "react-icons/md";

const ConfirmationModal = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    // const handleModalClose = (event, reason) => {
    //     if (reason !== "backdropClick") {
    //         handleClose();
    //     }
    // };

    return (
        <>
            <Button variant="contained" onClick={handleOpen}>Open Modal</Button>
            <Modal
                open={open}
                onClose={handleClose}
                closeAfterTransition
                // disableEnforceFocus
                disableEscapeKeyDown={false}
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: { sx: { backgroundColor: "rgba(0, 0, 0, 0.5)", transition: "opacity 0.5s ease" } }
                }}
            >
                <Box
                    component={motion.div}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: 400,
                        bgcolor: "background.paper",
                        boxShadow: 24,
                        p: 4,
                        borderRadius: 2,
                        textAlign: "center",
                    }}
                >
                    <MdWarning size={50} color="#f44336" style={{ marginBottom: "16px" }} /> {/* Warning Icon */}
                    <Typography variant="h6" component="h2" gutterBottom>
                        Are you sure you want to delete this?
                    </Typography>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                        This action cannot be undone.
                    </Typography>
                    <Button
                        variant="contained"
                        color="error"
                        onClick={handleClose}
                        sx={{ mt: 2, mr: 1 }}
                    >
                        Cancel
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => {
                            handleClose();
                            // Add your delete logic here
                        }}
                        sx={{ mt: 2 }}
                    >
                        Delete
                    </Button>
                </Box>
            </Modal>
        </>
    );
};

export default ConfirmationModal;
