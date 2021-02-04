import React, {useContext, useState} from 'react';
import {TodoContext} from '../contexts/TodoContext';
import {Snackbar, Button} from '@material-ui/core';
import SnackbarContent from '@material-ui/core/SnackbarContent';


function AppSnackbar() {
    const context = useContext(TodoContext);
    return (
        <Snackbar autoHideDuration={1000} open={context.message.text !== undefined}>
            <SnackbarContent message={context.message.text} action={[
                <Button key='dismiss'> dismiss</Button>
            ]}/>
        </Snackbar>
    );
}

export default AppSnackbar;