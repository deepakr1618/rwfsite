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
        
            <React.Fragment>
             
        <Grid container justify="center" style={{marginTop:"20px"}}>
            <Grid item xs={10}>
            <h1 style={{ textAlign: "left", color: "#444" }}>Virtual tour of Art Gallery from WAP to RWF:</h1>
            <p style={{ textAlign: "left", color: "#444" }}>In a quest to connect Art and Railways, an Art Camp was organized at Rail Wheel Factory on 13th and 14th May 2016, in which renowned artists from Karnataka were invited to paint & make murals inside RWF factory premises.  RWF’s own Art Club staff also gave shape to their creative energy. Children also revealed their minds in brushes and colours.   
The Paintings made during the Art Camp has been displayed in the Heritage Gallery, of RWF. Here is a tour of this art gallery.  

            </p>
            </Grid>
            <Grid item xs={10} sm={10} justify="center" >
                <Grid container spacing={4} justify="space-evenly">
                {
                newData.map((i)=>{return(<Grid item item xs={12} md={3}>
                    <Card {...i}></Card>
                </Grid>)})
            }
                </Grid>
            </Grid>
        </Grid>
            </React.Fragment>
    )
}
