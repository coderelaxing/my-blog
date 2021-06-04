import React from 'react';
import { Typography } from '@material-ui/core'

import useStyles from './styles';


const Header = () => {
    const classes = useStyles();
    return ( <
        Typography variant = "h4"
        align = "center"
        className = { classes.container } >
        My Blog <
        /Typography>
    );
}

export default Header;