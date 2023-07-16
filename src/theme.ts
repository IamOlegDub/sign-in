import { createTheme } from '@mui/material/styles';
export const theme = createTheme({
    typography: {
        fontFamily: `"Montserrat", sans-serif`,
        fontSize: 14,
        fontWeightRegular: 400,
        fontWeightMedium: 600,
        fontWeightBold: 700,
    },
    palette: {
        primary: {
            main: '#e67e22',
        },
        secondary: {
            main: '#FFFFFF',
        },
        background: {
            paper: '#2c3e50',
        },
        text: {
            primary: '#FFFFFF',
            secondary: '#218c74',
        },
    },
});
