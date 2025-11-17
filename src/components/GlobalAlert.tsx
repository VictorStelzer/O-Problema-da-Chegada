import * as React from 'react';
import { useGlobalAlertData } from '../context/GlobalAlertData';
import { Alert, Snackbar } from '@mui/material';

export const GlobalAlert: React.FC = () => {

  const { message, messagetype, open, setOpen } = useGlobalAlertData();

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
      <Alert 
        variant="filled" 
        severity={messagetype}  
        onClose={handleClose}
        sx={{ width: '100%' }}
      >
        {message.title && `${message.title} - `}{message.text}
      </Alert>
    </Snackbar>
  );
};
