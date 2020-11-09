import { Grid } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import Card from './card'
import data from './data'
export default function Tour() {
    const [newData, setNewData] = useState([]);
    useEffect(()=>{
        setNewData(data.sort((a,b)=>a.text.length-b.text.length))
    },[])
    return (
        
            <>
             
        <Grid container justify="center" style={{marginTop:"20px"}}>
            <Grid item xs={10}>
            <h1 style={{ textAlign: "left", color: "#444" }}>Virtual tour of Heritage Gallery from WAP to RWF:</h1>
            </Grid>
            <Grid item xs={10} sm={10} justify="center" >
                <Grid container spacing={4} justify="space-evenly">
                {
                newData.map((i, index)=>{return(<Grid item xs={12} md={3}>
                    <Card {...i} index={index}></Card>
                </Grid>)})
            }
                </Grid>
            </Grid>
        </Grid>
            </>
    )
}
