import React, {useState} from 'react';
import {
    AppBar,
    Toolbar,
    IconButton,
    Box,
    Button,
    Drawer,
    List,
    Link,
    ListItem,
    ListItemText,
    ListItemIcon,
    makeStyles,
} from '@material-ui/core';
import {Menu as MenuIcon, List as ListIcon, Label as LabelIcon} from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
    menuIcon: {
        marginRight: theme.spacing(2),
    },
    list: {
        width: '200px',
    },
}));

const Navigation = () => {
    const classes = useStyles();
    const [drawerOpen, setDrawerOpen] = useState(false);
    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    const drawerItems = [
        {text: 'TodoList', icon: <ListIcon/>},
        {text: 'Tags', icon: <LabelIcon/>},
    ];

    return (
        <AppBar position="fixed">
            <Toolbar>
                <IconButton onClick={toggleDrawer} className= {classes.menuIcon} edge="start"><MenuIcon/></IconButton>
                <Link href="/" variant="h6" color="textPrimary" underline="none">DevisApp</Link>
                <Box flexGrow={1}/>
                <Button>Button</Button>
            </Toolbar>
            <Drawer anchor="left" variant="temporary" onClose={toggleDrawer} open={drawerOpen}>
                <List className={classes.list}>
                    {drawerItems.map(prop => (
                        <ListItem onClick={toggleDrawer} button key={prop.text}>
                            <ListItemIcon>{prop.icon}</ListItemIcon>
                            <ListItemText>{prop.text}</ListItemText>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </AppBar>


    );
};

export default Navigation;