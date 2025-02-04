import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
    const navigate = useNavigate();

    const handleBackToHome = () => {
        navigate('/');
    };

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                backgroundColor: '#f0f0f0',
                fontFamily: 'Arial, sans-serif',
                padding: '20px',
            }}
        >
            <div
                style={{
                    backgroundColor: 'white',
                    padding: '30px',
                    borderRadius: '8px',
                    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
                    textAlign: 'center',
                    width: '100%',
                    maxWidth: '400px',
                    border: '1px solid #ddd',
                }}
            >
                <h1
                    style={{
                        fontSize: '2.5rem',
                        color: '#333',
                        marginBottom: '15px',
                        fontWeight: '500',
                    }}
                >
                    404
                </h1>
                <p
                    style={{
                        fontSize: '1rem',
                        color: '#6c757d',
                        marginBottom: '25px',
                        lineHeight: '1.6',
                    }}
                >
                    The page you are looking for does not exist or has been moved. Please check the URL or return to the homepage.
                </p>
                <Button
                    variant="outlined"
                    color="primary"
                    onClick={handleBackToHome}
                    style={{
                        fontSize: '1rem',
                        padding: '8px 16px',
                        borderRadius: '20px',
                    }}
                >
                    Back to Home
                </Button>
            </div>
        </div>
    );
};

export default PageNotFound;
