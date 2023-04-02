import {  Container, Grow, Grid } from "@material-ui/core";
import useStyles from './styles';
import React, {useEffect, useState} from "react";
import { useDispatch} from 'react-redux';


import Form from '../Forms/Form';




const Home = () => {
    const [currentId, setCurrentId] = useState(null)
    const classes = useStyles();
    const dispatch = useDispatch(); 

    useEffect(() =>{
    }, [currentId, dispatch])

    return (
        <Container>
            <Grow in>
                <Container >
                    <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                        <Grid className={classes.formContainer} item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
                
}

export default Home;