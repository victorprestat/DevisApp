import React, {useContext, useState, Fragment} from 'react';
import {TodoContext} from '../contexts/TodoContext';
import {Snackbar, Button} from '@material-ui/core';
import SnackbarContent from '@material-ui/core/SnackbarContent';

function checkLevel(level) {
    switch(level) {
        case 'success':
                return 'green';
        case 'error': 
                return 'red';
        default:
                return 'white';

    }
}

function AppSnackbar() {
    const context = useContext(TodoContext);
    return (
        
        <Snackbar autoHideDuration={1000} open={context.message.text !== undefined}>
            {context.message.text && (
            <SnackbarContent style={{backgroundColor: checkLevel(context.message.level)}} message={context.message.text.map((text, index) => (
                <Fragment key={index + ' ' + text}>
                    <span>{text}</span>
                    <br/>
                </Fragment>
            ))} action={[
                <Button 
                onClick={() => {context.setMessage({})}} key='dismiss'
                color='inherit'
                
                >Fermer</Button>
            ]}/>
            )}
            
        </Snackbar>
    );
}

export default AppSnackbar;