import { Grid, Input, TextField ,InputAdornment,IconButton} from '@material-ui/core'
import React from 'react'
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

export default function index() {
    return (
        <div style={{
            boxSizing:"border-box",
            padding:"50px",
            width:"100%",
            background:"#eee",
            marginTop:"70px"
        }}>
            <Grid container alignItems="center">
                <Grid item xs={12} md={8}>
                    <Grid container direction="row">
                        <Grid item xs={4}>
                            <h4>Location</h4>
                        </Grid><Grid item xs={4}>
                            <h4>Contact Us</h4>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Grid container direction="column" justify="flex-start" alignItems="flex-start">
                        <Grid item xs={12}>
                        <h6 style={{margin:"15px 0px"}}>Drop your mail to get a mail back!</h6>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField variant="outlined" label="Email Address" 
                            InputProps={{
                                endAdornment: <InputAdornment position="start" style={{margin:"0px"}}>
                                    <IconButton children={<KeyboardArrowRightIcon />}></IconButton>
                                </InputAdornment>,
                            }}></TextField>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}
