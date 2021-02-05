import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {
    AppBar,
    Toolbar,
    IconButton,
    Box,
    Button,
    Drawer,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    makeStyles,
    Typography,
} from '@material-ui/core';
import {Menu as MenuIcon, List as ListIcon, Label as LabelIcon} from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
    menuIcon: {
        marginRight: theme.spacing(2),
    },
    list: {
        width: '200px',
    },
    link:     {
        textDecoration: 'none',
        color:          theme.palette.text.primary,
    },
}));

const Navigation = () => {
    const classes = useStyles();
    const [drawerOpen, setDrawerOpen] = useState(false);
    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    const drawerItems = [
        {text: 'TodoList', icon: <ListIcon/>, link: '/todo-list'},
        {text: 'Tags', icon: <LabelIcon/>, link: '/tag-list'},
    ];

    return (
        <AppBar position="fixed">
            <Toolbar>
                <IconButton onClick={toggleDrawer} className= {classes.menuIcon} edge="start"><MenuIcon/></IconButton>
                <Link className={classes.link} to="/todo-list"> 
                <Typography variant="h6" color="textPrimary" underline="none">DevisApp</Typography>
                </Link>
                <Box flexGrow={1}/>
                <Button>Button</Button>
            </Toolbar>
            <Drawer anchor="left" variant="temporary" onClose={toggleDrawer} open={drawerOpen}>
                <List className={classes.list}>
                    {drawerItems.map(prop => (
                        <Link className={classes.link} to={prop.link} key={prop.text}>
                        <ListItem onClick={toggleDrawer} button key={prop.text}>
                            <ListItemIcon>{prop.icon}</ListItemIcon>
                            <ListItemText>{prop.text}</ListItemText>
                        </ListItem>
                        </Link>
                    ))}
                </List>
            </Drawer>
        </AppBar>


    );
};

export default Navigation;