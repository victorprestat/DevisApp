import React from 'react';
import {Box, Typography, Button} from '@material-ui/core/';
import {Link} from 'react-router-dom';

const NotFound = () => {
    return (
        <Box textAlign="center">
            <Typography variant="h1">Page introuvable : erreur 404</Typography>
            <Link style={{textDecoration: 'none'}} to="/">
                <Button color="primary" variant="contained" size="large">Page d'acceuil</Button>
            </Link>
        </Box>
    );
};

export default NotFound;