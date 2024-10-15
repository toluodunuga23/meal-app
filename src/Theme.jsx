// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#2976d2', // Blue color
        },
        secondary: {
            main: '#ac4142', // Red color
        },
        background: {
            default: '#f4f4f4', // Light grey background
        },
    },
    typography: {
        h5: {
            fontWeight: 'bold',
        },
        h6: {
            fontWeight: 'normal',
        },
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    boxShadow: 'none', // No shadow for AppBar
                },
            },
        },
        MuiInputBase: {
            styleOverrides: {
                root: {
                    color: '#fff', // White text for InputBase
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    color: '#fff', // White text for Typography
                },
            },
        },
    },
});

export default theme;
