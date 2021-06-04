import React from 'react';
import { Container, Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { useDispatch } from 'react-redux';

import Header from '../components/Header';
import PostLists from '../components/PostLists';
import useStyles from './Styles';
import { showModal } from '../redux/actions';
import CreatePostModal from '../components/CreatePostModal';

const HomePage = () => {
    const classes = useStyles();

    const dispatch = useDispatch();
    const openCreatePostModal = React.useCallback(() => {
        dispatch(showModal());
    }, [dispatch]);
    return ( <
        Container maxWidth = "lg" >
        <
        Header > < /Header> <
        CreatePostModal / >
        <
        PostLists > < /PostLists> <
        Fab color = "primary"
        className = { classes.fab }
        onClick = { openCreatePostModal } >
        <
        AddIcon / >
        <
        /Fab> <
        /Container>

    );
}

export default HomePage;