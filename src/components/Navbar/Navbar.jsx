import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons';
import logo from '../../assets/commerce.png';
import useStyle from './Style';

const Navbar = () => {
    const classes = useStyle();
    return (
        <>
            <AppBar position="fixed" className={classes.AppBar} color="inherit" >
                <Toolbar>
                    <Typography variant="h6" >
                        <img src={logo} alt="commerce.js" height="25px" className={classes.image} />
                        Amazing
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.button}>
                        <IconButton aria-label="Show cart item " color="inherit">
                            <Badge badgeContent={2} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
