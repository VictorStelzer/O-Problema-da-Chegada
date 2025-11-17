import React from 'react';
import { Box } from '@mui/material';
import { useTheme } from "../context/ThemeContext";
import { FormLogin } from '../components/FormLogin';

export const LoginPage: React.FC = () => {
    const { theme } = useTheme();

    return (
        <Box sx={styles.pageContainer}>
            <Box component="video" autoPlay loop muted playsInline sx={styles.videoBackground}>
                <source src={theme.fundoLogin} type="video/mp4" />
            </Box>
            <Box sx={styles.contentContainer}>
                <FormLogin />
            </Box>
        </Box>
    );
};

const styles = {
    pageContainer: {
        width: '100%',
        display: 'flex',
        minHeight: '100vh',
        overflow: 'hidden',
        position: 'relative'
    },
    videoBackground: {
        top: 0,
        left: 0,
        zIndex: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        position: 'absolute'
    },
    contentContainer: {
        zIndex: 1,
        width: '100%',
        display: 'flex',
        minHeight: '100vh',
        alignItems: 'center',
        position: 'relative',
        justifyContent: 'center'
    }
};
