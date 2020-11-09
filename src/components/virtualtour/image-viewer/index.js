import { Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import data from '../data'

export default function index({hideMe,index}) {
    const {heading,text,image} = data[index]
    const styles = makeStyles(theme=>({
        overlay:{
            width:"100vw",
            height:"100vh",
            position:"fixed",
            left:"0",
            top:"0",
            background:"rgba(0,0,0,0.6)",
            display:'flex',
            justifyContent:"center",
            alignItems:"center",
            zIndex:"999"
        },
        innerContainer:{
            background:"white",
            borderRadius:"12px",
            padding:"20px"
        }
    }));
    const classes = styles();
    return (
        <div className={classes.overlay} onClick={hideMe}>
            <Grid container justify="center">
                <Grid item xs={10} md={8} className={classes.innerContainer}>
                    <Grid container justify="center">
                    <Grid item xs={6}>
                    <img src={image}/>
                </Grid>
                <Grid item xs={6} style={{textAlign:"left"}}>
                    {heading ? <h4 style={{fontSize:"30px"}}>{heading}</h4>: null}
                    <p>{text}</p>
                </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}
