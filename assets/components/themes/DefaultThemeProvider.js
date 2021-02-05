import React from 'react';
import { MuiThemeProvider, createMuiTheme, responsiveFontSizes } from '@material-ui/core';
import { CssBaseline } from '@material-ui/core';

const theme = createMuiTheme({
    palette: {
            type: 'dark'
    }
})

const responsiveTheme = responsiveFontSizes(theme);

const DefaultThemeProvider = (props) => {
    
    return (
        <MuiThemeProvider theme={responsiveTheme}>
            <CssBaseline/>
            {props.children}
        </MuiThemeProvider>
    );
}

export default DefaultThemeProvider;