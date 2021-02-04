import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import { CssBaseline } from '@material-ui/core';

const theme = createMuiTheme({
    palette: {
            type: 'dark'
    }
})

const DefaultThemeProvider = (props) => {
    
    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline/>
            {props.children}
        </MuiThemeProvider>
    );
}

export default DefaultThemeProvider;