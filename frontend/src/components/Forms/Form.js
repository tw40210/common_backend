import React, {useState, useEffect} from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';

import useStyles from './styles';

const Form = ({currentId, setCurrentId})=>{
    const my_state = useSelector((state) => state.My_state);
    const [roleData, setRoleData] = useState({ Name: '', Job: '', Personality: '', Skills: ''});
    
    const classes = useStyles();
    const dispatch = useDispatch();


    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const clear = () => {

    }

    return (
        <Paper className={classes.paper}>
            
            <form autoComplete="off" noValidate className={`${classes.roots} ${classes.form}`} onSubmit={handleSubmit}>

                <Typography variant="h6">Create a role</Typography>
                <TextField className={classes.textInput} name="Name" variant="outlined" label="Name" fullWidth value={roleData.Name} onChange={(e)=>{setRoleData({...roleData, Name:e.target.value})}}/>
                <TextField className={classes.textInput} name="Job" variant="outlined" label="Job" fullWidth value={roleData.Job} onChange={(e)=>{setRoleData({...roleData, Job:e.target.value})}}/>
                <TextField className={classes.textInput} name="Personality" variant="outlined" label="Personality" fullWidth value={roleData.Personality} onChange={(e)=>{setRoleData({...roleData, Personality:e.target.value})}}/>
                <TextField className={classes.textInput} name="Skills" variant="outlined" label="Skills" fullWidth value={roleData.Skills} onChange={(e)=>{setRoleData({...roleData, Skills:e.target.value.split(',')})}}/>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>

            </form>
        </Paper>
    ); 
}

export default Form;