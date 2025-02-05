import React, { createContext, useContext, useState, useCallback } from "react";
import { Snackbar, Alert } from "@mui/material";
const ToasterContext = createContext();

export const useToaster = () => {
    return useContext(ToasterContext);
};

export const ToasterProvider = ({ children }) => {
    const [toast, setToast] = useState({
        open: false,
        message: "",
        severity: "success",
    });

    // Show Toast
    const showToast = useCallback((message, severity = "success") => {
        setToast({ open: true, message, severity });
    }, []);

    // Close Toast
    const handleClose = (event, reason) => {
        if (reason === "clickaway") return;
        setToast((prev) => ({ ...prev, open: false }));
    };

    return (
        <ToasterContext.Provider value={{ showToast }}>
            {children}
            <Snackbar
                open={toast.open}
                autoHideDuration={3000}
                onClose={handleClose}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                sx={{ maxWidth: "45vw", overflow: "hidden" }} // Adjust height as needed
            >
                <Alert
                    onClose={handleClose}
                    severity={toast.severity}
                    sx={{ width: "100%", maxWidth: "45vw", overflow: "hidden", display: "flex", alignItems: "center" }}
                >
                    {toast.message}
                </Alert>
            </Snackbar>
        </ToasterContext.Provider>
    );
};
