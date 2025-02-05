import { Button } from '@mui/material';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BackDropLoader from 'src/components/loaders/BackDropLoader';
import LinearLoader from 'src/components/loaders/LinerLoader';
import AnimatedModal from 'src/components/Modal';
import { TOAST_TYPE } from 'src/consts/common';
import { useToaster } from 'src/context/TosterContext';

const Dashboard = () => {
  const {showToast} = useToaster();
  const navigate = useNavigate();
  useEffect(()=>{
    showToast("Login Success.", TOAST_TYPE.SUCCESS)
    // showToast("Success! Operation completed.", TOAST_TYPE.ERROR)
    // showToast("Success! Operation completed.", TOAST_TYPE.WARNING)
    // showToast("Success! Operation completed.", TOAST_TYPE.INFO)
  },[])
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          backgroundColor: '#f8f9fa',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <div
          style={{
            background: 'white',
            padding: '40px',
            borderRadius: '10px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
            width: '80%',
            maxWidth: '500px',
          }}
        >
          <h1
            style={{
              fontSize: '2.8rem',
              color: '#2d3e50',
              marginBottom: '20px',
              fontWeight: 'bold',
            }}
          >
            Welcome to Grievance Portal
          </h1>
          <p
            style={{
              fontSize: '1.2rem',
              color: '#6c757d',
              marginBottom: '30px',
              lineHeight: '1.5',
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              navigate('/')
            }}
          >
            Back
          </Button>
        </div>
      </div>
      {
        false
        &&
        <BackDropLoader />
      }
      {
        false
        &&
        <LinearLoader/>
      }
      {/* <AnimatedModal/> */}
    </>
  );
};

export default Dashboard;
