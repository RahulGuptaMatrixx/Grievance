import React, { useState } from "react";
import { Snackbar, Alert, Button } from "@mui/material";

const MuiToaster = () => {

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === "clickaway") return;
        setOpen(false);
    };

    return (
        <div>
            <Button variant="contained" onClick={handleOpen}>
                Show Toast
            </Button>

            <Snackbar
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
            >
                {/* <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
                    This is a success message!
                </Alert> */}

                {/* <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
                    This is a error message!
                </Alert> */}

                <Alert onClose={handleClose} severity="info" sx={{ width: "100%" }}>
                    This is a Info message!
                </Alert>
            </Snackbar>
        </div>
    );
};

export default MuiToaster;
