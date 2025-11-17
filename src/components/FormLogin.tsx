import React from 'react';
import { 
    Box, 
    Paper, 
    Typography, 
    TextField, 
    Button, 
    Link,
    InputAdornment,
    IconButton
} from '@mui/material';
import { Visibility, VisibilityOff, Email, Lock } from '@mui/icons-material';
import { useTheme } from '../context/ThemeContext';

export const FormLogin: React.FC = () => {
    const { theme } = useTheme();
    const [showPassword, setShowPassword] = React.useState(false);

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <Paper component="form" sx={styles.formContainer(theme)}>
            <Box sx={styles.formContent}>
                <Typography sx={styles.formTitle(theme)} variant="h4">
                    O Problema da Chegada
                </Typography>
                <Typography sx={styles.formSubtitle(theme)} variant="body2">
                    Entre com suas credenciais para acessar a nave
                </Typography>

                <Box sx={styles.inputContainer}>
                    <TextField
                        fullWidth
                        label="Email"
                        type="email"
                        placeholder="seu.email@espaco.com"
                        sx={styles.textField(theme)}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Email sx={{ color: theme.tertiary }} />
                                </InputAdornment>
                            ),
                        }}
                        InputLabelProps={{
                            sx: { color: theme.secondary }
                        }}
                    />
                </Box>

                <Box sx={styles.inputContainer}>
                    <TextField
                        fullWidth
                        label="Senha"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="••••••••"
                        sx={styles.textField(theme)}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Lock sx={{ color: theme.tertiary }} />
                                </InputAdornment>
                            ),
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={handleTogglePassword}
                                        edge="end"
                                        sx={{ color: theme.tertiary }}
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                        InputLabelProps={{
                            sx: { color: theme.secondary }
                        }}
                    />
                </Box>

                <Box sx={styles.forgotPasswordContainer}>
                    <Link 
                        href="#" 
                        sx={styles.forgotPasswordLink(theme)}
                        underline="hover"
                    >
                        Esqueci minha senha
                    </Link>
                </Box>

                <Button
                    fullWidth
                    variant="contained"
                    sx={styles.loginButton(theme)}
                    type="submit"
                >
                    <Typography sx={styles.buttonText(theme)}>Iniciar Sessão</Typography>
                </Button>

                <Box sx={styles.signupContainer}>
                    <Typography sx={styles.signupText(theme)} variant="body2">
                        Não tem uma conta?{' '}
                        <Link 
                            href="#" 
                            sx={styles.signupLink(theme)}
                            underline="hover"
                        >
                            Criar conta
                        </Link>
                    </Typography>
                </Box>
            </Box>
        </Paper>
    );
};

const styles = {
    formContainer: (theme: any) => ({
        px: { xs: 3, sm: 4 },
        width: '100%',
        borderRadius: 2,
        maxWidth: '500px',
        mb: { xs: 6, sm: 0 },
        py: { xs: 4, sm: 5 },
        background: theme.white,
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    }),
    formContent: {
        display: 'flex',
        flexDirection: 'column',
        gap: 2.5,
    },
    formTitle: (theme: any) => ({
        textAlign: 'center',
        mb: 0.5,
        color: theme.tertiary,
        fontWeight: 700,
        fontSize: '2rem',
        letterSpacing: '0.5px',
    }),
    formSubtitle: (theme: any) => ({
        textAlign: 'center',
        mb: 3,
        color: theme.secondary,
        fontSize: '0.875rem',
    }),
    inputContainer: {
        width: '100%',
    },
    textField: (theme: any) => ({
        '& .MuiOutlinedInput-root': {
            color: theme.black,
            backgroundColor: theme.white,
            borderRadius: 1,
            border: `1px solid ${theme.primary}80`,
            transition: 'all 0.2s ease',
            '&:hover': {
                borderColor: theme.primary,
            },
            '&.Mui-focused': {
                borderColor: theme.tertiary,
            },
            '& fieldset': {
                border: 'none',
            },
        },
        '& .MuiInputBase-input': {
            color: theme.black,
            '&::placeholder': {
                color: theme.secondary,
                opacity: 0.6,
            },
        },
    }),
    forgotPasswordContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
        mt: -1,
    },
    forgotPasswordLink: (theme: any) => ({
        color: theme.tertiary,
        fontSize: '0.875rem',
        textDecoration: 'none',
        transition: 'all 0.2s ease',
        '&:hover': {
            opacity: 0.8,
        },
    }),
    loginButton: (theme: any) => ({
        mt: 1,
        py: 1.5,
        borderRadius: 1,
        background: theme.tertiary,
        border: 'none',
        textTransform: 'none',
        transition: 'all 0.2s ease',
        '&:hover': {
            background: theme.tertiary,
            opacity: 0.9,
        },
    }),
    buttonText: (theme: any) => ({
        fontWeight: 700,
        fontSize: '1rem',
        color: theme.white,
    }),
    signupContainer: {
        display: 'flex',
        justifyContent: 'center',
        mt: 1,
    },
    signupText: (theme: any) => ({
        color: theme.secondary,
        opacity: 0.8,
    }),
    signupLink: (theme: any) => ({
        color: theme.tertiary,
        fontWeight: 600,
        textDecoration: 'none',
        transition: 'all 0.2s ease',
        '&:hover': {
            opacity: 0.8,
        },
    }),
};