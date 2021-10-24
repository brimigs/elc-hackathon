/*
    A spinner for loading
*/

import React from 'react';
import { makeStyles } from '@mui/styles';

import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const useStyles = makeStyles((theme) => ({
    backdrop: {
        color: '#fff',
        zIndex: 9999,
    },
}));

export default function Loading(props) {
    const classes = useStyles();

    return (
        <Backdrop className={classes.backdrop} open={props.open}>
            <CircularProgress color="inherit" />
        </Backdrop>
    )
}